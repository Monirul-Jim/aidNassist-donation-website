
import { connectionSrt } from "@/lib/db";
import { Data } from "@/lib/model/data";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await Data.find();

    return NextResponse.json({ result: data, success: true })
}