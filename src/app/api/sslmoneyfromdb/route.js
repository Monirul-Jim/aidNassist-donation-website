import { connectionSrt } from "@/lib/db";
import sslBill from "@/lib/model/billing";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(connectionSrt);
        const data = await sslBill.find();
        return NextResponse.json({ result: data, success: true });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            error: "An error occurred while fetching data.",
        });
    }
}