export const dynamic = "force-dynamic";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getworkspaceDetails } from "@/lib/queries/db.queries";
import Texteditor from "@/components/Editor/texteditor";

const WorkSpace = async ({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  const { workspaceId } = await params;

  const { data, error } = await getworkspaceDetails(workspaceId);
  if (error || !data) {
    redirect("/dashboard");
  } 


  return (
    <div className="relative">
      <Texteditor dirType="workspace" fileId={workspaceId} data={ data } />
    </div>
  );
};

export default WorkSpace;
