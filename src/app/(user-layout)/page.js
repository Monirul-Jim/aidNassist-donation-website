import Gallery from "@/components/Gallery/Gallery";
import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Volunteers from "@/components/Volunteers/Volunteers";
import OurTeam from "@/components/OurTeam/OurTeam";
import Causes from "@/components/PopularCauses/Causes";
import Partner from "@/components/Partner/Partner";
import DonateNow from "@/components/DonateNow/DonateNow";
import Misson from "@/components/Mission/Misson";
import Testimonial from "@/components/Testimonial/Testimonial";
import DonatePayment from "@/pages/donatemoney/money";
import CountDown from "@/components/CountDown/CountDown";
import TextToSpeech from "@/components/TextToSpeech/TextToSpeech";
import Commandvoice from "../Commandvoice/Commandvoice";

export const metadata = {
	title: 'AidNAssist | Home',
	description: 'By Matrix Coders Unity',
  }
  




export default function Home() {
	return (
		<div>
			{/* here all function give here */}
			<TextToSpeech text={"Welcome to AidNassits"}></TextToSpeech>
			<Commandvoice></Commandvoice>
			<HomeSlider></HomeSlider>
			<DonatePayment/>
			<DonateNow/>
			<Misson></Misson>
			<BecomeVolunteer />
			<Volunteers />
			<Causes />
			<CountDown/>
			<Gallery></Gallery>
			<OurTeam />
			<Testimonial></Testimonial>
			<Partner />

		</div>
	);
}
