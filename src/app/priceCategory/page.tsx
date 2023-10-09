'use client'
import ModalPriceCategory from "../../components/ModalPriceCategory";
import TableItemsPriceCategory from "@/components/TableItemsPriceCategory";
import React from "react";
import {useDisclosure} from "@nextui-org/react";
import addIcon from "@/icons/add.png";
import Image from "next/image";
import Navigation from "../../components/Navigation";


const PriceCategory = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (

        <>

            <header>
                <Navigation />
            </header>
            <main>
                <div>
                    <h2 className="text-center mt-20 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Price Category
                    </h2>
                </div>

                <div className={"container flex justify-center mb-2 items-center"} style={{ width: "30%" }}>
                    <label className={"pe-3"}>Add New Price</label>

                    <button onClick={onOpen} className={"py-2 px-3 bg-purple-300 hover:bg-purple-400 rounded-md outline-0"}>
                       <Image src={addIcon} alt={"AddIcon"} width={20} height={20}/>
                    </button>
                </div>

                <ModalPriceCategory Open={isOpen} OpenChange={onOpenChange} />

            </main>

        </>
    )
}

export default PriceCategory;