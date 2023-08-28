import CommonBanner from "@/components/CommonBanner/CommonBanner";
import EventCard from "@/components/EventCard/EventCard";

const EventPage = () => {
	return (
		<>
			<CommonBanner PageTittle={"Our"} color={"Event"}></CommonBanner>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-16 px-2 lg:px-0">
				<EventCard></EventCard>
				<EventCard></EventCard>
				<EventCard></EventCard>
				<EventCard></EventCard>
				<EventCard></EventCard>
				<EventCard></EventCard>
			</div>
		</>
	);
};

export default EventPage;
