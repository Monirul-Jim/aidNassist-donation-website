import { connectionSrt } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import sslBill from "@/lib/model/billing";

export const GET = async (request, content) => {
    const vol_email = content.params.email;
    const findAdata = { email: vol_email }
    await mongoose.connect(connectionSrt);
    const result = await sslBill.find(findAdata)
    return NextResponse.json({ result, success: true })
}