import mongoose from "mongoose";

const volunteersesModel = new mongoose.Schema({
    name: String,
    imageURL: String,
    email: String,
    designation: String,
    bloodGroup: String,
    phoneNumber: String,
    workPlace: String
});
export const Volunteerses = mongoose.models.volunteerses || mongoose.model("volunteerses", volunteersesModel);