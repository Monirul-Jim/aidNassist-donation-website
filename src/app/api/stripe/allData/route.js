import { connectionSrt } from "@/lib/db";
import PostApi from "@/lib/model3/model3";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
	await mongoose.connect(connectionSrt);
	const data = await PostApi.find();
	console.log(data);
	return NextResponse.json({ result: data, success: true });
}