"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const Partner = () => {
	return (
		<section className="mt-20">
			<h2 className="text-2xl lg:text-4xl font-bold text-center pt-0 pb-3">
				Charity Organization Worked In The Fundraising
			</h2>
			<p className="text-center lg:max-w-4xl mx-auto text-lg lg:text-xl mb-5 lg:mb-8">
				We believe in the power of collective effort and community
				involvement.
			</p>
			<Marquee behavior="" direction="">
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/1.png"
						alt="img1"
						style={{ background: "transparent" }}
						className="w-[150px] h-[70px] lg:w-[300px] lg:h-[150px]"
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/2.png"
						alt="img2"
						style={{ background: "transparent" }}
						className="w-[150px] h-[70px] lg:w-[300px] lg:h-[150px]"
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/3.png"
						alt="img3"
						style={{ background: "transparent" }}
						className="w-[150px] h-[70px] lg:w-[300px] lg:h-[150px]"
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/4.png"
						alt="img4"
						style={{ background: "transparent" }}
						className="w-[150px] h-[70px] lg:w-[300px] lg:h-[150px]"
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/1.png"
						alt="img5"
						style={{ background: "transparent" }}
						className="w-[150px] h-[70px] lg:w-[300px] lg:h-[150px]"
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/2.png"
						alt="img6"
						style={{ background: "transparent" }}
						className="w-[150px] h-[70px] lg:w-[300px] lg:h-[150px]"
					/>
				</div>
			</Marquee>
		</section>
	);
};

export default Partner;