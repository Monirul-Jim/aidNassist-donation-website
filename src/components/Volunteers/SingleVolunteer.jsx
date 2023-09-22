// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaTrashAlt } from "react-icons/fa";
// import Swal from "sweetalert2";
// import "./SingleVolunteer.css"

// const SingleVolunteer = ({ volunteer }) => {
// 	const {
// 		_id,
// 		name,
// 		email,
// 		designation,
// 		bloodGroup,
// 		phoneNumber,
// 		workPlace,
// 		imageURL,
// 	} = volunteer;

// 	const handleDeleteVolunteer = async () => {
// 		// console.log(_id);
// 		let response = await fetch(`/api/volunteers/${_id}`, {
// 			method: "DELETE",
// 		});
// 		response = await response.json();
// 		if (response.success) {
// 			Swal.fire({
// 				position: "top",
// 				icon: "success",
// 				title: "Deleted Successfully",
// 				showConfirmButton: false,
// 				timer: 1500,
// 			});
// 		}
// 	};

// 	return (
// 		<section className="volunteer_card w-full max-w-sm mx-auto relative hover:bg-emerald-300 duration-500 bg-opacity-75  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
// 			<div className="relative overflow-hidden">
// 				<Image
// 					className="w-full h-[300px] volunteer_img duration-500"
// 					src={imageURL}
// 					width={380}
// 					height={150}
// 					alt="img"
// 				></Image>

// 				<div className="absolute w-full text-center bottom-0 left-0 bg-opacity-75 rounded-t-xl bg-emerald-500 text-white p-2">
// 					<h5 className="text-lg font-semibold">{name ? name : "Anonymous"}</h5>
// 					<p className="text-base">{designation}</p>
// 				</div>
// 			</div>
// 			<div className="p-4 pb-16 ">
// 				<p className="mb-2 text-gray-700 dark:text-gray-400">
// 					<span className="font-semibold">Email: </span>
// 					{email ? email : "volunteers@email.com"}
// 				</p>
// 				<p className="mb-2 text-gray-700 dark:text-gray-400">
// 					<span className="font-semibold">Blood: </span>
// 					{bloodGroup}
// 				</p>
// 				<p className="mb-2 text-gray-700 dark:text-gray-400">
// 					<span className="font-semibold">Contact: +</span>
// 					{phoneNumber}
// 				</p>
// 				<p className="mb-2 text-gray-700 dark:text-gray-400">
// 					<span className="font-semibold">Location: </span>
// 					{workPlace}
// 				</p>
// 				<div className="absolute w-full left-0 bottom-4">
// 					<div className="flex justify-between mt-4">
// 						<Link href={`volunteers/${_id}`}>
// 							<button className="rounded duration-500 hover:shadow-xl hover:bg-green-600 bg-green-500 px-6 py-2 ml-4 text-white font-semibold">
// 								Edit
// 							</button>
// 						</Link>
// 						<button
// 							className="rounded duration-500 hover:shadow-xl hover:bg-red-600 bg-red-500 px-6 py-2 mr-4 text-white font-semibold"
// 							onClick={handleDeleteVolunteer}
// 						>
// 							<FaTrashAlt />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default SingleVolunteer;










"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";

const SingleVolunteer = ({ volunteer, handleDeleteVolunteer }) => {
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
						onClick={() => handleDeleteVolunteer(_id)}
					>
						<FaTrashAlt />
					</button>
				</div>
			</div>
		</section>
	);
};

export default SingleVolunteer;