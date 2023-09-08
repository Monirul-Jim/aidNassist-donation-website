import { connectionSrt } from "@/lib/db";
import User from "@/lib/model2/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request, content) => {
	const user_email = content.params.email;
	const findData = { email: user_email };
	await mongoose.connect(connectionSrt);
	const result = await User.findOne(findData);
	return NextResponse.json({ result, success: true });
};

export const DELETE = async (request, content) => {
    const user_email = content.params.email;
    const findAdata = { email: user_email }
    await mongoose.connect(connectionSrt);
    const result = await User.deleteOne(findAdata)
    return NextResponse.json({ result, success: true })
}
