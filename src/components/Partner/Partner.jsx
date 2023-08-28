"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const Partner = () => {
	return (
		<section className="mt-20">
			<h2 className="text-4xl font-bold text-center pt-16 pb-6">
				Charity Organization Worked In The Fundraising
			</h2>
			<p className="text-center lg:max-w-4xl mx-auto text-xl mb-10">
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
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/2.png"
						alt="img2"
						style={{ background: "transparent" }}
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/3.png"
						alt="img3"
						style={{ background: "transparent" }}
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/4.png"
						alt="img4"
						style={{ background: "transparent" }}
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/1.png"
						alt="img5"
						style={{ background: "transparent" }}
					/>
				</div>
				<div className="mb-10">
					<Image
						width={300}
						height={200}
						src="/partner/2.png"
						alt="img6"
						style={{ background: "transparent" }}
					/>
				</div>
			</Marquee>
		</section>
	);
};

export default Partner;
