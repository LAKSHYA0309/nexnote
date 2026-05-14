import { auth } from "@/auth";
import DashboardSetup from "@/components/dashboardSetUp/dashboardSetup";
import prisma from "@/lib/prisma";
import { getUserSubscriptionStatus } from "@/lib/queries/db.queries";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();
  if (!session) return;

  const Workspace = await prisma.workspace.findFirst({
    where: {
      workspaceOwner: session.user.id,
    },
  });

  const { data: subscription, error: subscriptionError } = await getUserSubscriptionStatus(session.user.id as string); 
  
  if (subscriptionError) {
    return;
  }
  if (!Workspace) {
    return (
      <div
        className="dark:bg-background
        h-screen
        w-screen
        flex
        justify-center
        items-center
    "
      >
        <DashboardSetup  subscription={subscription} />
      </div>
    );
  }

  redirect(`/dashboard/${Workspace.id}`);
};
export default DashboardPage;
