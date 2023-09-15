'use client'
import React, { useEffect, useState } from 'react';
import LetsChangeCard from './LetsChangeCard';

const LetsChange = () => {
    const [causes, setCauses] = useState([]);

    useEffect(() => {
        getallCauses()
    }, []);


    const getallCauses = async () => {
        let data = await fetch("/api/getsslcommerz");
        data = await data.json();
        let result = data.result
        setCauses(result);
    };

    return (
        <div>
            <h1 className='text-2xl text-center dark:text-white '>Lets make a change together</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-12'>
                {
                    causes && causes.map(category => <LetsChangeCard key={category._id} category={category} ></LetsChangeCard>)
                }
            </div>
        </div>
    );
};

export default LetsChange;