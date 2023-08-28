import mongoose from "mongoose";

const causeModel = new mongoose.Schema({
    image: String,
    category: String,
    title: String,
    description: String,
    raisedAmount: Number,
    goalAmount: Number,
});

export const Cause =
    mongoose.models.causes || mongoose.model("causes", causeModel);
