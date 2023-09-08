
import { connectionSrt } from "@/lib/db";
import PaymentModel from "@/lib/model4/modeldonate";
import mongoose from "mongoose";
import {NextResponse } from "next/server";
// import stripe from 'stripe';




export async function GET() {
	try {
		await mongoose.connect(connectionSrt);
		const data = await PaymentModel.find();
		return NextResponse.json({ result: data, success: true });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({
			error: "An error occurred while fetching data.",
		});
	}
}
