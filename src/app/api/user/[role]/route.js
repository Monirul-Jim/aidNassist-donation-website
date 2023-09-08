import { connectionSrt } from "@/lib/db";
import User from "@/lib/model2/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

 export const GET = async (request, content) => {
	const vol_Id = content.params.role;
	const findAdata = { role: vol_Id };
	await mongoose.connect(connectionSrt);
	const result = await User.find(findAdata);
	return NextResponse.json({ result, success: true });
}; 