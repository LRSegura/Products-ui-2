'use client'
import React, {Key, ReactNode, useEffect, useState} from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, SelectItem, Select} from "@nextui-org/react";
import IProduct from "../types/IProduct";
import {log} from "util";
import TableItemsPriceCategory from "../components/TableItemsPriceCategory";
import IPriceCategory from "../types/IPriceCategory";
import IClient from "@/types/IClient";
import axios from "axios";

export default function ModalPriceCategory({Open, OpenChange}: { Open: boolean, OpenChange: any }) {

    const [startRange, setStartRange] = useState<number>();
    const [endRange, setEndRage] = useState<number>();
    const [price, setPrice] = useState<number>();
    const [products, setProducts] = useState<IProduct[] | any>([]);
    const [prices, setPrices] = useState<IPriceCategory[] | any>([]);
    const [idProduct, setIdProduct] = useState<number>();

    useEffect(() => {
        getProducts();
        getPrices();
    }, []);

    const handleInput = ({target}: { target: any }): void => {
        const {name, value} = target;

        if (name === "startRange") {
            setStartRange(value);
        }
        if (name === "endRange") {
            setEndRage(value);
        }
        if (name === "price") {
            setPrice(value);
        }


    }

    const handleSelect = (data:any): void => {
        setIdProduct(data.target.value);
    }

    const handleSubmit = async (e:any): Promise<void> => {
       e.preventDefault();
        const priceObject = {
            "startValue":startRange,
            "endValue":endRange,
            "price": price,
            "idProduct": idProduct
        }

        await fetch("http://www.localhost:8080/api/price", {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(priceObject)
        }).then(response => {console.log(response.status); });
        getPrices();
    }
    const getProducts = async () => {
        const response = await fetch("http://www.localhost:8080/api/product/all", {
            method: 'GET', mode: 'cors', cache: 'default', credentials: 'same-origin', headers: {
                'Content-Type': 'application/json',
            }, redirect: 'follow', referrerPolicy: 'no-referrer'
        }).then(response => response.json());
        setProducts(response.data)
    }

    const getPrices = async () => {
        const response = await fetch("http://www.localhost:8080/api/price/all", {
            method: 'GET', mode: 'cors', cache: 'default', credentials: 'same-origin', headers: {
                'Content-Type': 'application/json',
            }, redirect: 'follow', referrerPolicy: 'no-referrer'
        }).then(response => response.json());
        setPrices(response.data)
    }

    const deletePrice = async (price:IPriceCategory) => {
        const data = new URLSearchParams();
        data.append('id', String(price.id));
        const res = await axios.delete('http://www.localhost:8080/api/price', { data});
        await getPrices();
    }


    return (<>
            <Modal isOpen={Open} onOpenChange={OpenChange} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (<>
                            <ModalHeader className="flex flex-col gap-1">New Range Price</ModalHeader>
                            <ModalBody>

                                <div className="w-full">
                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

                                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-5 ">
                                            <Select
                                                onChange={handleSelect}
                                                label="Select Product"
                                                className="max-w-xs"
                                                color={"default"}
                                                >
                                                {products.map((product: any) => (
                                                    <SelectItem key={product.id} value={product}>
                                                        {product.name}
                                                    </SelectItem>))}
                                            </Select>
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="startRange">
                                                Start Range
                                            </label>
                                            <input onInput={handleInput}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="name" name="startRange" type="number" placeholder="0.0"/>
                                        </div>


                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="endRange">
                                                End Range
                                            </label>
                                            <input onInput={handleInput}
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="endRange" name="endRange" type="number" placeholder="0.0"/>

                                        </div>


                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="price">
                                                Discount
                                            </label>
                                            <input onInput={handleInput}
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="price" name="price" type="number" placeholder="0.0"/>
                                        </div>

                                        <ModalFooter>
                                            <Button color="danger" onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button type={"submit"} color="success" onPress={onClose} className={"text-white"}>
                                                Save
                                            </Button>
                                        </ModalFooter>

                                    </form>

                                </div>

                            </ModalBody>
                        </>)}
                </ModalContent>
            </Modal>
        <TableItemsPriceCategory prices={prices!} products={products!} deletePrice={deletePrice}/>
        </>);
}
