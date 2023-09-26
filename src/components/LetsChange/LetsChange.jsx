'use client'
import React, { useEffect, useState } from 'react';
import LetsChangeCard from './LetsChangeCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

const LetsChange = () => {
    const [causes, setCauses] = useState([]);

    useEffect(() => {
        getallCauses()
    }, []);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);


    const getallCauses = async () => {
        let data = await fetch("/api/getsslcommerz");
        data = await data.json();
        let result = data.result
        setCauses(result);
    };

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <h1 className='text-center lg:max-w-4xl mx-auto text-2xl md:text-4xl font-bold mb-5'>Lets make a change together</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10'>
                {
                    causes && causes.map(category => <LetsChangeCard key={category._id} category={category} ></LetsChangeCard>)
                }
            </div>
        </div>
    );
};

export default LetsChange;