import Image from "next/image";
import aboutImage from "../../../public/about/about-img.jpg"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const HomeBanner = () => {
	return (
		<section className="max-w-6xl mx-auto pt-28">
			<div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center py-6 md:py-16 rounded align-middle">
				<div className="w-[90%]">
					<h5 className="mb-2">About Us</h5>
					<h1 className="font-bold text-2xl md:text-4xl">
						We Are In A Mission To <br /> Help The Helpness
					</h1>
					<p className="text-base mt-4 md:mt-5 md:w-[92%]">
						We are a non-profit organisation in USA that works
						towards supporting underprivileged children reach their
						full potential - physical, mental as well as emotional.
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
				<div>
					<Image
						width={1000}
						height={600}
						src={aboutImage}
						alt="noImage"
						className="rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;
