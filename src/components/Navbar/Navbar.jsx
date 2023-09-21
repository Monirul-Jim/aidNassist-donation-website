"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { useTheme } from "next-themes";
import "./Navbar.css";
import { FaShareSquare, FaStore } from "react-icons/fa";
import Nav from "./Nav";
import Commandvoice from "@/app/Commandvoice/Commandvoice";

const Navbar = () => {
	const { user, logout } = useAuth();
	const { displayName, photoURL } = user || {};
	const [activeLink, setActiveLink] = useState(null);
	// Added Dark Mode
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};
	const [isOpen, setIsOpen] = useState(false);
	const [showSpinner, setShowSpinner] = useState(false);
	const [navbarTransparent, setNavbarTransparent] = useState(true);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [writingDropDown, setWritingDropDown] = useState(false);
	const [blogDropDown, setBlogDropDown] = useState(false);

	const [contacts, setContacts] = useState(false);

	const toggleDown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	const toggleWriting = () => {
		setWritingDropDown(!writingDropDown);
	};
	const toggleBlogging = () => {
		setBlogDropDown(!blogDropDown);
	};
	const toggleContact = () => {
		setContacts(!contacts);
	};

	const handleMouseEnter = () => {
		setContacts(true);
	};
	const handleMouseEnterAbout = () => {
		setIsDropdownOpen(true);
	};

	const handleMouseLeave = () => {
		setContacts(false);
	};
	const handleMouseLeaveAbout = () => {
		setIsDropdownOpen(false);
	};

	const toggleDropdown = () => {
		setShowSpinner(true);
		setIsOpen(!isOpen);
		setTimeout(() => {
			setShowSpinner(false);
		}, 2000);
	};

	useEffect(() => {
		if (!isOpen) {
			setShowSpinner(false);
		}
	}, [isOpen]);
	const handleLogOut = async () => {
        await logout();
        const res = await fetch('/api/auth/logout', {
            method: "POST"
        });
        const data = await res.json()
        toast.success("Successfully Logout!");
        if (path.includes('/dashboard')) {
            replace("/")
        }
    };


	const handleScroll = () => {
		if (window.scrollY > 0) {
			setNavbarTransparent(false);
		} else {
			setNavbarTransparent(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const renderDropdown = () => {
		if (user) {
			return (
				<div className="relative mt-2 md:mt-0">
					<button
						type="button"
						className="flex items-center text-gray-700 md:order-2"
						id="user-menu-button"
						aria-expanded={isOpen}
						onClick={toggleDropdown}
					>
						<span className="sr-only">Open user menu</span>
						<Image
							width={40}
							height={40}
							className="rounded-full"
							src={
								photoURL ||
								"https://img.freepik.com/free-icon/user_318-159711.jpg"
							}
							alt="user photo"
						/>
					</button>
					<div
						className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-black dark:divide-gray-600 ${isOpen
							? "opacity-100 visible"
							: "opacity-0 invisible"
							} transition-opacity duration-300`}
						id="user-dropdown"
					>
						{showSpinner ? (
							<div className="flex justify-center p-4">
								<div role="status">
									<svg
										aria-hidden="true"
										className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									<span className="sr-only">Loading...</span>
								</div>
							</div>
						) : (
							<ul
								className="py-2"
								aria-labelledby="user-menu-button"
							>
								<li>
									<Link
										href="/dashboard"
										className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Dashboard
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Settings
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>
										Earnings
									</Link>
								</li>
								<li>
									<button
										onClick={handleLogOut}
										className="block px-5 py-2 ms-4 text-sm text-white bg-emerald-500 hover:bg-emerald-600 hover:text-white"
									>
										Logout
									</button>
								</li>
							</ul>
						)}
					</div>
				</div>
			);
		}
		return (
			<Link
				href="/login"
				className="block px-5 py-2 mt-2 md:ms-4 rounded-sm font-semibold text-sm text-white bg-emerald-500 hover:bg-emerald-600 hover:text-white"
			>
				Login
			</Link>
		);
	};

	return (
		<div className="bg-blue-900 dark:bg-black shadow-md text-white h-[65px] lg:h-[85px] flex fixed top-0 left-0 right-0 z-50">
			<nav className="container mx-auto px-4 py-3 md:flex md:items-center md:justify-between">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/heart.png"
							alt="My Image"
							width={35}
							height={35}
							className="w-8 h-8"
						/>
						<h1 className="text-emerald-500 font-extrabold text-xl">
							aid<span className="text-3xl">N</span>assist
						</h1>
					</Link>
					<div className="md:hidden">
						<button onClick={toggleMobileMenu}>
							{mobileMenuOpen ? (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							) : (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							)}
						</button>
					</div>
				</div>
				<div
					className={`md:flex items-center md:space-x-6 ${mobileMenuOpen ? "block bg-blue-900" : "hidden"
						} ${user
							? "ml-32 shadow-lg md:bg-transparent px-4 py-2"
							: "bg-opacity-40"
						}`}
				>
					<Link
						href="/"
						onClick={() => setActiveLink("home")}
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "home"
							? "text-emerald-500 font-medium"
							: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
							}`}
					>
						Home
					</Link>











					{/* ------------------------------------------------------- */}



					<div className="relative" onMouseEnter={handleMouseEnterAbout}>
						<button
							id="dropdownNavbarLink"
							onClick={toggleDown}
							className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-500 md:p-0 md:w-auto dark:text-white"
						>
							About us
							<svg
								className={`w-2.5 h-2.5 ml-2.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''
									}`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</button>

						{isDropdownOpen && (
							<div
								id="dropdownNavbar"
								className="z-10 absolute top-full md:mt-4 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
							>
								<ul
									className="py-2 px-5 text-gray-700 dark:text-gray-400"
									aria-labelledby="dropdownNavbarLink"
								>
									<li>
										<Link
											href="/about"
											onClick={() => setActiveLink("about")}
											className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "about"
												? "text-emerald-500 font-medium"
												: "text-black md:text-gray-600 dark:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
												}`}
										>
											About
										</Link>
									</li>
									<li>
										<Link
											href="/howwework"
											onClick={() => setActiveLink("howwework")}
											className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "howwework"
												? "text-emerald-500 font-medium"
												: "text-black md:text-gray-600 dark:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
												}`}
										>
											How we Work
										</Link>
									</li>
									<li>
										<Link
											href="/faq"
											onClick={() => setActiveLink("faq")}
											className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "faq"
												? "text-emerald-500 font-medium"
												: "text-black md:text-gray-600 dark:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
												}`}
										>
											FAQ
										</Link>
									</li>

									<li>
										<div className="relative">
											<button
												id="dropdownNavbarLink"
												onClick={toggleBlogging}
												className="flex items-center justify-between w-full py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-500 md:p-0 md:w-auto dark:text-white font-medium"
											>
												Blogs
												<svg
													className={`w-2.5 h-2.5 ml-2.5 transition-transform ${blogDropDown ? '-rotate-90' : ''
														}`}
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 10 6"
												>
													<path
														stroke="currentColor"
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="m1 1 4 4 4-4"
													/>
												</svg>
											</button>

											{blogDropDown && (
												<div
													id="dropdownNavbar"
													className="z-10 absolute top-full md:mt-4 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
												>
													<ul
														className="py-2 px-5 text-gray-700 dark:text-gray-400"
														aria-labelledby="dropdownNavbarLink"
													>
														<li>
															<Link
																href="/blog"
																onClick={() => setActiveLink("blog")}
																className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "blog"
																	? "text-emerald-500 font-medium"
																	: "text-black md:text-gray-600 dark:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
																	}`}
															>
																Blogs
															</Link>
														</li>
														<li>
															<div className="relative">
																<button
																	id="dropdownNavbarLink"
																	onClick={toggleWriting}
																	className="flex items-center justify-between w-full py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-500 md:p-0 md:w-auto dark:text-white"
																>
																	Write a Blog
																	<svg
																		className={`w-2.5 h-2.5 ml-2.5 transition-transform ${writingDropDown ? '-rotate-90' : ''
																			}`}
																		aria-hidden="true"
																		xmlns="http://www.w3.org/2000/svg"
																		fill="none"
																		viewBox="0 0 10 6"
																	>
																		<path
																			stroke="currentColor"
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth="2"
																			d="m1 1 4 4 4-4"
																		/>
																	</svg>
																</button>

																{writingDropDown && (
																	<div
																		id="dropdownNavbar"
																		className="z-10 absolute top-full md:mt-4 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
																	>
																		<ul
																			className="py-2 px-5 text-gray-700 dark:text-gray-400"
																			aria-labelledby="dropdownNavbarLink"
																		>
																			<li>
																				<Link
																					href="/writeblogd"
																					onClick={() => setActiveLink("writeblogd")}
																					className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "writeblogd"
																						? "text-emerald-500 font-medium"
																						: "text-black dark:text-white md:text-gray-600 bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
																						}`}
																				>
																					For Donators
																				</Link>
																			</li>
																			<li>
																				<Link
																					href="/writeblogv"
																					onClick={() => setActiveLink("writeblogv")}
																					className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "writeblogv"
																						? "text-emerald-500 font-medium"
																						: "text-black dark:text-white md:text-gray-600 bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
																						}`}
																				>
																					For Volunteers
																				</Link>
																			</li>
																		</ul>
																	</div>
																)}
															</div>
														</li>
													</ul>
												</div>
											)}
										</div>
									</li>
								</ul>
							</div>
						)}
					</div>

					{/* ------------------------------------------------------- */}



					<Link
						href="/event"
						onMouseLeave={handleMouseLeaveAbout}
						onClick={() => setActiveLink("event")}
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "event"
							? "text-emerald-500 font-medium"
							: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
							}`}
					>
						Event
					</Link>
					<div className="relative" onMouseEnter={handleMouseEnter}>
						<button
							id="dropdownNavbarLink"
							onClick={toggleContact}
							className="flex items-center justify-between w-full py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-500 md:p-0 md:w-auto dark:text-white"
						>
							Contact
							<svg
								className={`w-2.5 h-2.5 ml-2.5 transition-transform ${contacts ? 'rotate-180' : ''
									}`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</button>

						{contacts && (
							<div
								id="dropdownNavbar"
								className="z-10 absolute top-full md:mt-4 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
							>
								<ul
									className="py-2 px-5 text-gray-700 dark:text-gray-400"
									aria-labelledby="dropdownNavbarLink"
								>
									<li>
										<Link
											href="/feedback"
											onClick={() => setActiveLink("feedback")}
											className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "feedback"
												? "text-emerald-500 font-medium"
												: "text-black dark:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
												}`}
										>
											Feedback
										</Link>
									</li>
									<li>
										<Link
											href="/contactus"
											onClick={() => setActiveLink("contactus")}
											className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "contactus"
												? "text-emerald-500 font-medium"
												: "text-black dark:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
												}`}
										>
											Contact Us
										</Link>
									</li>
								</ul>
							</div>
						)}
					</div>


					<Link
						onMouseLeave={handleMouseLeave}
						href="/store-items"
						onClick={() => setActiveLink("store-items")}
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "store-items"
							? "text-emerald-500 font-medium"
							: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
							}`}
					>
						<div className="flex items-center gap-1">Store <FaStore /></div>
					</Link>

					<Link
						href="/share"
						onClick={() => setActiveLink("share")}
						className={`flex text-xl justify-end mt-2 md:mt-0 md:inline-block ${activeLink === "share"
							? "text-emerald-500 font-medium"
							: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-medium"
							}`}
					>
						<FaShareSquare />
					</Link>
					{/* Here Night and Light Mood Start */}
					<div>
						<div className="flex justify-center">
							{currentTheme === "dark" ? (
								<button
									className=""
									onClick={() => setTheme("light")}
								>
									<svg
										className="swap-on fill-current w-10 h-10"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
									</svg>
								</button>
							) : (
								<button
									className=""
									onClick={() => setTheme("dark")}
								>
									<svg
										className="swap-off fill-current w-10 h-10"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
									</svg>
								</button>
							)}
						</div>
					</div>
					{/* Here Night and light Mood End */}

					<div className="flex justify-end">
						{user ? (
							renderDropdown()
						) : (
							<Link
								href="/login"
								className="block mt-2 md:mt-0 md:inline-block"
							>
								<button className="px-5 py-2 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 hover:text-white">
									Login
								</button>
							</Link>
						)}
					</div>
					<Commandvoice />
					<Nav></Nav>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;