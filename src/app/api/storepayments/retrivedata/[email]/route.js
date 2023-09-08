import { connectionSrt } from "@/lib/db";
import StorePayments from "@/lib/model/storepayments";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request, content) => {
    const email = content.params.email;
    const findAdata = { email: email }
    await mongoose.connect(connectionSrt);
    const result = await StorePayments.find(findAdata)
    return NextResponse.json({ result, success: true })
}
