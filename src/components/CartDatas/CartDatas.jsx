'use client'

import useCart from "@/hooks/useCart";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

const CartDatas = () => {

    const cartData = useCart();

    if (!Array.isArray(cartData)) {
        return <div>No items in the cart</div>;
    }

    const total = cartData.reduce((sum, item) => sum + item.price, 0);

    const handleDelete = item => {
        console.log("This is Delete Function");

    }




    return (
        <div className=" mt-40">
            <div className="flex justify-around items-center mb-20 mx-5 md:mx-14">
                <h2 className="text-center font-bold rounded-lg bg-green-300 px-5 py-2">Total Items: {cartData.length}</h2>
                <h2 className="text-center font-bold rounded-lg bg-green-300 px-5 py-2">Due: ${total}</h2>
                <button className="rounded-lg bg-green-300 px-5 py-2 font-bold">Checkout</button>
            </div>


            <div className="w-3/4 mx-auto">
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











        </div>
    );
};

export default CartDatas;









