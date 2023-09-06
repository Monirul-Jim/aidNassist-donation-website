import { connectionSrt } from "@/lib/db";
import { Onlyuserscart } from "@/lib/model/onlyuserscart";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const DELETE = async (request, content) => {
    const carts_Id = content.params.carts_id;
    const findAdata = { _id: carts_Id }
    await mongoose.connect(connectionSrt);
    const result = await Onlyuserscart.deleteOne(findAdata)
    return NextResponse.json({ result, success: true })
}