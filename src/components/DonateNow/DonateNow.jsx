"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/Gallery/gallery-7.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';


const DonateNow = () => {


    useEffect(() => {
        Aos.init({ duration: 1400 });
    }, []);






    return (
        <div className="mt-12 container mx-auto"
            data-aos="zoom-in-right">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold">They Need Your Help</h2>
                    <p className="my-7 w-full md:w-3/4">We collect your contribution to their aid. From Raised money, We Provide them, Food, Education etc.</p>
                    <Link href={'payment'}><button className="rounded-lg bg-green-300  dark:text-white px-6 py-3">Donate Now</button></Link>
                </div>

                {/* Image Section */}
                <div className="hidden md:block">
                    <Image className="rounded-xl w-[630px] h-auto md:h-[430px] relative" width={630} height={630} src="https://i.postimg.cc/133MKBYL/abstract-blur-empty-green-gradient-studio-well-use-as-backgroundwebsite-templateframebusiness-report.jpg" alt="no image" />
                    <Image className="w-[620px] rounded-xl absolute top-0 right-0 transform -translate-y-5 -translate-x-10" width={630} height={630} src={img} alt="no image" />
                </div>
            </div>
        </div>
    );
};

export default DonateNow;