import Image from "next/image";
import React from "react";
import Overlay from "../../../../public/overlay.png";
import AboutImage from "../../../../public/Gallery/gallery-3.jpg";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import OurMission from "@/components/OurMission/OurMission";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


export const metadata = {
	title: 'AidNAssist | About',
	description: 'By Matrix Coders Unity',
  }
  




const About = () => {
	return (
		<div className="p-2 md:p-0">
			<CommonBanner PageTittle={"About"} color={"Us"}></CommonBanner>

			{/* our about text section start */}
			<div className="my-16 mx-auto">
				<div className="max-w-7xl mx-auto">
					<div className="md:flex gap-16 items-center pb-14 mx-auto justify-center">
						<div className="w-full md:w-[55%] gap-4">
							<Image
								width="400"
								height="400"
								className="w-full rounded-lg"
								src={AboutImage}
								alt="image"
							/>
						</div>
						<div className="w-[50%]">
							<h5 className="mb-2">About Us</h5>
							<h1 className="font-bold text-2xl md:text-4xl">
								We Are In A Mission To <br /> Help The Helpness
							</h1>
							<p className="text-base mt-4 md:mt-5 md:w-[62%]">
								We are a non-profit organisation in USA that
								works towards supporting underprivileged
								children reach their full potential - physical,
								mental as well as emotional.
							</p>
							<ul className="pt-4">
								<li
									className="text-base font-bold  align-middle items-center pb-1"
									style={{ display: "flex" }}
								>
									<IoMdCheckmarkCircleOutline
										style={{ marginRight: "10px" }}
									/>
									Support people in extreme need
								</li>

								<li
									className="text-base font-bold pb-1  align-middle items-center"
									style={{ display: "flex" }}
								>
									<IoMdCheckmarkCircleOutline
										style={{ marginRight: "10px" }}
									/>
									Largest global crowdfunding community
								</li>
								<li
									className="text-base font-bold pb-1  align-middle items-center"
									style={{ display: "flex" }}
								>
									<IoMdCheckmarkCircleOutline
										style={{ marginRight: "10px" }}
									/>
									Make the world a better place
								</li>
								<li
									className="text-base font-bold pb-1  align-middle items-center"
									style={{ display: "flex" }}
								>
									<IoMdCheckmarkCircleOutline
										style={{ marginRight: "10px" }}
									/>
									Share your love for community
								</li>
							</ul>
							<button
								href="#"
								className="inline-flex items-center mt-2 px-5 py-3 text-base font-medium text-center text-white bg-emerald-500 hover:bg-emerald-600 gap-2"
							>
								Donation
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* our about text section end */}
			{/* our mission vision and goal section start  */}
			{/* <div className="my-16 ">
				<div className="container mx-auto ">
					<div className="md:flex gap-10 justify-between">
						<div className="">
							<h1 className="text-slate-900 text-2xl md:text-3xl font-semibold ">
								Our Vision
							</h1>
							<p className="text-slate-600 mt-4">
								Adipiscing aliquam orci sed suspendisse
								convallis venenatis congue. Facilisi scelerisque
								donec in libero et hendrerit. At nulla lorem a
								non maecenas.
							</p>
							<p className="text-slate-600 mt-4">
								Ipsum interdum tristique ac risus in libero.
								Odio id commodo cursus etiam. Ultricies sed eget
								mauris, nisl. Amet.
							</p>
						</div>
						<div className="mt-10 md:mt-0">
							<h1 className="text-slate-900 text-2xl md:text-3xl font-semibold ">
								Our Mission
							</h1>
							<p className="text-slate-600 mt-4">
								Adipiscing aliquam orci sed suspendisse
								convallis venenatis congue. Facilisi scelerisque
								donec in libero et hendrerit. At nulla lorem a
								non maecenas.
							</p>
							<p className="text-slate-600 mt-4">
								Ipsum interdum tristique ac risus in libero.
								Odio id commodo cursus etiam. Ultricies sed eget
								mauris, nisl. Amet.
							</p>
						</div>
						<div className="mt-10 md:mt-0">
							<h1 className="text-slate-900 text-2xl md:text-3xl font-semibold ">
								Our Goal
							</h1>
							<p className="text-slate-600 mt-4">
								Adipiscing aliquam orci sed suspendisse
								convallis venenatis congue. Facilisi scelerisque
								donec in libero et hendrerit. At nulla lorem a
								non maecenas.
							</p>
							<p className="text-slate-600 mt-4">
								Ipsum interdum tristique ac risus in libero.
								Odio id commodo cursus etiam. Ultricies sed eget
								mauris, nisl. Amet.
							</p>
						</div>
					</div>
				</div>
			</div> */}
			{/* our mission vision and goal section end  */}
			<OurMission />
		</div>
	);
};

export default About;