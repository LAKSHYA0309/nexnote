import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-11-20.acacia" as any,
  appInfo: {
    name: "Notion Master Clone",
    version: "0.1.0",
  },
});
