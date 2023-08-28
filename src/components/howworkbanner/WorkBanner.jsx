import React from "react";
import "./howwework.css";
import Link from "next/link";

const WorkBanner = () => {
	return (
		<section className="bannersetup bg-fixed mt-[85px] flex items-center justify-center w-full lg:h-[400px] h-80">
			<div className="content-center text-center relative w-full p-10">
				<div className="absolute inset-0 bg-black opacity-60"></div>
				
				<h2 className="lg:text-5xl text-emerald-500 font-bold relative z-10">
				How we work for Humanity?
				</h2>
				<hr className="border-t-4 border-emerald-200 rounded-2xl mt-4 w-1/12 mx-auto" />
				<div className="text-white mt-2 font-semibold relative z-10 text-sm">
					<Link href="/">Home</Link>
					<span className="mx-2">/</span>
					<Link
						href="/howwework"
						className="hover:text-white transition-all"
					>
						How We Work
					</Link>
				</div>
			</div>
		</section>
	);
};

export default WorkBanner;


