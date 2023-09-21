import { connectionSrt } from "@/lib/db";
import PostApi from "@/lib/model3/model3";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request, content) => {
    const vol_email = content.params.email;
    const findAdata = { email: vol_email }
    await mongoose.connect(connectionSrt);
    const result = await PostApi.find(findAdata)
    return NextResponse.json({ result, success: true })
}