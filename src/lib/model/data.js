import mongoose from "mongoose";

const dataModel = new mongoose.Schema({
    name: String,
    ph: Number
});
export const Data = mongoose.models.datas || mongoose.model("datas", dataModel);