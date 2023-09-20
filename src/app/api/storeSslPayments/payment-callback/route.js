import { connectionSrt } from "@/lib/db";
import StorePayments from "@/lib/model/storepayments";
import mongoose from "mongoose";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const extractedData = {};

        formData.forEach((value, key) => {
            extractedData[key] = value.toString();
        });
        if (!extractedData.status || !extractedData.tran_id) {
            throw new Error("Invalid info");
        }

        const { tran_id, status } = extractedData;

        if (status !== "VALID" && status !== "VALIDATED") {
            throw new Error("Failed to payment");
        }
        await mongoose.connect(connectionSrt, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const billing = StorePayments.findOne({ tran_id })
        if (!billing) {
            throw new Error("billing not found")
        }
        await StorePayments.updateOne({ tran_id }, { status: "success" })
        return Response.redirect("https://aid-nassist-donation-website.vercel.app/dashboard")
    } catch (error) {
        console.log(error.message);
        return Response.redirect(`https://aid-nassist-donation-website.vercel.app?error=${error.message}`);
    }

}