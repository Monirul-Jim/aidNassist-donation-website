import { connectionSrt } from "@/lib/db";
import StorePayments from "@/lib/model/storepayments";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET() {
	await mongoose.connect(connectionSrt);
	const data = await StorePayments.find();
	console.log(data);
	return NextResponse.json({ result: data, success: true });
}