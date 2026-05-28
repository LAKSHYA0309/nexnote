import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id || !session.user.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { priceId } = await req.json();
    if (!priceId) {
      return NextResponse.json({ error: "Price ID is required" }, { status: 400 });
    }

    // Find if the customer already exists in our db
    let customerRecord = await prisma.customer.findUnique({
      where: { id: session.user.id },
    });

    let stripeCustomerId = customerRecord?.stripeCustomerId;

    if (!stripeCustomerId) {
      // If customer doesn't exist in stripe/db, create one
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
        name: session.user.name ?? undefined,
        metadata: {
          userId: session.user.id,
        },
      });

      // Save customer record in the database
      customerRecord = await prisma.customer.create({
        data: {
          id: session.user.id,
          stripeCustomerId: stripeCustomer.id,
        },
      });

      stripeCustomerId = stripeCustomer.id;
    }

    // Get platform URL for redirects
    const platformUrl = process.env.NEXT_PUBLIC_PLATFORM_URL || "http://localhost:3000";

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomerId!,
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${platformUrl}/dashboard`,
      cancel_url: `${platformUrl}/dashboard`,
      metadata: {
        userId: session.user.id,
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
