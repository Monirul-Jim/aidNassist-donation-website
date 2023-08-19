import Image from "next/image";
import React from "react";

const OurTeam = () => {
	return (
		<section>
			<div>
				<h1 className="text-center pt-40 text-5xl font-serif text-gray-600 lg:max-w-4xl mx-auto">
					Our Inspiring Volunteers
				</h1>
			</div>
			<div className="flex flex-col pt-8 pb-16 lg:flex-row gap-5 justify-center items-center mt-10">
				<div className="max-w-xs relative">
					<a href="#" className="block">
						<Image
							className="rounded-t-lg " width={250} height={20} 
							src="/Volunteer-Image-1.jpg"
							alt="img4"
						/>
					</a>
					<div className="absolute bottom-[-7%] left-0 w-[80%] bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center align-middle mx-7 text-center">
						<h2 className="text-xl font-extrabold mb-2 mx-auto text-emerald-600">
							baron Mordo <br />
							<span className="text-base text-black">
								Volunteer
							</span>
						</h2>
					</div>
				</div>

				<div className="max-w-xs relative">
					<a href="#" className="block">
						<Image
							className="rounded-t-lg "  width={250} height={20}
							src="/Volunteer-Image-2.jpg"
							alt="img4"
						/>
					</a>
					<div className="absolute bottom-[-7%] left-0 w-[80%] bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center align-middle mx-7 text-center">
						<h2 className="text-xl font-extrabold mb-2 mx-auto text-emerald-600">
							Emaily Spector <br />
							<span className="text-base text-black">
								Volunteer
							</span>
						</h2>
					</div>
				</div>

				<div className="max-w-xs relative">
					<a href="#" className="block">
						<Image
							className="rounded-t-lg" width={250} height={20}
							src="/Volunteer-Image-4.jpg"
							alt="img4"
						/>
					</a>
					<div className="absolute bottom-[-7%] left-0 w-[80%] bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center align-middle mx-7 text-center">
						<h2 className="text-xl font-extrabold mb-2 mx-auto text-emerald-600">
							Stacy Connor <br />
							<span className="text-base text-black">
								Volunteer
							</span>
						</h2>
					</div>
				</div>
				<div className="max-w-xs relative">
					<a href="#" className="block">
						<Image
							className="rounded-t-lg"  width={250} height={20}
							src="/Volunteer-Image-3.jpg"
							alt="img4"
						/>
					</a>
					<div className="absolute bottom-[-7%] left-0 w-[80%] bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center align-middle mx-7 text-center">
						<h2 className="text-xl font-extrabold mb-2 mx-auto text-emerald-600">
							Chris Hammer <br />
							<span className="text-base text-black">
								Volunteer
							</span>
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
