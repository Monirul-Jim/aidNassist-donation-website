import mongoose from "mongoose";
const donationModel = new mongoose.Schema({
	fullName: String,
	email: String,
	donationAmount: Number,
	donationCategory: String,
});
export const Donations =
	mongoose.models.donation || mongoose.model("donation", donationModel);
