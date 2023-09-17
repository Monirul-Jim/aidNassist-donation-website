'use client'
import { useState } from "react";
import { useEffect} from "react";
import SingleVolunteer from "./SingleVolunteer";
import { ProgressBar } from "react-loader-spinner"
// import { motion, useInView, useAnimation } from "framer-motion";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Volunteers = () => {
	const [volunteers, setVolunteers] = useState([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		getTheAllVolunteersData();
		Aos.init({ duration: 2200 });
	}, []);

	const getTheAllVolunteersData = async () => {

		let response = await fetch("api/volunteers");
		let data = await response.json();
		let result = data.result;
		setVolunteers(result);
		setLoading(false);
	};


	// const ref = useRef(null);
	// const isInView = useInView(ref);
	// const mainControls = useAnimation()
	// const sideControls = useAnimation()

	// useEffect(() => {


	// 	if (isInView) {
	// 		mainControls.start("visible");
	// 		sideControls.start("visible");
	// 	}


	// }, [isInView, mainControls, sideControls])


	return (
			<div data-aos="zoom-out-up"
				
				className="max-w-7xl mx-auto mt-1">
				<h1 className="text-center pt-20 pb-6 text-5xl lg:max-w-4xl font-bold mx-auto">
					Our Inspiring <span className="text-blue-800"> Volunteers</span>
				</h1>
				<p className="text-center lg:max-w-4xl mx-auto text-xl mb-8">
					We believe in the power of collective effort and community
					involvement.
				</p>



				{
					loading ? (

						<div className="flex items-center justify-center">
							<ProgressBar
								height="80"
								width="80"
								ariaLabel="progress-bar-loading"
								wrapperStyle={{}}
								wrapperClass="progress-bar-wrapper"
								borderColor='green'
								barColor='#51E5FF'
							/>

						</div>
					)
						: (

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5 mx-6">
								{volunteers.map((volunteer) => (
									<SingleVolunteer
										key={volunteer._id}
										volunteer={volunteer}
									></SingleVolunteer>
								))}
							</div>
						)
				}



			</div>
	
	);
};

export default Volunteers;
