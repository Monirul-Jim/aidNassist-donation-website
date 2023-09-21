import { connectionSrt } from "@/lib/db";
import User from "@/lib/model2/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const DELETE = async (request, content) => {
    const user_ID = content.params.id;
    const findAdata = { _id: user_ID }
    await mongoose.connect(connectionSrt);
    const result = await User.deleteOne(findAdata)
    return NextResponse.json({ result, success: true })
}
