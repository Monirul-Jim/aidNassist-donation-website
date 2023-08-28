import { connectionSrt } from "@/lib/db";
import { Volunteers } from "@/lib/model/volunteers";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (request, content) => {
    const vol_Id = content.params.vol_id;
    const filter = { _id: vol_Id }
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    const result = await Volunteers.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result, success: true })
}

export const GET = async (request, content) => {
    const vol_Id = content.params.vol_id;
    const findAdata = { _id: vol_Id }
    await mongoose.connect(connectionSrt);
    const result = await Volunteers.findById(findAdata)
    return NextResponse.json({ result, success: true })
}


export const DELETE = async (request, content) => {
    const vol_Id = content.params.vol_id;
    const findAdata = { _id: vol_Id }
    await mongoose.connect(connectionSrt);
    const result = await Volunteers.deleteOne(findAdata)
    return NextResponse.json({ result, success: true })
}