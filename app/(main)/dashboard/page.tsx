import { auth } from "@/auth";
import DashboardSetup from "@/components/dashboardSetUp/dashboardSetup";
import prisma from "@/lib/prisma";
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
        <DashboardSetup userId={session.user.id as string} />
      </div>
    );
  }

  redirect(`/dashboard/${Workspace.id}`);
};
export default DashboardPage;
