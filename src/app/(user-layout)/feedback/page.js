import Feedbanner from "@/components/Feedbackbanner/Feedbanner";
import Feedback from "@/components/feedback/Feedback";
import React from "react";
import TextToSpeech from "@/components/TextToSpeech/TextToSpeech";

export const metadata = {
	title: 'AidNAssist | Feedback',
	description: 'By Matrix Coders Unity',
  }
  


const FeedbacRoutePage = () => {
	return (
		<div>
			<TextToSpeech text={"Welcome to Feedback"}></TextToSpeech>
			<Feedbanner />
			<Feedback />
		</div>
	);
};

export default FeedbacRoutePage;
