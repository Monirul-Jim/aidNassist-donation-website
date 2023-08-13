import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import OurMission from "@/components/OurMission/OurMission";
import OurTeam from "@/components/OurTeam/OurTeam";

export default function Home() {
	return (
		<div>
			<HomeBanner></HomeBanner>
			<Gallery></Gallery>
			<OurMission></OurMission>
			<OurTeam />
			<Contact></Contact>
		</div>
	);
}
