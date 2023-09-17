import sslBill from "@/lib/model/billing";
import { sslCommerz } from "@/lib/ssl-commerz";
import { NextResponse } from "next/server";

const generateTransactionId = () => {
    const timestamp = Date.now().toString();
    const uniqueID = Math.random().toString(36).substring(2, 15);
    const transactionID = `${timestamp}${uniqueID}`;
    return transactionID;
};

export async function POST(request) {
    const body = await request.json();
    const price = parseInt(body.price);
    const email = body.email;
    const category = body.category
    if (!email || !price) {
        return NextResponse.json({ error: "missing data" }, { status: 200 })
    }
    console.log(email);

    const transactionId = generateTransactionId()

    try {
        const data = {
            total_amount: price,
            currency: "BDT",
            tran_id: transactionId,
            success_url: "https://aid-nassist-donation-website.vercel.app/api/payment-callback",
            fail_url: "https://aid-nassist-donation-website.vercel.app/api/payment-callback",
            cancel_url: "https://aid-nassist-donation-website.vercel.app/api/payment-callback",
            emi_option: 0,
            customer_name: "name",
            cus_email: email,
            cus_phone: '093403948938493',
            product_name: "Product Name",
            product_profile: "non-physical-goods",
            product_category: "donation",
            shipping_method: "NO",
        }
        const response = await sslCommerz.init(data)
        console.log(response);
        await sslBill.create({
            price,
            email,
            category,
            tran_id: transactionId,
            status: "PENDING"
        })

        return NextResponse.json({ url: response.GatewayPageURL })
    } catch (error) {
        console.log(error);
        return NextResponse.json(error)
    }
}
