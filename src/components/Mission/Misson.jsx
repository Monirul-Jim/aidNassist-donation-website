import Image from "next/image";
import React from "react";
import Food from "../../../public/icon/healthy-drink.png";
import Cloth from "../../../public/icon/wardrobe.png";
import Education from "../../../public/icon/learning.png";
import Health from "../../../public/icon/heart-beat.png";
import Shelter from "../../../public/icon/shelter.png";
import CleanWater from "../../../public/icon/water-tap.png";

const Misson = () => {
	return (
		<section>
			<div className="pt-24">
				<h1 className="text-center lg:max-w-4xl mx-auto text-4xl font-bold mb-8">
					Welcome to AidNAssist, a nationwide charitable, non-profit
					organization
				</h1>
				<p className="text-center lg:max-w-2xl mx-auto text-xl mb-8">
					We believe in the power of collective effort and community
					involvement.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 justify-center items-center pt-8 pb-16 mt-6 mx-auto">
				{/* card 1 start */}
				<div className="relative w-[370px] h-[240px] rounded-lg text-center border border-emerald-500 transition-transform transform hover:-translate-x-3 hover:-translate-y-3 p-4 mx-auto">
					<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
						<Image
							className="w-10 h-10"
							width={40}
							height={40}
							src={CleanWater}
							alt="img"
						/>
					</div>
					<h1 className="text-2xl font-extrabold mt-10">
						Charity For Clean Water
					</h1>
					<p className="text-base text-gray-600 mt-3">
						Clean water, a human right, is scarce, jeopardizing
						health for millions. Join Charity for Clean Water to
						transform lives by ensuring access and well-being.
					</p>
				</div>
				{/* card 1 End */}

				{/* card 2 start */}
				<div className="relative w-[370px] h-[240px] rounded-lg text-center border border-emerald-500 transition-transform transform hover:-translate-x-3 hover:-translate-y-3 p-4 mx-auto">
					<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
						<Image
							className="w-10 h-10"
							width={40}
							height={40}
							src={Shelter}
							alt="img"
						/>
					</div>
					<h1 className="text-2xl font-extrabold mt-10">
						Charity For Shelter
					</h1>
					<p className="text-base text-gray-600 mt-3">
						Shelter provides safety, belonging, and fresh starts,
						crucial for well-being. Our charity offers hope and
						empowerment, transcending mere accommodation.
					</p>
				</div>
				{/* card 2 End */}

				{/* card 3 start */}
				<div className="relative w-[370px] h-[240px] rounded-lg text-center border border-emerald-500 transition-transform transform hover:-translate-x-3 hover:-translate-y-3 p-4 mx-auto">
					<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
						<Image
							className="w-10 h-10"
							width={40}
							height={40}
							src={Health}
							alt="img"
						/>
					</div>
					<h1 className="text-2xl font-extrabold mt-10">
						Charity For Health
					</h1>
					<p className="text-base text-gray-600 mt-3">
						Charity for Health envisions a healthier world with
						accessible quality healthcare for all. Join us to drive
						positive change and make a lasting impact on well-being.
						Your support can transform lives in need.
					</p>
				</div>
				{/* card 3 End */}

				{/* card 4 start */}
				<div className="relative w-[370px] h-[240px] rounded-lg text-center border border-emerald-500 transition-transform transform hover:-translate-x-3 hover:-translate-y-3 p-4 mx-auto">
					<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
						<Image
							className="w-10 h-10"
							width={40}
							height={40}
							src={Food}
							alt="img"
						/>
					</div>
					<h1 className="text-2xl font-extrabold mt-10">
						Charity For Food
					</h1>
					<p className="text-base text-gray-600 mt-3">
						Charity for Food is dedicated to ending hunger and
						ensuring no one sleeps hungry. Join us in providing
						nourishment and hope to those in need.
					</p>
				</div>
				{/* card 4 End */}

				{/* card 5 start */}
				<div className="relative w-[370px] h-[240px] rounded-lg text-center border border-emerald-500 transition-transform transform hover:-translate-x-3 hover:-translate-y-3 p-4 mx-auto">
					<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
						<Image
							className="w-10 h-10"
							width={40}
							height={40}
							src={Education}
							alt="img"
						/>
					</div>
					<h1 className="text-2xl font-extrabold mt-10">
						Charity For Education
					</h1>
					<p className="text-base text-gray-600 mt-3">
						Charity for Education Breaking povertys cycle, unlocking
						potential through education. Invest in brighter futures
						with us.
					</p>
				</div>
				{/* card 5 End */}

				{/* card 6 start */}
				<div className="relative w-[370px] h-[240px] rounded-lg text-center border border-emerald-500 transition-transform transform hover:-translate-x-3 hover:-translate-y-3 p-4 mx-auto">
					<div className="absolute bg-emerald-400 w-14 h-14 -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-lg">
						<Image
							className="w-10 h-10"
							width={40}
							height={40}
							src={Cloth}
							alt="img"
						/>
					</div>
					<h1 className="text-2xl font-extrabold mt-10">
						Charity For Cloth
					</h1>
					<p className="text-base text-gray-600 mt-3">
						Clothing is not just protection; it is confidence.
						Charity for Cloth empowers by providing attire,
						restoring dignity to those vulnerable. Join us in
						dressing lives with respect.
					</p>
				</div>
				{/* card 6 End */}
			</div>
		</section>
	);
};

export default Misson;

/* Charity For Shelter

Charity For Health
Charity For Education
Charity For Cloth
Charity For Food */
