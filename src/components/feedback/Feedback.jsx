"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Rate from "../Rate/Rate";
import { toast } from "react-hot-toast";

const Feedback = () => {
	const [rating, setRating] = useState(0);
	const handleFeedback = async (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const feedback = form.feedbackarea.value;
		const Rating = rating;
		console.log(name, email, feedback, Rating);

		const feedbackdata = {
			name,
			email,
			feedback,
			Rating,
		};

		let res = await fetch("/api/feedbacks", {
			method: "Post",
			body: JSON.stringify(feedbackdata),
		});
		res = await res.json();
		if (res.success) {
			Swal.fire(
				"FeedBack Successfully",
				"You clicked the button!",
				"success"
			);
			form.reset();
		} else {
			Swal.fire("Error ", "You clicked the button!", "error");
		}
		console.log("res", res);
	};
	return (
		<div className="my-5">
			<h1 className="text-4xl text-black font-bold mt-10 text-center mb-3">
				Feedback
			</h1>
			{/* Rating Starts ------------ */}
			<div>
				<div className="flex justify-center">
					<Rate
						rating={rating}
						onRating={(rate) => setRating(rate)}
					></Rate>
				</div>
				<p className="text-center text-2xl my-3">Rating - {rating}</p>
			</div>

			{/* Rating Ends -------------- */}
			<div className="max-w-5xl mx-auto py-8">
				<form onSubmit={handleFeedback}>
					<div>
						<input
							className="w-full  px-0 text-sm text-gray-900 bg-white  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 rounded-md      dark:border-gray-800 border-2 p-2"
							type="text"
							name="name"
							id=""
							placeholder="Name"
						/>
					</div>
					<div>
						<input
							className="w-full my-2  px-0 text-sm text-gray-900 bg-white  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 rounded-md dark:border-gray-800 border-2 p-2"
							type="email"
							name="email"
							id=""
							placeholder="email"
						/>
					</div>
					<div className="w-full mb-4  border-green-400 border-2 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
						<div className="px-4 py-2 bg-white rounded-md dark:bg-gray-800">
							<label for="comment" className="sr-only">
								Your comment
							</label>

							<textarea
								name="feedbackarea"
								id="comment"
								rows="4"
								className="w-full h-52 px-0 text-sm text-gray-900 bg-white border-2 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:border-gray-800 rounded-md p-2"
								placeholder="Write For FeedBack..."
								required
							></textarea>
						</div>
						<div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
							<input
								type="submit"
								value="FeedBack"
								className="flex items-center justify-center py-2.5 px-4 text-xs font-medium text-center text-white bg-emerald-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-green-900 hover:bg-emerald-700 w-full"
							/>
						</div>
					</div>
				</form>
				<p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
					Remember, contributions to this topic should follow our{" "}
					<a
						href="#"
						className="text-blue-600 dark:text-blue-500 hover:underline"
					>
						Community Guidelines
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default Feedback;
