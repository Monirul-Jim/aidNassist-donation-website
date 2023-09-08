import { connectionSrt } from "@/lib/db";
import { Events } from "@/lib/model/events";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await Events.find();

    return NextResponse.json({ result: data, success: true })
}


export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    let eventItem = new Events(payload);
    const result = await eventItem.save();
    return NextResponse.json({ result, success: true })
}