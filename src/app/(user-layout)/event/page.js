"use client"
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import EventCard from "@/components/EventCard/EventCard";
import { useEffect, useState } from "react";


  
const EventPage = () => {
	const [events, setEvents] = useState([])

	useEffect(()=>{
		fetch('/api/events')
		.then(res => res.json())
		.then(data => setEvents(data.result))
	},[])
	

	return (
		<>
			<CommonBanner PageTittle={"Our"} color={"Event"}></CommonBanner>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-16 px-2 lg:px-0">
				{
					events.map(event => <EventCard
					key={event._id}
					event = {event}
					></EventCard>)
				}
				
			</div>
		</>
	);
};

export default EventPage;