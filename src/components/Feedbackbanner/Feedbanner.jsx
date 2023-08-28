import React from "react";
import "./feedbanner.css";

const Feedbanner = () => {
	return (
		<div className="bannersetup bg-fixed flex items-center justify-center w-full lg:h-[400px] h-96 mt-[85px]">
			{/* f */}
			<div className="content-center text-center relative w-full p-10">
				<div className="absolute inset-0 bg-black opacity-40 "></div>
				<h2 className="lg:text-5xl text-green-400 font-extrabold relative z-10">
					FeedBack
				</h2>
				<hr className="border-t-4 border-green-900 rounded-2xl mt-4 w-1/12 mx-auto" />
			</div>
			{/* g */}
		</div>
	);
};

export default Feedbanner;
