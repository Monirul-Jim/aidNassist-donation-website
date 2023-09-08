/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useEffect, useState } from "react";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import ProgressBar from "@ramonak/react-progress-bar";
import { HiOutlineHeart } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// const AllCauses = async () => {
// 	let data = await fetch("/api/causes");
// 	data = await data.json();
// 	if (data.success) {
// 		return data.result;
// 	} else {
// 		return { success: false };
// 	}
// };

export default function Page() {
	// const causes = await AllCauses();


	const [causes, setCauses] = useState([]);

	useEffect(() => {
		getallCauses()
	}, []);


	const getallCauses = async () => {
		let data = await fetch("/api/causes");
		data = await data.json();
		let result = data.result
		setCauses(result);
	};






	return (
		<section>
			<CommonBanner
				PageTittle={"Causes We"}
				color={"Identify"}
			></CommonBanner>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ duration: 0.25 }}
				className="flex flex-col md:flex-col items-center md:justify-between max-w-7xl mt-16 mx-auto mb-20"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{causes.map((cause) => (
						<div
							key={cause._id}
							className="max-w-xl bg-white rounded-lg overflow-hidden shadow-md"
						>
							<Link href={`/causes/${cause._id}`}>
								<Image
									src={cause.image}
									alt={cause.title}
									width={420}
									height={360}
									className="rounded-t-md"
								/>
							</Link>
							<div className="p-5">
								<h2
									className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
								>
									{cause.title}
								</h2>
								<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
									{cause.category}
								</h5>
								<ProgressBar
									completed={(
										(cause.raisedAmount /
											cause.goalAmount) *
										100
									).toFixed(2)}
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
											${cause.goalAmount}
										</span>
									</div>
									<div className="font-bold">
										Raised:
										<span className="text-emerald-500 font-bold">
											${cause.raisedAmount}
										</span>
									</div>
								</div>
								<Link href="/sincause">
									<button className="inline-flex items-center px-4 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2">
										Donation
										<HiOutlineHeart className="text-xl" />
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
