'use client'
import { useEffect, useState } from "react";
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'
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
            <div className="my-10">

                <div className="text-center text-4xl p-10 flex md:flex-row flex-col justify-center items-center gap-10">
                    <div className="border rounded-xl p-8 bg-green-300">
                        <h2><span className="text-2xl">Store Collection</span>
                            <p className="mt-3">$
                                {onTheCounter && <CountUp start={0} end={TotalStorePayments} duration={2} delay={0}></CountUp>}
                                +</p>
                        </h2>
                    </div>


                    <div className="border rounded-xl p-8 bg-green-300">
                        <h2><span className="text-2xl">Payment Collection</span>
                            <p className="mt-3">
                                $
                                {onTheCounter && <CountUp start={0} end={TotalStripePayments} duration={2} delay={0}></CountUp>}
                                +</p>
                        </h2>
                    </div>

                    <div className="border rounded-xl p-8 bg-green-300">
                        <h2><span className="text-2xl">Volunteers</span>
                            <p className="mt-3">{onTheCounter && <CountUp start={0} end={volunteers.length} duration={2} delay={0}></CountUp>}
                                +</p>
                        </h2>
                    </div>

                    <div className="border rounded-xl p-8 bg-green-300">
                        <h2><span className="text-2xl">Launched Events</span>
                            <p className="mt-3">{onTheCounter && <CountUp start={0} end={events.length} duration={2} delay={0}></CountUp>}
                                +</p>
                        </h2>
                    </div>

                    <div className="border rounded-xl p-8 bg-green-300">
                        <h2><span className="text-2xl">Causes Collection</span>
                            <p className="mt-3">$
                                {onTheCounter && <CountUp start={0} end={TotalDonationPayments} duration={2} delay={0}></CountUp>}
                                +</p>
                        </h2>
                    </div>

                </div>
            </div>
        </ScrollTrigger>
    );
};

export default CountDown;