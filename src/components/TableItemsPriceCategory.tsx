'use client'
import {useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import Edit from "@/icons/pen.png";
import Trash from "../icons/trash.png";
import React from "react";
import ModalPriceCategory from "@/components/ModalPriceCategory";
import IProduct from "../types/IProduct";
import IPriceCategory from "../types/IPriceCategory";

const TableItemsPriceCategory = ({prices, products, deletePrice}:{prices:IPriceCategory[],products:IProduct[], deletePrice:any}) => {

    return (

        <>
                <div className={"flex justify-center"}>

                <div className="flex flex-col container" style={{width:"90%"}}>
                    <table className="min-w-full text-center text-sm font-light shadow-lg">
                        <thead className="border-b font-medium bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-4 rounded-tl-xl">Id</th>
                            <th scope="col" className="px-6 py-4 rounded-tl-xl">Start range</th>
                            <th scope="col" className="px-6 py-4">End range</th>
                            <th scope="col" className="px-6 py-4 rounded-tr-xl">Product</th>
                            <th scope="col" className="px-6 py-4 rounded-tr-xl">Action</th>
                        </tr>
                        </thead>
                        <tbody className={"bg-white "}>

                        {prices.map((price:any, index:number) => (
                            <tr className="border-b " key={index}>
                                <td className="whitespace-nowrap px-6 py-4 rounded-bl-xl">{price.id}</td>
                                <td className="whitespace-nowrap px-6 py-4">{price.startValue}</td>
                                <td className="whitespace-nowrap px-6 py-4">{price.endValue}</td>
                                <td className="whitespace-nowrap px-6 py-4">{price.idProduct}</td>
                                <td className={"rounded-br-xl"}>
                                    <span>
                                      <button onClick={() => deletePrice(price)} style={{backgroundColor:"transparent"}}>
                                          <Image src={Trash} alt={"TrashIcon"} width={20} height={20}/>
                                      </button>
                                  </span>

                                </td>
                            </tr>
                        ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}


export default TableItemsPriceCategory;