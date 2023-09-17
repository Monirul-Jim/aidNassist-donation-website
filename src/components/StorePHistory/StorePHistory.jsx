'use client'
import useAuth from "@/hooks/useAuth";
import useSslMoney from "@/hooks/useSslMoney";
import { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import ReactToPrint from "react-to-print";


const StorePHistory = () => {
    const [categories] = useSslMoney()
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const ref = useRef()
    const { user } = useAuth()

    // useEffect(() => {
    //     getPaymentHistory();
    // }, []);

    // const getPaymentHistory = async () => {


    //     let response = await fetch(`/api/sslmoneyfromdb/${user?.email}`);
    //     let data = await response.json();
    //     let result = data.result;
    //     setPaymentHistory(result);
    //     setIsLoading(false);

    // };

    const total = (categories.reduce((sum, item) => sum + item?.price, 0) / 100).toFixed(2);
    // console.log(total);




    return (
        <div ref={ref}>
            <div className=" mt-40">


                <div className="w-3/4 mx-auto">
                    <h1>Your Total Donate Money For Human: ${total}</h1>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="py-2 text-xs md:text-base ">SI No</th>
                                <th className="py-2 text-xs md:text-base  text-left">User Email</th>
                                <th className="py-2 text-xs md:text-base  text-left">TransactionId</th>
                                <th className="py-2 text-xs md:text-base  text-left">Donate Money</th>
                                <th className="py-2 text-xs md:text-base ">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((item, index) => (
                                <tr key={item._id} className="border-b border-gray-200">
                                    <td className="py-3 text-center text-xs md:text-base">{index + 1}</td>

                                    <td className="py-3 text-xs md:text-base ">{item.email}</td>
                                    <td className="py-3 text-xs md:text-base">{item.tran_id}</td>
                                    <td className="py-3 text-xs md:text-base text-left">${item?.price}</td>
                                    <td className="py-3 text-xs md:text-base text-left">{item.status}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StorePHistory;