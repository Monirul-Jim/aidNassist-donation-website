import { connectionSrt } from "@/lib/db";
import { Feedbacks } from "@/lib/model/feedback";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const DELETE = async (request, content) => {
    const vol_Id = content.params.vol_id;
    const findAdata = { _id: vol_Id }
    await mongoose.connect(connectionSrt);
    const result = await Feedbacks.deleteOne(findAdata)
    return NextResponse.json({ result, success: true })
}