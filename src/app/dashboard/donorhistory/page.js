/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useAuth from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";

const historyPage = () => {
	const { user } = useAuth();
	const [donation, setDonation] = useState([]);
	const { displayName, email } = user || {};

	const getAllDonation = async () => {
		try {
			let data = await fetch("/api/donation");
			if (!data.ok) {
				throw new Error("Failed to fetch data");
			}
			data = await data.json();
			let result = data.result;
			setDonation(result);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		getAllDonation();
	}, []);

	return (
		<div>
			<h2 className="text-3xl font-bold text-center mt-0 md:mt-10 pt-10 pb-5">
				Donor History
			</h2>
			<div className="overflow-x-auto mt-8 mx-auto mb-52 md:mb-28 rounded-md">
				<table className="mx-auto shadow-xl border w-[65%] table-auto bg-white overflow-hidden mb-10 rounded-lg">
					<thead>
						<tr className="bg-blue-900 text-white">
							<th className="px-6 py-3 text-left">SL</th>
							<th className="px-6 py-3 text-left">Name</th>
							<th className="px-6 py-3 text-left">Email</th>
							<th className="px-6 py-3 text-left">Category</th>
							<th className="px-6 py-3 text-left">
								Donation Amount
							</th>
						</tr>
					</thead>
					<tbody>
						{donation.map((donor, index) => (
							<tr
								key={donor._id}
								className={
									index % 2 === 0 ? "bg-gray-100" : "bg-white"
								}
							>
								<td className="px-6 py-4">{index + 1}</td>
								<td className="px-6 py-4">{displayName}</td>
								<td className="px-6 py-4">{email}</td>
								<td className="px-6 py-4 text-emerald-600 font-semibold">
									{donor.donationCategory}
								</td>
								<td className="px-6 py-4 text-emerald-600 font-semibold">
									{donor.donationAmount}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default historyPage;
