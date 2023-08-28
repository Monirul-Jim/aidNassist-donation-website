import React from "react";

const ProgrssbarHow = () => {
	const progressBarStyle = {
		width: "45%",
	};

	return (
		<div className="my-5 lg:mx-auto lg:flex lg:flex-col lg:items-center">
			<h1 className="lg:text-4xl text-3xl font-bold mb-6 pt-10">
				We Donate money from our Found This Way
			</h1>
			<div>
				{/* div  start */}
				<div className="my-4">
					<div className="lg:w-[800px] flex justify-between mb-1 ">
						<span className="text-base font-medium text-gray-700 dark:text-white">
							Food
						</span>
						<span className="text-sm font-medium text-gray-700 dark:text-white">
							35%
						</span>
					</div>
					<div className="lg:w-[800px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
						<div
							className="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300"
							style={{
								width: "35%",
							}}
						></div>
					</div>
				</div>
				{/* div finish */}
				{/* div  start */}
				<div className="my-4">
					<div className="lg:w-[800px] flex justify-between mb-1">
						<span className="text-base font-medium text-red-700 dark:text-white">
							Education
						</span>
						<span className="text-sm font-medium text-red-700 dark:text-white">
							30%
						</span>
					</div>
					<div className="lg:w-[800px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
						<div
							className="bg-red-600 h-2.5 rounded-full dark:bg-gray-300"
							style={{
								width: "35%",
							}}
						></div>
					</div>
				</div>
				{/* div finish */}
				{/* div  start */}
				<div className="my-4">
					<div className="lg:w-[800px] flex justify-between mb-1">
						<span className="text-base font-medium text-yellow-300 dark:text-white">
							Treatment
						</span>
						<span className="text-sm font-medium text-yellow-300 dark:text-white">
							25%
						</span>
					</div>
					<div className="lg:w-[800px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
						<div
							className="bg-yellow-300 h-2.5 rounded-full dark:bg-gray-300"
							style={{
								width: "25%",
							}}
						></div>
					</div>
				</div>
				{/* div finish */}
				{/* div  start */}
				<div className="my-4">
					<div className="lg:w-[800px] flex justify-between mb-1">
						<span className="text-base font-medium text-green-700 dark:text-white">
							Cloths
						</span>
						<span className="text-sm font-medium text-green-700 dark:text-white">
							10%
						</span>
					</div>
					<div className="lg:w-[800px] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
						<div
							className="bg-green-600 h-2.5 rounded-full dark:bg-gray-300"
							style={{
								width: "10%",
							}}
						></div>
					</div>
				</div>
				{/* div finish */}
			</div>
		</div>
	);
};

export default ProgrssbarHow;
