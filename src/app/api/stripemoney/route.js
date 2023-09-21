import { connectionSrt } from "@/lib/db";
import PostApi from "@/lib/model3/model3";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(connectionSrt);
        const data = await PostApi.find();
        return NextResponse.json({ result: data, success: true });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            error: "An error occurred while fetching data.",
        });
    }
}