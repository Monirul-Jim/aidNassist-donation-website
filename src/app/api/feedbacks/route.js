import { connectionSrt } from "@/lib/db";
import { Feedbacks } from "@/lib/model/feedback";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
	await mongoose.connect(connectionSrt);
	const data = await Feedbacks.find();
	console.log(data);
	return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
	const payload = await request.json();
	await mongoose.connect(connectionSrt);
	let feedback = new Feedbacks(payload);
	const result = await feedback.save();
	return NextResponse.json({ result, success: true });
}
