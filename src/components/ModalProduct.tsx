'use client'
import React, {FormEventHandler, useState} from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import IProduct from "@/types/IProduct";

export default function ModalProduct({Open, OpenChange, Products}:{Open:boolean, OpenChange:any, Products:any}) {

    const [name, setName] = useState<string>();
    const [price, setPrice] = useState<number>();

    const handleUpdateProps = ({target}:{target: FormEventHandler<HTMLInputElement> | any}):void => {
        const {name, value} = target;

        if(name === "name"){
            setName(value);
        }
        if(name === "price"){
            setPrice(value);
        }
    }

    const handleSubmit = (e:any):void => {
        e.preventDefault();

        const currentProps: any = {
            id: Products.id,
            name: name === undefined ? Products.name : name,
            price:price === undefined ? Products.price : price
        }

        console.log(currentProps);
    }

    return (
        <>

            <Modal isOpen={Open} onOpenChange={OpenChange} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Edit Product</ModalHeader>
                            <ModalBody>
                                <div className="w-full">
                                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">



                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="Name">
                                                Name
                                            </label>
                                            <input name={"name"} onInput={handleUpdateProps} defaultValue={Products.name}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="Name" type="text" placeholder="Product Name"/>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="Price">
                                                Price
                                            </label>
                                            <input name={"price"} onInput={handleUpdateProps}  defaultValue={Products.price}
                                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="Price" type="number" placeholder="0.00"/>

                                        </div>

                                        <ModalFooter>
                                            <Button color="danger"  onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="success" type={"submit"} onPress={onClose} className={"text-white"}>
                                                Save
                                            </Button>
                                        </ModalFooter>

                                    </form>

                                </div>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
