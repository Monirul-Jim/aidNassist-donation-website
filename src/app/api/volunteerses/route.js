import { connectionSrt } from "@/lib/db";
import { Volunteerses } from "@/lib/model/volunteerses";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await Volunteerses.find();
    console.log(data);

    return NextResponse.json({ result: data, success: true })
}


export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    let volunteer = new Volunteerses(payload);
    const result = await volunteer.save();
    return NextResponse.json({ result, success: true })
}