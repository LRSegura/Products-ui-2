'use client'
import {useDisclosure} from "@nextui-org/react";
import Image from "next/image";
// @ts-ignore
import Edit from "@/icons/pen.png";
// @ts-ignore
import Trash from "../icons/trash.png";
import ModalClient from "../components/ModalClient";
import IClient from "../types/IClient";

const TableClients = ({customers, deleteCustomer}:{customers:IClient[], deleteCustomer: any}) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div className={"flex justify-center bg-gray-100 items-center mt-2"}>

                <div className="flex flex-col container" style={{width:"90%"}}>
                    <table className="min-w-full text-center text-sm font-light shadow-lg">
                        <thead className="border-b font-medium bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-4 rounded-tl-xl">Id</th>
                            <th scope="col" className="px-6 py-4 rounded-tl-xl">Name</th>
                            <th scope="col" className="px-6 py-4">Discount</th>
                            <th scope="col" className="px-6 py-4">Discount Value</th>
                            <th scope="col" className="px-6 py-4 rounded-tr-xl">Action</th>
                        </tr>
                        </thead>
                        <tbody className={"bg-white "}>

                        {customers?.map((customer:any, index:number) => (
                            <tr className="border-b " key={index}>
                                <td className="whitespace-nowrap px-6 py-4 rounded-bl-xl">{customer.id}</td>
                                <td className="whitespace-nowrap px-6 py-4 rounded-bl-xl">{customer.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{String(customer.discount)}</td>
                                <td className="whitespace-nowrap px-6 py-4">{customer.discountValue}</td>
                                <td className={"rounded-br-xl"}>
                                    <span>
                                      <button onClick={()=> deleteCustomer(customer)} style={{backgroundColor:"transparent"}}>
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

            <ModalClient Open={isOpen} OpenChange={onOpenChange}/>
        </>

    )
}


export default TableClients;