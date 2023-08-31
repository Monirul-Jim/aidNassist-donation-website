import mongoose from "mongoose";

const cartforusersModel = new mongoose.Schema({
    category: String,
    description: String,
    itemId: String,
    itemImg: String,
    name: String,
    price: Number,
    ratings: Number,
});
export const Cartforusers = mongoose.models.cartforusers || mongoose.model("cartforusers", cartforusersModel);