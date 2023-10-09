'use client'
import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

export default function ModalClient({Open, OpenChange}:{Open:boolean, OpenChange:any}) {


    return (
        <>
            {/*<Button onPress={onOpen}>Open Modal</Button>*/}
            <Modal isOpen={Open} onOpenChange={OpenChange} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Edit Client</ModalHeader>
                            <ModalBody>

                                <div className="w-full">
                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <div className={"mb-3"}>
                                            <label htmlFor="ClientName" className="block text-sm font-medium leading-6 text-gray-900">
                                                Name
                                            </label>
                                            <input  className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder={"Introduce your name"} />
                                        </div>

                                        <div className={"mb-3"}>
                                            <label htmlFor="DiscountClient" className="block text-sm font-medium leading-6 text-gray-900">
                                                Discount
                                            </label>
                                            <input  className="shadow appearance-none border  rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder={"0.00"}/>
                                        </div>

                                        <div className={"mb-2"}>
                                            <label htmlFor="DiscountClientApplied" className="block text-sm font-medium leading-6 text-gray-900">
                                                Discount applied
                                            </label>
                                            <input  className="shadow appearance-none border  rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder={"0.00%"} readOnly/>
                                        </div>

                                        <ModalFooter>
                                            <Button color="danger"  onPress={onClose}>
                                                Close
                                            </Button>
                                            <Button color="success" onPress={onClose} className={"text-white"}>
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
