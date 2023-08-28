"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const SingleVolunteer = ({ volunteer }) => {
	const {
		_id,
		name,
		email,
		designation,
		bloodGroup,
		phoneNumber,
		workPlace,
		imageURL,
	} = volunteer;

	const handleDeleteVolunteer = async () => {
		console.log(_id);
		let response = await fetch(`/api/volunteers/${_id}`, {
			method: "DELETE",
		});
		response = await response.json();
		if (response.success) {
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Deleted Successfully",
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};

	return (
		<section className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
			<div className="relative">
				<Image
					className="rounded-t-lg h-[330px] w-96"
					src={imageURL}
					width={380}
					height={180}
					alt="img"
				></Image>

				<div className="absolute bottom-0 left-0 bg-opacity-75 bg-emerald-500 text-white p-2">
					<h5 className="text-lg font-bold">{name}</h5>
					<p className="text-base">{designation}</p>
				</div>
			</div>
			<div className="p-4">
				<p className="mb-2 text-gray-700 dark:text-gray-400">
					<span className="font-bold">Email: </span>
					{email}
				</p>
				<p className="mb-2 text-gray-700 dark:text-gray-400">
					<span className="font-bold">Blood: </span>
					{bloodGroup}
				</p>
				<p className="mb-2 text-gray-700 dark:text-gray-400">
					<span className="font-bold">Contact: </span>
					{phoneNumber}
				</p>
				<p className="mb-2 text-gray-700 dark:text-gray-400">
					<span className="font-bold">Location: </span>
					{workPlace}
				</p>
				<div className="flex justify-between mt-3">
					<Link href={`volunteers/${_id}`}>
						<button className="rounded bg-green-300 px-4 py-2 text-white font-semibold">
							Edit
						</button>
					</Link>
					<button
						className="rounded bg-red-400 px-4 py-2 text-white font-semibold"
						onClick={handleDeleteVolunteer}
					>
						<FaTrashAlt />
					</button>
				</div>
			</div>
		</section>
	);
};

export default SingleVolunteer;
