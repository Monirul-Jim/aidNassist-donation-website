import { connectionSrt } from "@/lib/db";
import sslCommerzMoney from "@/lib/model/sslMoney";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {



    await mongoose.connect(connectionSrt);
    const data = await sslCommerzMoney.find();

    return NextResponse.json({ result: data, success: true })
}