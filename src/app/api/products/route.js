import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    await mongoose.connect(connectionSrt);
    const data = await Product.find();

    return NextResponse.json({ result: data, success: true })
}