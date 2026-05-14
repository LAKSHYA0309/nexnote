"use client";
import React, { useEffect, useMemo, useState } from "react";
import { createFolder } from "@/lib/queries/db.queries";
import {
  appFoldersType,
  appWorkspacesType,
  useAppSotre,
} from "@/lib/store/state.provider";
import { toast } from "sonner";
import { Accordion } from "../ui/accordion";
import TooltipComponent from "../global/tooltipprovider";
import { Folder, Subscription } from "@prisma/client";
import { PlusIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Dropdown from "./dropdown";

type props = {
  workspaceId: string;
  workspaceFolders: appFoldersType[];
  subscriptionData: Subscription | null;
};

const Foldersdropdownlist = ({
  workspaceId,
  workspaceFolders,
  subscriptionData,
}: props) => {
  const { setFolders, workspaces, addFolder, setPathName, folderId } =
    useAppSotre();
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setPathName(pathname);
    }
  }, [pathname]);

  const newFolders = useMemo(() => {
    return workspaceFolders.map((f) =>
      f.id === folderId
        ? {
            ...f,
            files: f?.files || [],
          }
        : f
    );
  }, [workspaceFolders, workspaceId]);
  
  useEffect(() => {
    if (workspaceFolders.length > 0) {
      setFolders(workspaceId, newFolders);
    }
  }, [workspaceFolders, workspaceId]);

  const folders = workspaces.find((w) => w.id === workspaceId)?.folders || [];

  const handleCreateFolder = async () => {
    if (folders.length >= 3 && !subscriptionData) {
      setOpen(true);
      return;
    }

    const newFolders = {
      title: "Untitled",
      iconId: "📄",
      workspaceId,
    };

    const { data: createdFolder, error: folderError } = await createFolder(
      newFolders
    );
    if (folderError) {
      toast.error(folderError, { duration: 3000 });
      return;
    }

    if (createdFolder) {
      addFolder(workspaceId, { ...createdFolder, files: [] });
      toast.success("Folder Created successfully");
    }
  };

  return (
    <>
      <div
        className="flex
        sticky 
        z-20 
        top-0 
        bg-background 
        w-full  
        h-10 
        group/title 
        justify-between 
        items-center 
        pr-4 
         text-neutral-8
  "
      >
        <span
          className=" text-neutral-8
        font-bold 
        text-xs"
        >
          FOLDERS
        </span>
        <TooltipComponent message="Create Folder">
          <PlusIcon
            onClick={handleCreateFolder}
            size={16}
            className="group-hover/title:inline-block
            hidden 
            cursor-pointer
            hover:dark:text-white
          "
          />
        </TooltipComponent>
      </div>
      <Accordion
        type="multiple"
        defaultValue={[folderId as string, ""]}
        className="pb-20"
      >
        {folders
          .filter((folder) => !folder.inTrash)
          .map((folder) => (
            <Dropdown
              key={folder.id}
              title={folder.title}
              listType="folder"
              id={folder.id}
              iconId={folder.iconId}
            />
          ))}
      </Accordion>
    </>
  );
};

export default Foldersdropdownlist;
