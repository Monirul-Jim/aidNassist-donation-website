"use client";
import CommonBanner from "@/components/CommonBanner/CommonBanner";
import Faq from "@/components/FAQ/Faq";
import Partner from "@/components/Partner/Partner";

const testimonialPage = () => {
	return (
		<>
			<CommonBanner
				PageTittle={"frequently ask"}
				color={"question"}
			></CommonBanner>
			<Faq></Faq>
			<Partner></Partner>
		</>
	);
};

export default testimonialPage;
