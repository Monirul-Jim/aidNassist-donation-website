import { connectionSrt } from "@/lib/db";
import sslCommerzMoney from "@/lib/model/sslMoney";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export const GET = async (request, content) => {
    const vol_email = content.params.id;
    const findAdata = { _id: vol_email }
    await mongoose.connect(connectionSrt);
    const result = await sslCommerzMoney.find(findAdata)
    return NextResponse.json({ result, success: true })
}