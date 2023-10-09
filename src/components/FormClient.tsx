"use client"
import React, {FormEventHandler, useEffect, useState} from "react";
import IProduct from "@/types/IProduct";
import { Checkbox } from "@nextui-org/react";
import axios from "axios";
import TableClients from "../components/TableClients";
import IClient from "@/types/IClient";



const FormClient = () => {

    const [clientName, setClientName] = useState<string>();
    const [discount, setDiscount] = useState<number>();
    const [discountApplied, setDiscountApplied] = useState<boolean>(true);
    const [customers, setCustomer] = useState<IClient[]>();

    useEffect(() => {
        getCustomer();
    },[]);

    const getCustomer = async () => {
        const response = await fetch("http://www.localhost:8080/api/customer/all", {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        }).then(response => response.json());
        setCustomer(response.data)
    }

    const deleteCustomer = async (customer:IClient) => {
        const data = new URLSearchParams();
        data.append('id', String(customer.id));
        const res = await axios.delete('http://www.localhost:8080/api/customer', { data});
        await getCustomer();
    }

    const handleClientName = ({target}:{target:any}) => {
        const {name,value} = target;
        if(name === "clientName"){
            setClientName(value);
        }

        if(name === "discountName"){
            setDiscount(value);
        }
    }

    const handleCheckbox = () => {
        setDiscountApplied(!discountApplied);
    }

    const handleSubmit = async (event:any) => {
      event.preventDefault();
      const customer = {
          "name":clientName,
          "discount":discountApplied,
          "discountValue": discount
      }

        await fetch("http://www.localhost:8080/api/customer", {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(customer)
        }).then(response => {console.log(response.status); });
      await getCustomer();
    }

    return (

        <>

            <div className={"flex flex-col justify-center h-72 items-center mb-5"}>

                <div className={"w-full max-w-xs shadow-lg rounded px-4 py-5"}>

                    <form onSubmit={handleSubmit}>

                        <div className={"mb-3"}>
                            <label htmlFor="ClientName" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <input  className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    name ="clientName" placeholder={"Introduce your name"} onInput={handleClientName}/>
                        </div>

                        <div className={"mb-3"}>
                            <label htmlFor="DiscountClient" className="block text-sm font-medium leading-6 text-gray-900">
                                Discount
                            </label>
                            <input  className="shadow appearance-none border  rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    name ="discountName" placeholder={"0.00"} onInput={handleClientName}/>
                        </div>

                        <div className={"mb-2"}>
                            <label htmlFor="DiscountClientApplied" className="block text-sm font-medium leading-6 text-gray-900">
                                Discount applied
                            </label>
                            <Checkbox defaultSelected isSelected={discountApplied} onClick={handleCheckbox} >Option</Checkbox>
                        </div>

                        <div>
                            <button type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                             >
                                Register
                            </button>
                        </div>
                    </form>

                </div>

            </div>
            <TableClients customers={customers!} deleteCustomer={deleteCustomer}/>
        </>
    )
}

export default FormClient;