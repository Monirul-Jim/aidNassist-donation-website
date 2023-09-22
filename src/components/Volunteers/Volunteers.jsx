// 'use client'
// import { useState } from "react";
// import { useEffect } from "react";
// import SingleVolunteer from "./SingleVolunteer";
// import { ProgressBar } from "react-loader-spinner"
// // import { motion, useInView, useAnimation } from "framer-motion";
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// const Volunteers = () => {
// 	const [volunteers, setVolunteers] = useState([]);
// 	const [loading, setLoading] = useState(true);


// 	useEffect(() => {
// 		getTheAllVolunteersData();
// 		Aos.init({ duration: 2200 });
// 	}, []);

// 	const getTheAllVolunteersData = async () => {

// 		let response = await fetch("api/volunteers");
// 		let data = await response.json();
// 		let result = data.result;
// 		setVolunteers(result);
// 		setLoading(false);
// 	};


// 	// const ref = useRef(null);
// 	// const isInView = useInView(ref);
// 	// const mainControls = useAnimation()
// 	// const sideControls = useAnimation()

// 	// useEffect(() => {


// 	// 	if (isInView) {
// 	// 		mainControls.start("visible");
// 	// 		sideControls.start("visible");
// 	// 	}


// 	// }, [isInView, mainControls, sideControls])


// 	return (
// 		<>
// 			<div data-aos="zoom-out-up" className="mt-1">
// 				<h1 className="text-center pt-20 pb-6 text-2xl md:text-4xl lg:max-w-4xl font-bold mx-auto">
// 					Our Inspiring <span className="text-green-500"> Volunteers</span>
// 				</h1>
// 				<p className="text-center lg:max-w-4xl mx-auto text-xl mb-8">
// 					We believe in the power of collective effort and community
// 					involvement.
// 				</p>



// 				{
// 					loading ? (

// 						<div className="flex items-center justify-center">
// 							<ProgressBar
// 								height="80"
// 								width="80"
// 								ariaLabel="progress-bar-loading"
// 								wrapperStyle={{}}
// 								wrapperClass="progress-bar-wrapper"
// 								borderColor='green'
// 								barColor='#51E5FF'
// 							/>

// 						</div>
// 					)
// 						: (

// 							<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-5">
// 								{volunteers.map((volunteer) => (
// 									<SingleVolunteer
// 										key={volunteer._id}
// 										volunteer={volunteer}
// 									></SingleVolunteer>
// 								))}
// 							</div>
// 						)
// 				}



// 			</div>
// 		</>

// 	);
// };

// export default Volunteers;












'use client'
import { useEffect, useState } from "react";
import SingleVolunteer from "./SingleVolunteer";
import Swal from "sweetalert2";
import { motion, useInView, useAnimation } from "framer-motion";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Volunteers = () => {
	// const volunteers = await getVolunteersFromDB();
	// console.log(volunteers);
	const [volunteers, setVolunteers] = useState([]);

	useEffect(() => {
		getallCauses()
		Aos.init({ duration: 2200 });
	}, []);
	const getallCauses = async () => {
		let data = await fetch("/api/volunteers");
		data = await data.json();
		let result = data.result
		setVolunteers(result);
	};

	const handleDeleteVolunteer = async (id) => {
		let response = await fetch(`/api/volunteers/${id}`, {
			method: "DELETE",
		});
		response = await response.json();
		if (response.success) {
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Deleted Successfully",
				showConfirmButton: false,
				timer: 1500,
			});
			const remaining = volunteers.filter(cause => cause._id !== id)
			setVolunteers(remaining)
		}
	};
	return (
		<div data-aos="zoom-out-up" className="mt-1">
			<h1 className="text-center pt-20 pb-6 text-2xl md:text-4xl lg:max-w-4xl font-bold mx-auto">
				Our Inspiring <span className="text-green-500"> Volunteers</span>
			</h1>
			<p className="text-center lg:max-w-4xl mx-auto text-xl mb-8">
				We believe in the power of collective effort and community
				involvement.
			</p>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mb-5">
				{volunteers.map((volunteer) => (
					<SingleVolunteer
						key={volunteer._id}
						volunteer={volunteer}
						handleDeleteVolunteer={handleDeleteVolunteer}
					></SingleVolunteer>
				))}
			</div>
		</div>
	);
};

export default Volunteers;