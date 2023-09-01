import { connectionSrt } from "@/lib/db";
import { donatorsBlogmodel } from "@/lib/model/dBlog";

import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await donatorsBlogmodel.find();
    console.log(data);

    return NextResponse.json({ result: data, success: true })
}