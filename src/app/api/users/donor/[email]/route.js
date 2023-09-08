import { connectionSrt } from "@/lib/db";
import User from "@/lib/model2/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request, content) => {
	const vol_Id = content.params.email;
	const findAdata = { email: vol_Id };
	
	try {
	  await mongoose.connect(connectionSrt);
	  const user = await User.findOne(findAdata);
  
	  if (!user) {
		return NextResponse.json({ success: false, message: "User not found" });
	  }
  
	  const isDonor = user.role === "donor";
  
	  return NextResponse.json({ result: user, isDonor, success: true });
	} catch (error) {
	  console.error("Error:", error);
	  return NextResponse.json({ success: false, message: "An error occurred" });
	} 
  };
  