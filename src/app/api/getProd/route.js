
import { NextResponse } from "next/server";
import Stripe from "stripe"





export const GET = async () => {
    const stripe = new Stripe(process.env.NEXT_PUBLIC_Stripe_Secret_SK)
    const prices = await stripe.prices.list({
        limit: 4,
    });
    return NextResponse.json(prices.data.reverse())
}
