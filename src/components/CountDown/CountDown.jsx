'use client'
import { useEffect, useState } from "react";
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './CountDown.css'
const CountDown = () => {

    const [onTheCounter, setOnTheCounter] = useState(false);
    const [storePaymentCount, setStorePaymentCount] = useState([]);
    const [stripeCount, setStripeCount] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [events, setEvents] = useState([]);
    const [donation, setDonation] = useState([]);


    useEffect(() => {
        getStorePaymentCount();
        getStripePaymentCount();
        getTheAllVolunteersData();
        getEvents();
        getDonation();
    }, []);
    useEffect(() => {
        Aos.init({ duration: 2400 });
    }, []);




    const getStorePaymentCount = async () => {

        let response = await fetch("api/storepayments/fullStorePayment");
        let data = await response.json();
        let result = data.result;
        setStorePaymentCount(result);


    };
    const getStripePaymentCount = async () => {

        let response = await fetch("api/stripe/allData");
        let data = await response.json();
        let result = data.result;
        setStripeCount(result);

    };

    const getTheAllVolunteersData = async () => {

        let response = await fetch("api/volunteers");
        let data = await response.json();
        let result = data.result;
        setVolunteers(result);
    };
    const getEvents = async () => {

        let response = await fetch("api/events");
        let data = await response.json();
        let result = data.result;
        setEvents(result);
    };
    const getDonation = async () => {

        let response = await fetch("api/donation");
        let data = await response.json();
        let result = data.result;
        setDonation(result);
    };









    const TotalStorePayments = (storePaymentCount.reduce((sum, item) => sum + item.price, 0) / 100).toFixed(2);
    const TotalStripePayments = (stripeCount.reduce((sum, item) => sum + item.price, 0) / 100).toFixed(2);
    const TotalDonationPayments = (donation.reduce((sum, item) => sum + item.donationAmount, 0) / 100).toFixed(2);


    return (
        <ScrollTrigger onEnter={() => setOnTheCounter(true)} onExit={() => setOnTheCounter(false)}>
            <div className="mt-20 counter_section"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >

                <div className="text-center container mx-auto flex md:flex-row flex-col justify-center items-center gap-6">
                    <div className="border counter w-full border-blue-500 rounded-md py-5 bg-green-400">
                        <h2><span className="text-xl  text-white">Store Collection</span>
                            <p className="mt-3 text-4xl text-blue-600">$
                                {onTheCounter && <CountUp start={0} end={TotalStorePayments} duration={2} delay={0}></CountUp>}
                                <sup className="text-white text-3xl">+</sup></p>
                        </h2>
                    </div>


                    <div className="border counter w-full border-blue-500 rounded-md py-5 bg-green-400">
                        <h2><span className="text-xl text-white">Payment Collection</span>
                            <p className="mt-3 text-4xl text-blue-600">
                                $
                                {onTheCounter && <CountUp start={0} end={TotalStripePayments} duration={2} delay={0}></CountUp>}
                                <sup className="text-white text-3xl">+</sup></p>
                        </h2>
                    </div>

                    <div className="border counter w-full border-blue-500 rounded-md py-5 bg-green-400">
                        <h2><span className="text-xl text-white">Volunteers</span>
                            <p className="mt-3 text-4xl text-blue-600">{onTheCounter && <CountUp start={0} end={volunteers.length} duration={2} delay={0}></CountUp>}
                                <sup className="text-white text-3xl">+</sup></p>
                        </h2>
                    </div>

                    <div className="border counter w-full border-blue-500 rounded-md py-5 bg-green-400">
                        <h2><span className="text-xl text-white">Launched Events</span>
                            <p className="mt-3 text-4xl text-blue-600">{onTheCounter && <CountUp start={0} end={events.length} duration={2} delay={0}></CountUp>}
                                <sup className="text-white text-3xl">+</sup></p>
                        </h2>
                    </div>

                    <div className="border counter w-full border-blue-500 rounded-md py-5 bg-green-400">
                        <h2><span className="text-xl text-white">Causes Collection</span>
                            <p className="mt-3 text-4xl text-blue-600">$
                                {onTheCounter && <CountUp start={0} end={TotalDonationPayments} duration={2} delay={0}></CountUp>}
                                <sup className="text-white text-3xl">+</sup></p>
                        </h2>
                    </div>

                </div>
            </div>
        </ScrollTrigger>
    );
};

export default CountDown;