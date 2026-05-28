"use client";
import React, { useState } from "react";
import { useSubscriptionModal } from "./subscription-modal-provider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const PRICING_FEATURES = [
  "Unlimited Workspaces",
  "Unlimited Folders and Files",
  "Advanced Collaboration (Up to 100 users)",
  "Real-time Cursors & Presence Tracking",
  "Custom Banner Images & branding customization",
  "Priority support",
];

const SubscriptionModal = () => {
  const { isOpen, closeModal } = useSubscriptionModal();
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  const handleUpgrade = async () => {
    try {
      if (!session || !session.data?.user) {
        toast.error("Please sign in to upgrade your plan.");
        router.push("/login");
        closeModal();
        return;
      }

      setLoading(true);

      // Use target Price ID from env or a sensible placeholder
      const priceId =
        process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || "price_1QxYz2JtzU7cOb44YtPlAceH"; // Sensible test price ID

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Something went wrong creating checkout session.");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No redirect url returned from checkout session API.");
      }
    } catch (error: any) {
      console.error("Upgrade error:", error);
      toast.error(error.message || "Failed to initiate checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="max-w-[480px] p-6 bg-card border rounded-2xl shadow-2xl">
        <DialogHeader className="text-center sm:text-center flex flex-col gap-2">
          <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight">
            Upgrade to Pro
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm max-w-[380px] mx-auto">
            Supercharge your workspace with limitless creation, real-time collaboration, and custom branding.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 border border-border bg-muted/30 p-6 rounded-2xl flex flex-col gap-5">
          <div className="flex justify-between items-baseline">
            <span className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
              Pro Plan
            </span>
            <div className="flex items-baseline">
              <span className="text-4xl font-extrabold text-foreground tracking-tight">$12.99</span>
              <span className="text-muted-foreground text-sm ml-1 font-medium">/ month</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {PRICING_FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-card-foreground">
                <div className="rounded-full bg-emerald-500/10 p-0.5 mt-0.5 text-emerald-500">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span className="leading-tight">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={handleUpgrade}
            disabled={loading}
            className="w-full mt-2 h-11 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-95 transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Redirecting to Stripe...
              </>
            ) : (
              "Upgrade Now"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionModal;
