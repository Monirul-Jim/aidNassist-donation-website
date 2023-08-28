import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const OurTeam = () => {
	return (
		<section className="mb-10">
			<div>
				<h1 className="text-center pb-6 text-5xl lg:max-w-4xl font-bold mx-auto">
					Our Inspiring Volunteers
				</h1>
				<p className="text-center lg:max-w-4xl mx-auto text-xl mb-8">
					We believe in the power of collective effort and community
					involvement.
				</p>
			</div>
			<div className="flex flex-col pt-8 pb-16 lg:flex-row gap-8 justify-center items-center mt-10">
				<div className="max-w-xs relative group">
					<div className="block relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
						<div className="relative">
							<Image
								className="rounded-lg"
								width={280}
								height={20}
								src="/Volunteer-Image-1.jpg"
								alt="img4"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-emerald-500 bg-opacity-50">
								<div className="w-12 h-12 bg-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
									<FaFacebook className="text-white text-xl" />
								</div>
								<div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
									<FaTwitter className="text-white text-xl" />
								</div>

								<div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
									<Link href="">
										<IoIosLink className="text-white text-xl" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-[-7%] left-0 w-[80%] bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center align-middle mx-7 text-center">
						<h2 className="text-xl font-extrabold mb-2 mx-auto text-emerald-600">
							baron Mordo <br />
							<span className="text-base text-black">
								Volunteer
							</span>
						</h2>
					</div>
				</div>

				<div className="max-w-xs relative group">
					<div className="block relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
						<div className="relative">
							<Image
								className="rounded-lg"
								width={280}
								height={20}
								src="/Volunteer-Image-2.jpg"
								alt="img4"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-emerald-500 bg-opacity-50">
								<div className="w-12 h-12 bg-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
									<FaFacebook className="text-white text-xl" />
								</div>
								<div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
									<FaTwitter className="text-white text-xl" />
								</div>

								<div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
									<IoIosLink className="text-white text-xl" />
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-[-7%] left-0 w-[80%] bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center align-middle mx-7 text-center">
						<h2 className="text-xl font-extrabold mb-2 mx-auto text-emerald-600">
							baron Mordo <br />
							<span className="text-base text-black">
								Volunteer
							</span>
						</h2>
					</div>
				</div>

				<div className="max-w-xs relative group">
					<div className="block relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
						<div className="relative">
							<Image
								className="rounded-lg"
								width={280}
								height={20}
								src="/Volunteer-Image-3.jpg"
								alt="img4"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-emerald-500 bg-opacity-50">
								<div className="w-12 h-12 bg-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
									<FaFacebook className="text-white text-xl" />
								</div>
								<div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
									<FaTwitter className="text-white text-xl" />
								</div>

								<div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
									<IoIosLink className="text-white text-xl" />
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-[-7%] left-0 w-[80%] bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center align-middle mx-7 text-center">
						<h2 className="text-xl font-extrabold mb-2 mx-auto text-emerald-600">
							baron Mordo <br />
							<span className="text-base text-black">
								Volunteer
							</span>
						</h2>
					</div>
				</div>

				<div className="max-w-xs relative group">
					<div className="block relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
						<div className="relative">
							<Image
								className="rounded-lg"
								width={280}
								height={20}
								src="/Volunteer-Image-4.jpg"
								alt="img4"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-emerald-500 bg-opacity-50">
								<div className="w-12 h-12 bg-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
									<FaFacebook className="text-white text-xl" />
								</div>
								<div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
									<FaTwitter className="text-white text-xl" />
								</div>

								<div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
									<IoIosLink className="text-white text-xl" />
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-[-7%] left-0 w-[80%] bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center align-middle mx-7 text-center">
						<h2 className="text-xl font-extrabold mb-2 mx-auto text-emerald-600">
							baron Mordo <br />
							<span className="text-base text-black">
								Volunteer
							</span>
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};
export default OurTeam;
