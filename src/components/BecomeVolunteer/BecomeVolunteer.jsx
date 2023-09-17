"use client";
import { useEffect } from "react";
import Link from 'next/link';
import './BecomeVolunteer.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const BecomeVolunteer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
        >
            <div className="volunteerBackground bg-fixed my-20 relative mx-auto">
                <div className="absolute inset-0 bg-emerald-600 opacity-40"></div>
                <div>
                    <div className="lg:pt-14 lg:pb-5 lg:px-14 pb-2 mt-8 relative z-10">
                        <h2 className="text-center text-[26px] lg:text-4xl font-bold text-white leading-6">
                            Ready to Change Lives?
                            <p className="mt-3">Become a Volunteer With Us!</p>
                        </h2>
                        <p className="text-center lg:text-xl mt-6 text-white">
                            Start one of our programme today and help people in need
                        </p>
                        <hr className="border-t-4 border-emerald-300 rounded-2xl mt-4 w-1/12 mx-auto" />
                    </div>
                    <div className="flex justify-center pb-5 relative z-10">
                        <Link href="volunteers">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-base font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-emerald-500 to-emerald-800 group-hover:from-emerald-400 group-hover:to-emerald-400 hover:text-white dark:text-white focus:ring-4">
                                <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
                                    Become a Volunteer
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeVolunteer;