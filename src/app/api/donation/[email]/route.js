import { connectionSrt } from "@/lib/db";
import mongoose from "mongoose";
import { Donations } from "@/lib/model/donation";
import { NextResponse } from "next/server";

export const GET = async (request, content) => {
    const vol_email = content.params.email;
    const findAdata = { email: vol_email }
    await mongoose.connect(connectionSrt);
    const result = await Donations.find(findAdata)
    return NextResponse.json({ result, success: true })
}