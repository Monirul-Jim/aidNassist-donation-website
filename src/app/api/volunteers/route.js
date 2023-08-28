import { connectionSrt } from "@/lib/db";
import { Volunteers } from "@/lib/model/volunteers";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await Volunteers.find();
    console.log(data);

    return NextResponse.json({ result: data, success: true })
}



export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    let volunteer = new Volunteers(payload);
    const result = await volunteer.save();
    return NextResponse.json({ result, success: true })
}