export const dynamic = "force-dynamic";
import { auth } from "@/auth";
import Texteditor from "@/components/Editor/texteditor";
import { getFoldereDetails } from "@/lib/queries/db.queries";
import { redirect } from "next/navigation";
import React from "react";

const Folder = async ({
  params,
}: {
  params: Promise<{ folderId: string }>;
}) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const { folderId } = await params;
  const { data, error } = await getFoldereDetails(folderId);

  if (error || !data) {
    redirect("/dashboard");
  }

  return (
    <div className="relative">
      <Texteditor dirType="folder" fileId={folderId} data={data} />
    </div>
  );
};

export default Folder;
