import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: String,
    imageURL: String,
    email: String,
    designation: String,
    bloodGroup: String,
    phoneNumber: String,
    workPlace: String
});
export const Product = mongoose.models.products || mongoose.model("products", productModel);