
import { connectionSrt } from "@/lib/db";
import sslBill from "@/lib/model/billing";
import mongoose from "mongoose";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const extractedData = {};

        // Use forEach to iterate through formData entries
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
        const billing = sslBill.findOne({ tran_id })
        if (!billing) {
            throw new Error("billing not found")
        }
        // billing.status = "SUCCESS"
        // await billing.save()
        await sslBill.updateOne({ tran_id }, { status: "success" })
        return Response.redirect("https://test-another-next-proj.vercel.app/dashboard")
    } catch (error) {
        console.log(error.message);
        // return Response.redirect(`${process.env.DOMAIN}/`);
        return Response.redirect(`http://localhost:3000?error=${error.message}`);
    }

}