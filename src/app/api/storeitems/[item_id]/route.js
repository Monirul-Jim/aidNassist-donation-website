import { connectionSrt } from "@/lib/db";
import { Storeitems } from "@/lib/model/storeitems";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request, content) => {
    const item_Id = content.params.item_id;
    const findAdata = { _id: item_Id }
    await mongoose.connect(connectionSrt);
    const result = await Storeitems.findById(findAdata)
    return NextResponse.json({ result, success: true })
}