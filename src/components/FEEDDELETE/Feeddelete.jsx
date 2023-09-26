import React from "react";
import Star from "../Store/Star/Star";

const Feeddelete = ({ feed, handleDeleteFeedback }) => {
	const { name, _id, email, feedback, Rating } = feed;
	return (
		<div className="mx-auto">
			<div
				key={_id}
				className="lg:w-[550px] lg:h-[300px] w-[320px] p-6 bg-white  border-green-400 rounded-lg shadow dark:bg-gray-800  border-4 gap-5"
			>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Name: {name}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Email: {email}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					FeedBack: {feedback}
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
					<span className="me-3">Rating: {Rating}</span>
					<Star value={Rating}></Star>
				</p>
				<button
					className="bg-green-400 p-3 rounded-xl text-white"
					onClick={() => handleDeleteFeedback(_id)}
				>
					Delete FeedBack
				</button>
			</div>
		</div>
	);
};

export default Feeddelete;
