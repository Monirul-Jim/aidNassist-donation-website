import Feedbanner from "@/components/Feedbackbanner/Feedbanner";
import Feedback from "@/components/feedback/Feedback";
import React from "react";
import VoiceDemo from "@/components/voicecomponents/Voice";

export const metadata = {
	title: 'AidNAssist | Feedback',
	description: 'By Matrix Coders Unity',
  }
  


const FeedbacRoutePage = () => {
	return (
		<div>
			<VoiceDemo text={"Give Your Feedback Here"} ></VoiceDemo>
			<Feedbanner />
			<Feedback />
		</div>
	);
};

export default FeedbacRoutePage;
