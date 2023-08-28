"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useTheme } from "next-themes";

const Navbar = () => {
	const router = useRouter();
	const { user, logout } = useAuth();
	const { displayName, photoURL } = user || {};
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
		toast.success("Successfully Logout!");
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
						className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-gray-700 dark:divide-gray-600 ${
							isOpen
								? "opacity-100 visible"
								: "opacity-0 invisible"
						} transition-opacity duration-300`}
						id="user-dropdown"
					>
						{showSpinner ? (
							<div className="flex justify-center p-4">
								{/* Loading spinner */}
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
		<div className="bg-blue-900 shadow-md text-white h-[65px] lg:h-[85px] flex fixed top-0 left-0 right-0 z-50">
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
					className={`md:flex items-center md:space-x-6 ${
						mobileMenuOpen ? "block bg-blue-900" : "hidden"
					} ${
						user
							? "bg-white ml-32 shadow-lg md:bg-transparent p-4"
							: "bg-opacity-40"
					}`}
				>
					<Link
						href="/"
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/"
								? "text-white"
								: "text-emerald-500 bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-bold"
						}`}
					>
						Home
					</Link>

					<Link
						href="/about"
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/about"
								? "text-emerald-500 font-bold"
								: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-bold"
						}`}
					>
						About
					</Link>
					<Link
						href="/event"
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/"
								? "text-white"
								: "text-emerald-500 bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-bold"
						}`}
					>
						Event
					</Link>

					<Link
						href="/howwework"
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/about"
								? "text-emerald-500 font-bold"
								: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-bold"
						}`}
					>
						How we Work
					</Link>
					<Link
						href="/faq"
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/about"
								? "text-emerald-500 font-bold"
								: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-bold"
						}`}
					>
						FAQ
					</Link>
					{/* <Link
						href="/causesdetails"
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/about"
								? "text-emerald-500 font-bold"
								: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-bold"
						}`}
					>
						Causes
					</Link> */}
					<Link
						href="/feedback"
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/about"
								? "text-emerald-500 font-bold"
								: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-bold"
						}`}
					>
						Feedback
					</Link>

					<Link
						href="/contactus"
						className={`flex justify-end mt-2 md:mt-0 md:inline-block ${
							router.pathname === "/about"
								? "text-emerald-500 font-bold"
								: "text-black md:text-white bg-slate-100 md:bg-transparent py-2 rounded-sm pe-3 font-bold"
						}`}
					>
						Contact Us
					</Link>
					{/*   here night and light mood start   */}
					<div>
						<div className="flex justify-center">
							{currentTheme === "dark" ? (
								<button
									className=""
									onClick={() => setTheme("light")}
								>
									{" "}
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
					{/*   here night and light mood start   */}

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
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
