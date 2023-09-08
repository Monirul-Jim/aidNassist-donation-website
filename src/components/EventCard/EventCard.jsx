import moment from "moment/moment";
import Image from "next/image";

import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const EventCard = ({event}) => {
	const {title, date, details, image, location, time} = event;

	const formatTime = (timeString) => {
		const [hours, minutes] = timeString.split(':');
		const parsedHours = parseInt(hours, 10);
	
		if (parsedHours >= 12) {
		  if (parsedHours > 12) {
			// Handle times like "15:30" (3:30 PM)
			return `${parsedHours - 12}:${minutes} PM`;
		  } else {
			// Handle times like "12:30" (12:30 PM)
			return `${parsedHours}:${minutes} PM`;
		  }
		} else {
		  // Handle times like "09:30" (9:30 AM)
		  return `${hours}:${minutes} AM`;
		}
	  };
	
	  const formattedTime = formatTime(time);

	console.log(event);
	return (
		<>
			<div className="overflow-hidden rounded-2xl shadow-lg relative hover:-translate-y-4 duration-500">
				<Image
					width={320}
					height={320}
					className="w-full h-72"
					src={image}
					alt="event image"
				/>
				<div className="bg-green-500 py-4 px-4 text-white absolute top-0 left-0">
					<h2>
						{moment(date).format("Do MMM YY")}
					</h2>
				</div>
				<div className="p-5">
					<h3 className="text-2xl font-semibold text-black mb-3">
						{title}
					</h3>
					<p className="text-slate-800">
						<FaRegClock className="inline-block mb-1 text-green-500"></FaRegClock>{" "}
						<span className="inline-block">{formattedTime}</span>
					</p>
					<p className="text-slate-800">
						<FaMapMarkerAlt className="inline-block mb-1 text-green-500"></FaMapMarkerAlt>{" "}
						<span className="inline-block">
							{location}
						</span>
					</p>
					<p className="my-4 text-slate-800">{details}</p>
					<Link href="#" className="text-blue-500">
						Read More{" "}
						<FaArrowRight className="inline-block mb-1 text-blue-500"></FaArrowRight>
					</Link>
				</div>
			</div>
		</>
	);
};

export default EventCard;