import mongoose from "mongoose";

const feedbacksModel = new mongoose.Schema({
	name: String,
	email: String,
	feedback: String,
	Rating: Number,
});

export const Feedbacks =
	mongoose.models.feedbacks || mongoose.model("feedbacks", feedbacksModel);