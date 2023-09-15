const OurMission = () => {
	return (
		<section className="">
			<div className="mt-0 lg:mt-5">
				<h1 className="text-center lg:max-w-4xl mx-auto text-2xl lg:text-4xl font-bold mb-8">
					Welcome to AidNAssist, a nationwide charitable, non-profit
					organization
				</h1>
			</div>
			<div className="container mx-auto">
				<div className="md:flex gap-10 justify-center items-center mt-10">
					{/* card 1 start */}
					<div className="relative w-full h-[300px] md:h-[500px] lg:h-[370px] mb-3 lg:mb-0 bg-green-400 rounded-lg font-serif">
						<div className="absolute inset-0  rounded-lg transition-transform transform bg-green-300 hover:-translate-x-3 hover:-translate-y-3 p-10">
							<div className="rounded-full w-20 md:w-24 h-20 md:h-24 bg-green-500">
								<h1 className="text-center text-5xl md:text-6xl text-green-300 translate-y-6">
									01
								</h1>
							</div>
							<h1 className="text-2xl md:text-4xl mt-5">
								Our Mission
							</h1>
							<p className="text-lg  text-gray-600 mt-1 md:mt-3">
								We see our mission in generating resources
								through fundraising initiative and Partnership.
							</p>
						</div>
					</div>
					{/* card 1 End */}

					{/* card 2 start */}
					<div className="relative w-full h-[300px] md:h-[500px] lg:h-[370px] mb-3 lg:mb-0 bg-green-400 rounded-lg font-serif">
						<div className="absolute inset-0  rounded-lg transition-transform transform bg-green-300 hover:-translate-x-3 hover:-translate-y-3 p-10">
							<div className="rounded-full w-20 md:w-24 h-20 md:h-24 bg-green-500">
								<h1 className="text-center text-5xl md:text-6xl text-green-300 translate-y-6">
									02
								</h1>
							</div>
							<h1 className="text-2xl md:text-4xl mt-5">
								Our Vision
							</h1>
							<p className=" text-lg  text-gray-600 mt-1 md:mt-3">
								We Aim to grant wishes that will give hope to
								each people in need in communities in the world.
							</p>
						</div>
					</div>
					{/* card 2 End */}

					{/* card 3 start */}
					<div className="relative w-full h-[300px] md:h-[500px] lg:h-[370px] mb-3 lg:mb-0 bg-green-400 rounded-lg font-serif">
						<div className="absolute inset-0  rounded-lg transition-transform transform bg-green-300 hover:-translate-x-3 hover:-translate-y-3 p-10">
							<div className="rounded-full w-20 md:w-24 h-20 md:h-24 bg-green-500">
								<h1 className="text-center text-5xl md:text-6xl text-green-300 translate-y-6">
									03
								</h1>
							</div>
							<h1 className="text-2xl md:text-4xl mt-5">
								Our Goal
							</h1>
							<p className=" text-lg text-gray-600 mt-1 md:mt-3">
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