
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const body = await request.json();
    const price = parseInt(body.price) * 100;
    const email = body.email;

    if (!email || !price) {
      throw new Error("email and price both are required");
    }

    const url = process.env.DOMAIN;

    const session = await stripe.checkout.sessions.create({
      success_url: `${url}/dashboard`,
      cancel_url: `${url}/`,
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Store",
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      metadata: {
        email,
      },
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        success: false,
        message: error?.message,
      },
      { status: 500 }
    );
  }
}
