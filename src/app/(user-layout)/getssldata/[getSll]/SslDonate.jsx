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

            <div className='grid grid-cols-1 lg:grid-cols-3'>
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
                    className="block text-white mt-4 bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    type="button"
                >

                    {loading ? "Loading.." : "Donate Now"}

                </button>
            ) : (
                <Link href="/login" legacyBehavior>
                    <button className="block text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Login
                    </button>
                </Link>
            )}

        </div>
    );
};

export default SslDonate;