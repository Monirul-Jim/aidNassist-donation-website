import { connectionSrt } from "@/lib/db";
import { donatorsBlogmodel } from "@/lib/model/dBlog";


import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request, content) => {
    const blogvol_Id = content.params.id;
    console.log("donatorBlogid",blogvol_Id)
    const findAdata = { _id: blogvol_Id }
    await mongoose.connect(connectionSrt);
    const result = await donatorsBlogmodel.findById(findAdata)
    return NextResponse.json({ result, success: true })
}