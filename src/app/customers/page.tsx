// import FormClient from "/components/FormClient";
import TableClients from "@/components/TableClients";
import React from "react";
import Navigation from "../../components/Navigation";
import FormClient from "../../components/FormClient";


const Customers = () => {

    return (
        <>
            <header>
                <Navigation/>
            </header>

            <main>
                <div>
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        New Client
                    </h2>
                </div>
                <FormClient/>
                {/*<TableClients/>*/}
            </main>
        </>
    )
}

export default Customers;