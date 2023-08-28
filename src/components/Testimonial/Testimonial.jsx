import React from "react";
import "./testimonial.css";
import Image from "next/image";
import frist from "../../../public/Gallery/gallery-8.jpg";

const Testimonial = () => {
	return (
		<div>
			<h1 className="text-5xl font-bold mb-6 text-center mt-32 pb-4">
				Testimonial
			</h1>
			<div class>

			</div>
			<div className="bannersetup bg-fixed pt-20 lg:h-[600px] h-[600] w-full">
				<div className="lg:grid lg:grid-cols-2 max-w-5xl mx-auto">
					{/* 1st */}
					<div className="pt-2 lg:pt-0">
						<div className="triangle absolute inset-0 opacity-40 z-10">
							<h1 className="relative z-20 text-black font-extrabold">
								The donation options are diverse, and I
								appreciate the transparency in showing how the
								funds are used
							</h1>
						</div>
						<div className="flex justify-center items-center ">
							<Image
								className="w-14 h-14 rounded-full border-4 border-green-400"
								src={frist}
								alt="image"
							/>
						</div>
					</div>
					{/* 1st end */}
					{/* 2nd */}
					<div>
						<div className="triangle absolute inset-0 opacity-40 z-10">
							<h1 className="relative z-20 text-black font-extrabold">
								I have been using this platform to donate for a
								while now, and it has never disappointed me.
								Highly recommended!
							</h1>
						</div>
						<div className="flex justify-center items-center ">
							<Image
								className="w-14 h-14 rounded-full border-4 border-green-400"
								src={frist}
								alt="image"
							/>
						</div>
					</div>
					{/* 2nd end */}
					{/* 3rd */}
					<div>
						<div className="triangle absolute inset-0 opacity-40 z-10">
							<h1 className="relative z-20 text-black font-extrabold">
								I am really impressed with how easy it was to
								donate on this website. The process was smooth
								and secure.
							</h1>
						</div>
						<div className="flex justify-center items-center ">
							<Image
								className="w-14 h-14 rounded-full border-4 border-green-400"
								src={frist}
								alt="image"
							/>
						</div>
					</div>
					{/* 3rd end */}
					{/* 4th */}
					<div>
						<div className="triangle absolute inset-0 opacity-40 z-10">
							<h1 className="relative z-20 text-black font-extrabold">
								I am really impressed with how easy it was to
								donate on this website. The process was smooth
								and secure.
							</h1>
						</div>
						<div className="flex justify-center items-center ">
							<Image
								className="w-14 h-14 rounded-full border-4 border-green-400"
								src={frist}
								alt="image"
							/>
						</div>
					</div>
					{/* 4th end */}
				</div>
				
			</div>
		</div>
	);
};

export default Testimonial;
