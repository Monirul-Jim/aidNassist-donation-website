"use client";
import "./CommonBanner.css";

const CommonBanner = ({ PageTittle, color }) => {
	return (
		<div className="common_banner w-full h-[250px] lg:h-[350px] mt-10 lg:mt-[85px] md:h-80 flex justify-center items-center">
			<h3 className="font-semibold text-2xl md:text-4xl text-white capitalize">
				{PageTittle} <span className="text-green-400">{color}</span>
			</h3>
		</div>
	);
};

export default CommonBanner;