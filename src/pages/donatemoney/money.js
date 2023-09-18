"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { toast } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import useMenu from "@/hooks/useMenu";
import DonateChildren from "./DonateChildren";
import './money.css'
import useAuth from "@/hooks/useAuth";
import Aos from 'aos';
import 'aos/dist/aos.css';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PAYMENT_PK);

const DonatePayment = () => {
  const { user } = useAuth();
  const [selectedPrice, setSelectedPrice] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [menu] = useMenu();
  const onetime = menu.filter((data) => data.category === "onetime");
  const monthly = menu.filter((data) => data.category === "monthly");

  const handlePriceClick = (price) => {
    setSelectedPrice(price);
  };

  const handlePayment = async () => {
    if (!selectedPrice) return;
    setLoading(true);
    try {
      const { data } = await axios.post("/api/stripe/payment", {
        price: selectedPrice,
        email: user.email,
      });
      window.location.href = data.url;
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);









  return (
    <div data-aos="zoom-in-right">
      <div className="mt-14 flex lg:flex-row md:flex-row flex-col  justify-center items-center gap-44">
        <div>
          <h1 className="text-3xl font-bold lg:max-w-lg">
            New mothers and newborns urgently need your help....
          </h1>
          <p className="font-semibold mt-2 lg:max-w-lg">
            Forced to give birth while fleeing conflict, new mothers and their
            newborns are urgently counting on our help.
          </p>
          <p className="font-semibold mt-4">
            A Mama Kit can provide aid to a new mother and her newborn.
          </p>
          <p className="font-semibold mt-3">
            These kits contain some simple basics such as:
          </p>
          <ul className="list-disc font-medium ml-8">
            <li>Clothing for the mother and her baby</li>
            <li>Diapers</li>
            <li>Baby blanket</li>
            <li>Baby soap</li>
          </ul>

          <p className="font-semibold mt-3 lg:max-w-lg">
            Please make an act of kindness for a mother and her newborn and send
            a Mama Kit now.
          </p>
        </div>
        <div className="w-96">
          <Tabs>
            <TabList>
              <Tab>One Time</Tab>
              <Tab>Monthly</Tab>
            </TabList>
            <h1 className="mt-4 mb-4">Support our life-saving work</h1>
            <TabPanel>
              <DonateChildren
                onPriceClick={handlePriceClick}
                item={onetime}
              ></DonateChildren>
            </TabPanel>
            <TabPanel>
              <DonateChildren
                onPriceClick={handlePriceClick}
                item={monthly}
              ></DonateChildren>
            </TabPanel>
          </Tabs>
          <div className="mb-6 mt-7">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Enter Amount
            </label>
            <input
              type="text"
              value={selectedPrice}
              id="large-input"
              className="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500"
            />
          </div>
          {user ? (
            <button
              onClick={handlePayment}
              disabled={loading}
              className="block text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              type="button"
            >
              {loading ? "Loading.." : "Donate Now"}
            </button>
          ) : (
            <Link href="/login" legacyBehavior>
              <button className="block text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonatePayment;
