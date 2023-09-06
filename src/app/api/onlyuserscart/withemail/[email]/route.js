import { connectionSrt } from "@/lib/db";
import { Onlyuserscart } from "@/lib/model/onlyuserscart";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function GET() {

//     const { email } = req.query;

//     if (!email) {
//         return NextResponse.json({ result: [], success: false, message: 'Email parameter is missing' });
//     }

//     await mongoose.connect(connectionSrt);
//     const data = await Onlyuserscart.find();

//     return NextResponse.json({ result: data, success: true })
// }


export const GET = async (request, content) => {
    const email = content.params.email;
    const findAdata = { email: email }
    await mongoose.connect(connectionSrt);
    const result = await Onlyuserscart.find(findAdata)
    return NextResponse.json({ result, success: true })
}
