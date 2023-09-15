'use client'
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const SslDonate = ({ category }) => {
    const { user } = useAuth()
    const [selectedPrice, setSelectedPrice] = useState(" ");
    const [loading, setLoading] = useState(false);
    if (!category) {
        return
    }
    const { donate } = category
    const handlePriceClick = (price) => {
        setSelectedPrice(price);
    };
    const handleDonate = async () => {
        setLoading(true);

        try {
            // Make a POST request to create payment
            const response = await axios.post("/api/create-payment", {
                price: selectedPrice,
                email: user?.email,
                phoneNumber: user?.phoneNumber
                // User's email

            });

            window.location.href = response.data.url;
        } catch (error) {
            toast.error("Error processing payment.");
            setLoading(false);
        }
    };
    return (
        <div>
            {/* {
                donate?.map((e, index) => <div key={index}>


                    <button onClick={() => handlePriceClick(e.price)}> {e.price}</button>


                </div>)

            } */}

            <div className='grid grid-cols-3'>
                {donate?.map((e, index) => (
                    <button
                        key={index}
                        onClick={() => handlePriceClick(e.price)}
                        className="block text-center text-black border dark:bg-black dark:text-white border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 p-4"
                    >
                        {e.price}
                    </button>
                ))}
            </div>
            <input
                type="text"
                value={selectedPrice}
                id="large-input"
                className="block w-full p-4 mt-8 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500"
            />

            {user ? (
                <button
                    onClick={handleDonate}
                    disabled={loading}
                    className="block text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >

                    {loading ? "Loading.." : "Donate Now"}

                </button>
            ) : (
                <Link href="/login" legacyBehavior>
                    <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Login
                    </button>
                </Link>
            )}


            {/* <button className="inline-flex items-center px-3 mt-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Donate
             
            </button> */}
        </div>
    );
};

export default SslDonate;