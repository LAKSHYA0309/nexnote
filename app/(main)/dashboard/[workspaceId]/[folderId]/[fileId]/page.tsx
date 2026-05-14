export const dynamic = "force-dynamic";
import { auth } from "@/auth";
import Texteditor from "@/components/Editor/texteditor";
import { getFileDetails } from "@/lib/queries/db.queries";
import { redirect } from "next/navigation";
import React from "react";

const File = async ({ params }: { params: Promise<{ fileId: string }> }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const { fileId } = await params;
  const { data, error } = await getFileDetails(fileId);
  if (error || !data) {
    redirect("/dashboard");
  }

  return (
    <div className="relative">
      <Texteditor dirType="file" fileId={fileId} data={data} />
    </div>
  );
};

export default File;
