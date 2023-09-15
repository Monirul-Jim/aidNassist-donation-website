import Feedbanner from "@/components/Feedbackbanner/Feedbanner";
import Feedback from "@/components/feedback/Feedback";
import React from "react";

export const metadata = {
	title: 'AidNAssist | Feedback',
	description: 'By Matrix Coders Unity',
  }
  


const FeedbacRoutePage = () => {
	return (
		<div>
			<Feedbanner />
			<Feedback />
		</div>
	);
};

export default FeedbacRoutePage;
