import { connectionSrt } from "@/lib/db";
import { Events } from "@/lib/model/events";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (request, content) => {
    const event_Id = content.params.event_id;
    const filter = { _id: event_Id }
    const payload = await request.json();
    await mongoose.connect(connectionSrt);
    const result = await Events.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result, success: true })
}

export const GET = async (request, content) => {
    const event_Id = content.params.event_id;
    const findAdata = { _id: event_Id }
    await mongoose.connect(connectionSrt);
    const result = await Events.findById(findAdata)
    return NextResponse.json({ result, success: true })
}


export const DELETE = async (request, content) => {
    const event_Id = content.params.event_id;
    const findAdata = { _id: event_Id }
    await mongoose.connect(connectionSrt);
    const result = await Events.deleteOne(findAdata)
    return NextResponse.json({ result, success: true })
}