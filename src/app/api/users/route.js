import { connectionSrt } from "@/lib/db";
import User from "@/lib/model2/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await mongoose.connect(connectionSrt);
		const data = await User.find();
		return NextResponse.json({ result: data, success: true });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({
			error: "An error occurred while fetching data.",
		});
	}
}

export async function POST(request) {
	const payload = await request.json();
	await mongoose.connect(connectionSrt);
	let user = new User(payload);
	const result = await user.save();
	return NextResponse.json({ result, success: true });
}
