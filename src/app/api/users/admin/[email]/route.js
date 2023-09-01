import mongoose from "mongoose";
import User from "@/lib/model2/user";

import { NextResponse } from "next/server";
import { connectionSrt } from "@/lib/db";
// import { connectionSrt } from "@/lib/db";

/* export default async function handler(req, res) {
	try {
		await mongoose.connect(connectionStr);
		const email = req.query.email;

		const user = await User.findOne({ email: email });
		const data = {
			admin: user?.role === "admin",
		};
		return res.status(200).json({ result: data, success: true });
	} catch (error) {
		console.error("Error:", error);
		return res.status(500).json({
			error: "An error occurred while fetching data.",
		});
	}
} */

/* export async function GET() {
	try {
		await mongoose.connect(connectionSrt);
		const user = await User.findOne({ email: email });
		const data = {
			admin: user?.role === "admin",
		};
		return NextResponse.json({ result: user, success: true });
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({
			error: "An error occurred while fetching data.",
		});
	}
} */

export const GET = async (request, content) => {
	const vol_Id = content.params.email;
	const findAdata = { email: vol_Id };
	await mongoose.connect(connectionSrt);
	const result = await User.findOne(findAdata);
	return NextResponse.json({ result, success: true });
};


/* export const GET = async (request, content) => {
	try {
		const volEmail = content.params.email;
		const findData = { email: volEmail };

		await mongoose.connect(connectionSrt);
		const user = await User.findOne(findData);

		if (!user) {
			return NextResponse.json({
				error: "User not found",
				success: false,
			});
		}

		const isAdmin = user.role === "admin";

		return NextResponse.json({
			result: {
				admin: isAdmin,
				findData,
			},
			success: true,
		});
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json({
			error: "An error occurred while fetching data.",
			success: false,
		});
	}
}; */
