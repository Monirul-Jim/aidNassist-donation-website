const OurMission = () => {
	return (
		<section className="mb-16">
			<div className="">
				<h1 className="text-center lg:max-w-4xl mx-auto text-4xl font-bold mb-8">
					Welcome to AidNAssist, a nationwide charitable, non-profit
					organization
				</h1>
				{/* <p className="text-center lg:max-w-2xl mx-auto text-xl mb-8">
					We believe in the power of collective effort and community
					involvement.
				</p> */}
			</div>
			<div>
				<div className="flex flex-col lg:flex-row gap-10 justify-center items-center mt-10">
					{/* card 1 start */}
					<div className="relative w-[370px] h-[370px] m-2 bg-green-400 rounded-lg font-serif">
						<div className="absolute inset-0  rounded-lg transition-transform transform bg-green-300 hover:-translate-x-3 hover:-translate-y-3 p-10">
							<div className="rounded-full w-24 h-24 bg-green-500">
								<h1 className=" text-center text-6xl text-green-300 translate-y-6">
									01
								</h1>
							</div>
							<h1 className="text-4xl text-gray-600 mt-5">
								Our Mission
							</h1>
							<p className=" text-lg  text-gray-600 mt-3">
								We see our mission in generating resources
								through fundraising initiative and Partnership.
							</p>
						</div>
					</div>
					{/* card 1 End */}

					{/* card 2 start */}
					<div className="relative w-[370px] h-[370px] m-2 bg-green-400 rounded-lg font-serif">
						<div className="absolute inset-0  rounded-lg transition-transform transform bg-green-300 hover:-translate-x-3 hover:-translate-y-3 p-10">
							<div className="rounded-full w-24 h-24 bg-green-500">
								<h1 className=" text-center text-6xl text-green-300 translate-y-6">
									02
								</h1>
							</div>
							<h1 className="text-4xl text-gray-600 mt-5">
								Our Vision
							</h1>
							<p className=" text-lg  text-gray-600 mt-3">
								We Aim to grant wishes that will give hope to
								each people in need in communities in the world.
							</p>
						</div>
					</div>
					{/* card 2 End */}

					{/* card 3 start */}
					<div className="relative w-[370px] h-[370px] m-2 bg-green-400 rounded-lg font-serif">
						<div className="absolute inset-0  rounded-lg transition-transform transform bg-green-300 hover:-translate-x-3 hover:-translate-y-3 p-10">
							<div className="rounded-full w-24 h-24 bg-green-500">
								<h1 className=" text-center text-6xl text-green-300 translate-y-6">
									03
								</h1>
							</div>
							<h1 className="text-4xl text-gray-600 mt-5">
								Our Goal
							</h1>
							<p className=" text-lg  text-gray-600 mt-3">
								The Goal of our Organization is to reduce the
								inequity in access to education and healthcare.
							</p>
						</div>
					</div>
					{/* card 3 End */}
				</div>
			</div>
		</section>
	);
};

export default OurMission;
