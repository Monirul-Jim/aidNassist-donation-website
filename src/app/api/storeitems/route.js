import { connectionSrt } from "@/lib/db";
import { Storeitems } from "@/lib/model/storeitems";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await Storeitems.find();

    return NextResponse.json({ result: data, success: true })
}