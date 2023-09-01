/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Swal from "sweetalert2";
import { FaUserShield, FaUsersCog } from "react-icons/fa";
import { useEffect, useState } from "react";

const AllRolesPage = () => {
	const [users, setUsers] = useState([]);

	const getallusers = async () => {
		try {
			let data = await fetch("/api/users");
			if (!data.ok) {
				throw new Error("Failed to fetch data");
			}
			data = await data.json();
			let result = data.result;
			setUsers(result);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		getallusers();
	}, []);

	return (
		<section>
			<h2 className="text-3xl text-center mt-0 md:mt-10 font-semibold">
				Manage Users
			</h2>
			<div direction="up" cascade damping={0.3} triggerOnce>
				<div className="overflow-x-auto mt-8 mx-auto mb-52 md:mb-28 rounded-md">
					<table className="mx-auto w-[60%] table-auto rounded-lg shadow-md">
						{/* Head */}
						<thead>
							<tr className="text-sm font-bold text-white bg-blue-800 h-14">
								<th className="p-2 text-left">#</th>
								<th className="p-2 text-left">Name</th>
								<th className="p-2 text-left">Email</th>
								<th className="p-2 text-left">Current Role</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr
									key={user._id}
									className={
										index % 2 === 0
											? "bg-gray-100"
											: "bg-white"
									}
								>
									<td className="p-2">{index + 1}</td>
									<td className="p-2">{user.name}</td>
									<td className="p-2">{user.email}</td>
									<td className="p-2 text-emerald-600 font-bold">{user.role}</td>
									
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default AllRolesPage;
