'use client'
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './DonateMoney.css'
import DonateChildren from './DonateChildren';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './PaymentMethod/CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
import useMenu from '@/hooks/useMenu';



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PAYMENT_PK);
// const stripePromise = loadStripe(String(process.env.NEXT_PUBLIC_STRIPE_PAYMENT_PK));
const DonateMoney = () => {
    const [selectedPrice, setSelectedPrice] = useState("");
    const [menu]=useMenu()
    const onetime = menu.filter(data => data.category === 'onetime')
    const monthly = menu.filter(data => data.category === 'monthly')

    const handlePriceClick = (price) => {
        setSelectedPrice(price); // Update selected price when a button is clicked
    };





    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const closeModal = () => {
        setIsModalOpen(false);
      };
    return (
        <div className='mt-8 grid grid-cols-1 lg:grid-cols-2  gap-16'>
            <div>
                <h1 className='text-3xl font-bold'>New mothers and newborns urgently need your help</h1>
                <p className='font-semibold mt-2'>Forced to give birth while fleeing conflict, new mothers and their newborns are urgently counting on our help.</p>
                <p className='font-semibold mt-4'>A Mama Kit can provide aid to a new mother and her newborn.</p>
                <p className='font-semibold mt-3'>These kits contain some simple basics such as:</p>
                <ul className='list-disc font-medium ml-8'>
                    <li>Clothing for the mother and her baby</li>
                    <li>Diapers</li>
                    <li>Baby blanket</li>
                    <li>Baby soap</li>
                </ul>

                <p className='font-semibold mt-3' >Please make an act of kindness for a mother and her newborn and send a Mama Kit now.</p>
            </div>
            <div className='w-96'>
                <Tabs>
                    <TabList>
                        <Tab>One Time</Tab>
                        <Tab>Monthly</Tab>
                    </TabList>
                    <h1 className='mt-4 mb-4'>Support our life-saving work</h1>
                    <TabPanel>
                        <DonateChildren onPriceClick={handlePriceClick} item={onetime}></DonateChildren>
                    </TabPanel>
                    <TabPanel>
                        <DonateChildren onPriceClick={handlePriceClick} item={monthly}></DonateChildren>
                    </TabPanel>
                </Tabs>
                <div className="mb-6 mt-7">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900">Enter Amount</label>
                    <input type="text" value={selectedPrice} id="large-input" className="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>


                {/* <button className='mt-6 bg-blue-500 py-3 px-4 rounded-md'  >Donate Now</button> */}

                <button
                    onClick={toggleModal}
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Donate Now
                </button>
                <div
                    id="defaultModal"
                    className={`fixed top-0 left-0 right-0 z-50 ${isModalOpen ? '' : 'hidden'
                        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                    tabIndex="-1"
                    aria-hidden={!isModalOpen}
                >
                    <div className="relative w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-black">
                                    Payment Option
                                </h3>
                                <button  onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                              <Elements stripe={stripePromise}>
                                <CheckoutForm amount={selectedPrice} ></CheckoutForm>
                              </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateMoney;



