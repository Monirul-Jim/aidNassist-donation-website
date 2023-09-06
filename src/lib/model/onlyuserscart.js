import mongoose from "mongoose";

const onlyuserscartModel = new mongoose.Schema({
    category: String,
    description: String,
    itemId: String,
    itemImg: String,
    name: String,
    price: Number,
    ratings: Number,
    email: String
});
export const Onlyuserscart = mongoose.models.onlyuserscarts || mongoose.model("onlyuserscarts", onlyuserscartModel);