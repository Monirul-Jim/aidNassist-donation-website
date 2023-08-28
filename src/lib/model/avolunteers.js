import mongoose from "mongoose";

const avolunteersModel = new mongoose.Schema({
    name: String,
    imageURL: String,
    email: String,
    designation: String,
    bloodGroup: String,
    phoneNumber: Number,
    workPlace: String
});

export const Avolunteers = mongoose.models.avolunteers || mongoose.model("avolunteers", avolunteersModel);