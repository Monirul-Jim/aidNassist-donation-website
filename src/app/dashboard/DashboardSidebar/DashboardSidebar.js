"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    FaUserShield,
    FaIdCardAlt,
    FaUsers,
    FaShoppingCart,
    FaSignOutAlt,
    FaUserAlt,
    FaHistory,
} from "react-icons/fa";
import { RiAccountCircleLine, RiAddBoxFill } from "react-icons/ri";

import { HiHome } from "react-icons/hi";
import { MdEventAvailable, MdEventNote } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { BiSolidDonateHeart } from "react-icons/bi";
import useAdmin from "@/hooks/useAdmin";
import useDonor from "@/hooks/useDonor";
import useAuth from "@/hooks/useAuth";

const DashboardSidebar = () => {
    const { user } = useAuth();
    const { email, photoURL, displayName } = user || {};

    const [isAdmin, isAdminLoading] = useAdmin();
    // const [isDonor, isDonorLoading] = useDonor();
    console.log("hello admin", isAdmin)
    // console.log("hello Donor", isDonor)

    if (isAdminLoading) {
        return <div className="text-center">
            <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    }
    // else if (isDonorLoading) {
    //     return <div className="text-center">
    //         <div role="status">
    //             <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
    //                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    //             </svg>
    //             <span className="sr-only">Loading...</span>
    //         </div>
    //     </div>;
    // }

    return (
        <div>
            <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-green-200 dark:bg-gray-800">
                    <a href="/" className="flex items-center pl-2.5 mb-5">
                        <Image
                            src="/heart.png"
                            alt="My Image"
                            width={35}
                            height={35}
                            className="w-[25px] md:w-[35px]"
                        />
                        <h1 className="text-emerald-600 font-extrabold text-sm md:text-xl dark:text-white">
                            aid
                            <span className="text-xl md:text-3xl">N</span>
                            assist
                        </h1>
                    </a>

                    <div className="mb-5">
                        <div className="flex justify-center mt-5 mb-2">
                            <Image
                                className="rounded-full"
                                src={
                                    photoURL ||
                                    "https://img.freepik.com/free-icon/user_318-159711.jpg"
                                }
                                alt="No one Here"
                                width={100}
                                height={100}
                            ></Image>
                        </div>
                        <div>
                            <h2 className="text-center text-lg font-bold">
                                {displayName || "Profile Name"}
                            </h2>
                            <p className="text-center text-sm italic">
                                {email}
                            </p>
                        </div>
                    </div>
                    <div className=" bg-teal-500 rounded-2xl h-[5px] mb-10"></div>

                    {/* Role-specific menu items */}
                    {isAdmin ? (
                        <>
                            <ul>
                                <h2 className="flex gap-3 ml-3 text-blue-800 font-bold align-middle pb-2 items-center">
                                    <FaUserShield className="text-xl" /> Admin
                                    Dashboard
                                </h2>
                                <li>
                                    <Link
                                        href="/dashboard/allroles"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <MdEventNote className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></MdEventNote>
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            Manage Users
                                        </span>
                                    </Link>
                                </li>
                                <li className="mb-3 dark:text-white pt-6 lg:text-black text-semibold text-base flex gap-3 items-center">
                                    <Link href="/dashboard/viewfeedback">
                                        <FaIdCardAlt className="text-xl text-lime-700" />
                                        FeedBacks
                                    </Link>
                                </li>
                            </ul>
                        </>
                    ) 
                    // : isDonor ? (
                    //     <>
                    //         <ul>
                    //             <h2 className="flex gap-3 ml-3 text-blue-800 font-bold align-middle pb-2 items-center">
                    //                 <BiSolidDonateHeart className="text-2xl" />
                    //                 Donor Dashboard
                    //             </h2>
                    //             <li className="mb-4">
                    //                 <Link
                    //                     href="/dashboard/addaclass"
                    //                     className="text-black pt-6 lg:text-black text-semibold text-base flex gap-3 items-center"
                    //                 >
                    //                     <RiAddBoxFill className="text-2xl text-lime-700" />
                    //                     Add Classes
                    //                 </Link>
                    //             </li>
                    //         </ul>
                    //     </>
                    // )
                     : (
                        <>
                            <ul>
                                <h2 className=" flex gap-3 ml-3 text-blue-800 font-bold align-middle pb-2 items-center">
                                    <RiAccountCircleLine className="text-2xl" />
                                    User Dashboard
                                </h2>

                                <li>
                                    <Link
                                        href="/dashboard/userCart"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <FaShoppingCart className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></FaShoppingCart>
                                        <span className="flex-1 ml-3 whitespace-nowrap gap-4">
                                            Cart

                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/storePHistories" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <FaHistory className='text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></FaHistory>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Payment History</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/donorhistory" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <FaHistory className='text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></FaHistory>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Donor History</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/viewfeedback" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <FaIdCardAlt className='text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'></FaIdCardAlt>
                                        <span className="flex-1 ml-3 whitespace-nowrap">FeedBacks</span>
                                    </Link>
                                </li>
                                

                                {/* <li>
									<Link
										href="/dashboard"
										className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
									>
										<RiDashboard3Line className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></RiDashboard3Line>
										<span className="ml-3">Home board</span>
									</Link>
								</li> */}
                                {/* <li>
                                    <Link
                                        href="/dashboard/allroles"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <MdEventNote className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></MdEventNote>
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            Manage Users
                                        </span>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link
                                        href="/dashboard/selectedEvents"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                    >
                                        <MdEventAvailable className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></MdEventAvailable>
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            Events
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </>
                    )}
                    <div className=" bg-teal-500 rounded-2xl mt-10 h-[5px] mb-2"></div>

                    <ul>
                        <li>
                            <Link
                                href="/"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <HiHome className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Home
                                </span>
                            </Link>

                            <Link
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <FaSignOutAlt className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default DashboardSidebar;
