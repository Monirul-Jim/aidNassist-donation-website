"use client";
import React, { useState } from "react";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import Image from "next/image";
import Swal from "sweetalert2";

const CausePage = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		donationAmount: "",
		donationCategory: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { fullName, email, donationCategory, donationAmount } = formData;

		if (!fullName || !email || !donationCategory || !donationAmount) {
			Swal.fire({
				icon: "error",
				title: "Validation Error",
				text: "Please fill out all the required fields.",
			});
			return;
		}

		try {
			const response = await fetch("/api/donation", {
				method: "POST",
				body: JSON.stringify(formData),
			});

			if (response.status === 200) {
				Swal.fire({
					icon: "success",
					title: "Donation Successfully Done",
					text: "Thank you for your donation!",
				});
				setFormData({
					fullName: "",
					email: "",
					donationAmount: "",
					donationCategory: "",
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "An error occurred while processing your donation. Please try again later.",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "An error occurred while processing your donation. Please try again later.",
			});
		}
	};

	return (
		<section>
			<CommonBanner
				PageTittle={"Donation "}
				color={"Form"}
			></CommonBanner>

			<div className="flex mx-auto max-w-6xl gap-10 py-10">
				<div className="flex-2 w-[65%] mx-auto">
					<div className="rounded-lg overflow-hidden border pt-6 pb-10">
						<div className="max-w-7xl rounded-lg dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
								<Image
									src="/causes/cause-2.jpg"
									alt="causeImg1"
									width={580}
									height={300}
									className="rounded-t-md mx-auto"
								/>
							</a>

							<div className="max-w-xl mx-auto mt-10 p-6 rounded-md shadow-xl border">
								<h2 className="text-3xl pb-12 text-emerald-600 font-bold text-left">
									Donation Form
								</h2>
								<form onSubmit={handleSubmit}>
									<div className="mb-4">
										<label
											htmlFor="fullName"
											className="block text-gray-600"
										>
											Full Name:
										</label>
										<input
											type="text"
											id="fullName"
											name="fullName"
											value={formData.fullName}
											onChange={handleChange}
											className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-emerald-600"
										/>
									</div>
									<div className="mb-4">
										<label
											htmlFor="email"
											className="block text-gray-600"
										>
											Email Address:
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-emerald-600"
										/>
									</div>
									<div className="mb-4">
										<label
											htmlFor="donationCategory"
											className="block text-gray-600"
										>
											Donation Category:
										</label>
										<select
											id="donationCategory"
											name="donationCategory"
											value={formData.donationCategory}
											onChange={handleChange}
											className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-emerald-600"
										>
											<option value="">
												Select a category
											</option>
											<option value="medical">
												Medical / Health Care
											</option>
											<option value="zakat">Zakat</option>
											<option value="food">
												Food Supply
											</option>
											<option value="education">
												Children Education
											</option>
											<option value="welfare">
												Womens Rights
											</option>
										</select>
									</div>
									<div className="mb-4">
										<label
											htmlFor="donationAmount"
											className="block text-gray-600"
										>
											Donation Amount:
										</label>
										<input
											type="number"
											id="donationAmount"
											name="donationAmount"
											value={formData.donationAmount}
											onChange={handleChange}
											className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-emerald-600"
										/>
									</div>

									<button
										type="submit"
										className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition duration-300"
									>
										Donate
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-1 w-1/4">
					{/* Adjust Width Here */}
					<div className="max-w-sm rounded-lg overflow-hidden shadow-md">
						<div className="max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
							<div className="flex items-center justify-between mb-4">
								<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
									Categories
								</h5>
							</div>
							<div className="flow-root">
								<ul
									role="list"
									className="divide-y divide-gray-200 dark:divide-gray-700"
								>
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
													Accommodation
												</p>
											</div>
											<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
												05
											</div>
										</div>
									</li>
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
													Children Protection
												</p>
											</div>
											<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
												13
											</div>
										</div>
									</li>
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
													Donation Events
												</p>
											</div>
											<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
												07
											</div>
										</div>
									</li>
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
													Education
												</p>
											</div>
											<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
												03
											</div>
										</div>
									</li>
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
													Food Supply
												</p>
											</div>
											<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
												02
											</div>
										</div>
									</li>
									<li className="pt-3 sm:pt-4">
										<div className="flex items-center space-x-4">
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
													Health care
												</p>
											</div>
											<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
												04
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CausePage;
