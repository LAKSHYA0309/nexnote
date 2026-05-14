import { auth } from "@/auth";
import React from "react";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {
  getUserSubscriptionStatus,
  getFolders,
  getPersonalWorkSpace,
  getCollboratorWorkspace,
  getsharedWorksace,
} from "@/lib/queries/db.queries";
import { ScrollArea } from "../ui/scroll-area";
import Workspacedropdown from "./workspacedropdown";
import Planusage from "./planusage";
import Nativenavigation from "./nativenavigation";
import Foldersdropdownlist from "./foldersdropdownlist";

const Sidebar = async ({ workspaceid }: { workspaceid: string }) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const { data: subscriptionData, error: subscriptionerror } =  await getUserSubscriptionStatus(session?.user.id);

  const { data: workSpacefolders, error: folderError } = await getFolders(
    workspaceid
  );

  if (subscriptionerror || folderError) {
    redirect("/dashboard");
  }

  const [presonalWokspace, collaboratorWorkspace, sharedWorkSpace] =
    await Promise.all([
      getPersonalWorkSpace(session?.user.id as string),
      getCollboratorWorkspace(session?.user.id as string),
      getsharedWorksace(session?.user.id as string),
    ]);

  const defaultWorkspace = [
    ...presonalWokspace,
    ...collaboratorWorkspace,
    ...sharedWorkSpace,
  ].find((w) => w.id === workspaceid);
  return (
    <aside
      className={twMerge(
        "hidden sm:flex sm:flex-col w-[300px] shrink-0 p-4 md:gap-4 !justify-between"
      )}
    >
      <div>
        <Workspacedropdown
          personalWorkspace={presonalWokspace}
          sharedWorkspace={sharedWorkSpace}
          collaboratorWorkspace={collaboratorWorkspace}
          defaultWorkSpace={defaultWorkspace}
        />
        <Planusage
          foldersLength={workSpacefolders?.length || 0}
          subscription={subscriptionData} 
          workSpaceid={workspaceid}
        />
        <Nativenavigation workspaceid={workspaceid} />
        <ScrollArea
          className="overflow-auto relative
          h-[450px]
        "
        >
          <div
            className="pointer-events-none 
          w-full 
          absolute 
          bottom-0 
          h-20 
          bg-gradient-to-t 
          from-background 
          to-transparent 
          z-40"
          />
          <Foldersdropdownlist
            workspaceFolders={workSpacefolders || []}
            workspaceId={workspaceid} 
            subscriptionData={subscriptionData}
          />
        </ScrollArea>
      </div>
      {/* <UserCard subscription={subscriptionData} /> */}
    </aside>
  );
};

export default Sidebar;
