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
			<div className="mx-2 md:mx-0">
				<Faq></Faq>
				<Partner></Partner>
			</div>
		</>
	);
};

export default testimonialPage;