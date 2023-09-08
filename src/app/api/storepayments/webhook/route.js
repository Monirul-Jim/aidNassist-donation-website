import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionSrt } from "@/lib/db";
import StorePayments from "@/lib/model/storepayments";

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object;

  if (event.type === "checkout.session.completed") {
    if (!session?.metadata?.email) {
      return new NextResponse("User id is required", { status: 400 });
    }

    await mongoose.connect(connectionSrt, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });




    await StorePayments.create({
      email: session.metadata.email,
      transactionId: session.id,
      price: session.amount_total,
      date: new Date(),
    });
  }

  return NextResponse.json({ message: "Successfully!" });
}
