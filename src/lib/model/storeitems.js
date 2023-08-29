import mongoose from "mongoose";

const storeitemsModel = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    picture: String,
    description: String,
    ratings: Number,
    reviews: Array,
    quantity: Number
});
export const Storeitems = mongoose.models.storeitems || mongoose.model("storeitems", storeitemsModel);