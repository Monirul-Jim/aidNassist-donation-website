"use client"
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import EventCard from "@/components/EventCard/EventCard";
import VoiceDemo from "@/components/voicecomponents/Voice";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner"



const EventPage = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		fetch('/api/events')
			.then(res => res.json())
			.then(data => setEvents(data.result))
	}, [])



	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);


	return (
		<>
		<VoiceDemo text={"Welcome to Event Route"}></VoiceDemo>
			{loading ?

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
				:
				<>
					<CommonBanner PageTittle={"Our"} color={"Event"}></CommonBanner>
					<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-16 px-2 lg:px-0">
						{
							events.map(event => <EventCard
								key={event._id}
								event={event}
							></EventCard>)
						}

					</div>

				</>
			}



		</>
	);
};

export default EventPage;