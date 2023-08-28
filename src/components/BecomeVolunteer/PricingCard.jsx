'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import img1 from "../../../public/causes/charity-2.jpg"
import img2 from "../../../public/causes/charity-4.jpg"

const PricingCard = ({ price, index }) => {
    const [totalCollection, setTotalCollection] = useState(0);

    useEffect(() => {
        const storedTotalCollection = localStorage.getItem(`totalCollection_${index}`);
        if (storedTotalCollection) {
            setTotalCollection(parseInt(storedTotalCollection));
        }
    }, [index]);


    const dynamicSubTitle = (price) => {
        if (price.nickname === 'Food') {
            return <p className="text-green-300">Target 4000$</p>
        } else if (price.nickname === 'Education') {
            return <p className="text-green-300">Target 2000$</p>
        }
    }

    const dynamicImage = (price) => {
        if (price.nickname === 'Food') {
            return img1;
        } else if (price.nickname === 'Education') {
            return img2;
        }
    }


    const handlePayNow = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/payment', {
            priceId: price.id
        },
            {
                headers: {
                    "content-type": "application/json"
                },
            }
        );
        const newTotal = totalCollection + 200;
        setTotalCollection(newTotal);
        localStorage.setItem(`totalCollection_${index}`, newTotal);
        window.location.assign(data)
    }


    const imageSource = dynamicImage(price);



    return (
        <div className="font-mono text-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


                <Image className="rounded-t-lg" width={500} height={500} src={imageSource} alt="no Image" />
                <div className="p-5">
                    <a href="#">
                        <h4 className="text-3xl">Category:{price.nickname || "nothing"}</h4>
                        <p className="">{dynamicSubTitle(price)}</p>
                    </a>
                    <h1 className="text-5xl">{(price.unit_amount / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })}</h1>
                    <p className="text-center">Total Collection: {totalCollection.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })}</p>

                    <div className="w-full bg-gray-200 rounded-full h-7  dark:bg-gray-700">
                        <div className="bg-green-400 text-xs h-7 pb-2 pt-1 rounded-full dark:bg-green-300" style={{ width: `${(totalCollection / 4000) * 100}%` }}>{totalCollection.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                    </div>
                    <button className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm text-white" onClick={handlePayNow}><FaWallet className="mr-2 mt-1" />Donate</button>
                </div>
            </div>







        </div>
    );
};

export default PricingCard;