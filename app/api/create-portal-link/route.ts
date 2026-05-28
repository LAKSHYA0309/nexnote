import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Look up the customer mapping
    const customerRecord = await prisma.customer.findUnique({
      where: { id: session.user.id },
    });

    if (!customerRecord || !customerRecord.stripeCustomerId) {
      return NextResponse.json({ error: "No billing profile found for this user" }, { status: 404 });
    }

    const platformUrl = process.env.NEXT_PUBLIC_PLATFORM_URL || "http://localhost:3000";

    // Create the billing portal session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerRecord.stripeCustomerId,
      return_url: `${platformUrl}/dashboard`,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (error: any) {
    console.error("Error creating billing portal link:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
