import mongoose from "mongoose";


const volunteersModel = new mongoose.Schema({
    name: String,
    imageURL: String,
    email: String,
    designation: String,
    bloodGroup: String,
    phoneNumber: Number,
    workPlace: String
});

export const Volunteers = mongoose.models.volunteers || mongoose.model("volunteers", volunteersModel);