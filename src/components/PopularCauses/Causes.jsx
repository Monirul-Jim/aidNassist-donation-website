"use client";
import React from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import { HiOutlineHeart } from "react-icons/hi";
import Link from "next/link";
import "swiper/css";

const Causes = () => {
	return (
		<section className="mx-auto">
			<div className="flex flex-col md:flex-row items-center md:justify-between max-w-7xl mx-auto">
				<div className="mb-5">
					<h1 className="sm:text-4xl lg:d-done text-4xl lg:text-5xl font-bold pt-16">
						Recent <span className="text-blue-800">Causes</span>
					</h1>
					<p className="text-[20px] leading-7 max-w-[550px] pt-4 pb-6 me-auto">
						Actively involved in a variety of causes that address
						pressing social and humanitarian issues
					</p>
				</div>
				<div className="md:text-center sm:ml-auto">
					<Link href="/causesdetails" className="nav-link">
						<button
							type="button"
							class="focus:outline-none text-white bg-emerald-500 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-6 py-3 mb-2"
						>
							View Details
						</button>
					</Link>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-7xl animate-slide mx-auto align-middle">
				<div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<Link href="#">
						<Image
							src="/causes/cause-2.jpg"
							alt="causeImg1"
							width={420}
							height={300}
							className="rounded-t-md"
						/>
					</Link>
					<div className="p-5">
						<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
							GivingWave: Ride the Waves of Change
						</h5>
						<ProgressBar
							completed={40}
							bgColor="#10B981"
							width="100%"
							borderRadius="0"
							height="16px"
							className="mb-6"
							labelAlignment="center"
						/>
						<div className="flex justify-between mb-4">
							<div className="font-bold">
								Goal:
								<span className="text-emerald-500 font-bold">
									{" "}
									$800
								</span>
							</div>
							<div className="font-bold">
								Raised:
								<span className="text-emerald-500 font-bold">
									{" "}
									$2200
								</span>
							</div>
						</div>

						<button
							href="#"
							className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2"
						>
							Donation
							<HiOutlineHeart className="text-xl" />
						</button>
					</div>
				</div>

				<div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<Link href="#">
						<Image
							src="/causes/cause-5.jpg"
							alt="causeImg1"
							width={420}
							height={300}
							className="rounded-t-md"
						/>
					</Link>
					<div className="p-5">
						<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
							GivingWave: Ride the Waves of Change
						</h5>
						<ProgressBar
							completed={40}
							bgColor="#10B981"
							width="100%"
							borderRadius="0"
							height="16px"
							className="mb-6"
							labelAlignment="center"
						/>
						<div className="flex justify-between mb-4">
							<div className="font-bold">
								Goal:
								<span className="text-emerald-500 font-bold">
									$800
								</span>
							</div>
							<div className="font-bold">
								Raised:
								<span className="text-emerald-500 font-bold">
									$2200
								</span>
							</div>
						</div>

						<button
							href="#"
							className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2"
						>
							Donation
							<HiOutlineHeart className="text-xl" />
						</button>
					</div>
				</div>

				<div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<Link href="#">
						<Image
							src="/causes/charity.jpg"
							alt="causeImg3"
							width={420}
							height={300}
							className="rounded-t-md"
						/>
					</Link>
					<div className="p-5 gap-3">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							DonateEase: Seamless Online Giving
						</h5>
						<ProgressBar
							completed={80}
							bgColor="#10B981"
							width="100%"
							borderRadius="0"
							height="16px"
							className="mb-6"
							labelAlignment="center"
						/>
						<div className="flex justify-between mb-4">
							<div className="font-bold">
								Goal:
								<span className="text-emerald-500 font-bold">
									$800
								</span>
							</div>
							<div className="font-bold">
								Raised:
								<span className="text-emerald-500 font-bold">
									$1500
								</span>
							</div>
						</div>

						<button
							href="#"
							className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2"
						>
							Donation
							<HiOutlineHeart className="text-xl" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Causes;
