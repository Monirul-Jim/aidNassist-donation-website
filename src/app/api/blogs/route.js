import { connectionSrt } from "@/lib/db";
import { Blogmodel } from "@/lib/model/blog";


import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await Blogmodel.find();
    console.log(data);

    return NextResponse.json({ result: data, success: true })
}
