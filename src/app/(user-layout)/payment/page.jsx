'use client'
import PricingCard from "@/components/BecomeVolunteer/PricingCard";
import axios from "axios";
import { useState, useEffect } from "react";

const Pricing = () => {

    const [prices, setPrices] = useState([]);


    useEffect(() => {
        fetchPrices()
    }, [])

    const fetchPrices = async () => {
        const { data } = await axios.get('api/getProd')
        setPrices(data)
    }






    return (
        <div className="w-full mt-32">
            <div className="mx-auto max-w-4xl font-serif text-center mt-10 items-center ">
                <h2 className="text-3xl leading-7 text-green-400">They Need Your Help to Survive </h2>
                <p className="mt-2 text-4xl font-bold tracking-tight dark:text-white text-gray-800 sm:text-5xl">Please Raise Your Hand</p>
                <p>Donate Now</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1040px] items-center mx-12 md:mx-auto my-40">
                {prices && prices.map((price, index) => <PricingCard key={price.id} price={price} index={index}></PricingCard>)}
            </div>
        </div>
    );
};

export default Pricing;