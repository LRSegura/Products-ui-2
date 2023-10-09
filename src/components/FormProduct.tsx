import IProduct from "../types/IProduct";
import {useEffect, useState} from "react";
import TableItemsProduct from "../components/TableItemsProduct";
import IClient from "@/types/IClient";
import axios from "axios";


const FormProduct = () => {

    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [price, setPrice] = useState<number>();
    const [products, setProducts] = useState<IProduct[] | any>([]);

    useEffect(() => {
        getProducts();
    },[]);

    const handleInput = ({target}:{target: any}):void => {
        const {name, value} = target;

        if(name === "name"){
            setName(value);
        }
        if(name === "price"){
            setPrice(value);
        }
        if(name === "description"){
            setDescription(value);
        }
    }
    const getProducts = async () => {
        const response = await fetch("http://www.localhost:8080/api/product/all", {
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
        setProducts(response.data)
    }

    const deleteProduct = async (product:IProduct) => {
        const data = new URLSearchParams();
        data.append('id', String(product.id));
        const res = await axios.delete('http://www.localhost:8080/api/product', { data});
        await getProducts();
    }

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const product = {
            "name": name,
            "description": description,
            "defaultPrice": price
        }

        await fetch("http://www.localhost:8080/api/product", {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(product)
        }).then(response => {console.log(response.status); });
        await getProducts();
        event.target.reset();
    }

    return (

        <>

            <div className={"flex flex-col justify-center h-72 items-center mb-10"}>

                {/*Start Title*/}
                <div>
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      New Product
                    </h2>
                </div>
                {/*End Title*/}

                {/*Start Form*/}
               <div className={"w-full max-w-xs shadow-lg rounded px-4 py-5"}>

                   <form onSubmit={handleSubmit}>

                       <div className={"mb-4"}>
                           <label htmlFor="Productname" className="block text-sm font-medium leading-6 text-gray-900">
                               Name
                           </label>
                           <input onInput={handleInput} name={"name"}
                               className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mb-3
                                          leading-tight focus:outline-none focus:shadow-outline"
                           placeholder={"Product name"} />
                       </div>

                       <div className={"mb-4"}>
                           <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                               Description
                           </label>
                           <input onInput={handleInput} name={"description"}
                                  className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 mb-3
                                          leading-tight focus:outline-none focus:shadow-outline"
                                  placeholder={"Description"} />
                       </div>

                       <div className={"mb-4"}>
                           <label htmlFor="anything" className="block text-sm font-medium leading-6 text-gray-900">
                               Price
                           </label>
                           <input type={"number"}  onInput={handleInput} name={"price"}
                                  className="shadow appearance-none border
                                  rounded w-full py-1 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                           placeholder={"0.00"}/>
                       </div>

                       <div>
                           <button
                               type="submit"
                               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                           >
                              Register
                           </button>
                       </div>
                   </form>
               </div>
                {/*End Form*/}

            </div>

            <TableItemsProduct Products={products!} deleteProduct={deleteProduct}/>
        </>
    )
}

export default FormProduct;