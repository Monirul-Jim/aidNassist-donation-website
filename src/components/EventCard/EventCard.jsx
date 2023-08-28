import Image from "next/image";
import eventImage from "../../../public/eventImage.jpg";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const EventCard = () => {
	return (
		<>
			<div className="overflow-hidden rounded-2xl shadow-lg relative hover:-translate-y-4 duration-500">
				<Image
					width={320}
					height={320}
					className="w-full h-72"
					src={eventImage}
					alt="event image"
				/>
				<div className="bg-green-500 py-4 px-4 text-white absolute top-0 left-0">
					<h2>
						02, <br /> Aug
					</h2>
				</div>
				<div className="p-5">
					<h3 className="text-2xl font-semibold text-black mb-3">
						Relief to the helpless
					</h3>
					<p className="text-slate-800">
						<FaRegClock className="inline-block mb-1 text-green-500"></FaRegClock>{" "}
						<span className="inline-block">10am - 2pm</span>
					</p>
					<p className="text-slate-800">
						<FaMapMarkerAlt className="inline-block mb-1 text-green-500"></FaMapMarkerAlt>{" "}
						<span className="inline-block">
							thakurgaon, Bangladesh
						</span>
					</p>
					<p className="my-4 text-slate-800">
						The Hammes Arena hosts Dr. Jerry Botsford Dissects Copy
						Machine Operator, an event by
					</p>
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
