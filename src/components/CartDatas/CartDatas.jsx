'use client'

import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const CartDatas = () => {

    const cartData = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useAuth()

    if (!Array.isArray(cartData)) {
        return <div>No items in the cart</div>;
    }

    const total = cartData.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    const handleDelete = async (item) => {
        console.log("This is Delete Function");
        let response = await fetch(`/api/onlyuserscart/${item._id}`, {
            method: "DELETE",
        });
        response = await response.json();
        if (response.success) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        setIsLoading(false);

    }




    const handlePayment = async () => {
        const money = parseFloat(total).toFixed(2);
        console.log( money);
        try {
            const { data } = await axios.post("/api/storepayments/payment", {
                price: money,
                email: user.email,
            });
            window.location.href = data.url;
        } catch (error) {
            toast.error("Something went wrong!");
            console.log(error);
            setIsLoading(false);
        }
    };












    return (
        <div className=" mt-40">
            <div className="flex justify-around items-center mb-20 mx-5 md:mx-14">
                <h2 className="text-center font-bold rounded-lg bg-green-300 px-5 py-2">Total Items: {cartData.length}</h2>
                <h2 className="text-center font-bold rounded-lg bg-green-300 px-5 py-2">Due: ${total}</h2>
                <button onClick={handlePayment} className="rounded-lg bg-green-300 px-5 py-2 font-bold">Checkout</button>
            </div>


            {/* <div className="w-3/4 mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="py-2 text-xs md:text-base ">SI No</th>
                            <th className="py-2 text-xs md:text-base  text-left hidden md:block">Image</th>
                            <th className="py-2 text-xs md:text-base  text-left">Item Name</th>
                            <th className="py-2 text-xs md:text-base  text-left">Category</th>
                            <th className="py-2 text-xs md:text-base  text-left">Price</th>
                            <th className="py-2 text-xs md:text-base ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.map((item, index) => (
                            <tr key={item._id} className="border-b border-gray-200">
                                <td className="py-3 text-center text-xs md:text-base">{index + 1}</td>
                                <td className="py-3 hidden md:block">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={item.itemImg}
                                        alt="Food"
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                </td>
                                <td className="py-3 text-xs md:text-base ">{item.name}</td>
                                <td className="py-3 text-xs md:text-base">{item.category}</td>
                                <td className="py-3 text-xs md:text-base text-left">${item.price}</td>
                                <td className="py-3 text-center">
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-ghost text-xl bg-lime-500 text-white"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}


{isLoading ?
                <div className="text-center">
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> : <div className="w-3/4 mx-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="py-2 text-xs md:text-base ">SI No</th>
                                <th className="py-2 text-xs md:text-base  text-left hidden md:block">Image</th>
                                <th className="py-2 text-xs md:text-base  text-left">Item Name</th>
                                <th className="py-2 text-xs md:text-base  text-left">Category</th>
                                <th className="py-2 text-xs md:text-base  text-left">Price</th>
                                <th className="py-2 text-xs md:text-base ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((item, index) => (
                                <tr key={item._id} className="border-b border-gray-200">
                                    <td className="py-3 text-center text-xs md:text-base">{index + 1}</td>
                                    <td className="py-3 hidden md:block">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={item.itemImg}
                                            alt="Food"
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                    </td>
                                    <td className="py-3 text-xs md:text-base ">{item.name}</td>
                                    <td className="py-3 text-xs md:text-base">{item.category}</td>
                                    <td className="py-3 text-xs md:text-base text-left">${item.price}</td>
                                    <td className="py-3 text-center">
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn btn-ghost text-xl bg-lime-500 text-white"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }












        </div>
    );
};

export default CartDatas;









