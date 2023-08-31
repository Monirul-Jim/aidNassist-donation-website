import { connectionSrt } from "@/lib/db";
import { Cartforusers } from "@/lib/model/cartforusers";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await Cartforusers.find();

    return NextResponse.json({ result: data, success: true })
}


export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    let cartItem = new Cartforusers(payload);
    const result = await cartItem.save();
    return NextResponse.json({ result, success: true })
}