import mongoose from "mongoose";

const eventsModel = new mongoose.Schema({
    date: String,
    details: String,
    image: String,
    location: String,
    time: String,
    title: String,
});
export const Events = mongoose.models.events || mongoose.model("events", eventsModel);