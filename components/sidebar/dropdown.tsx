import React, { startTransition, useEffect, useMemo, useState } from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import TooltipComponent from "../global/tooltipprovider";
import EmojiPicker from "../global/emojiPicker";
import { useAppSotre } from "@/lib/store/state.provider";
import { PlusIcon, Trash2 } from "lucide-react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import {
  createFile,
  updateFiles,
  updateFolder as updatefolder,
} from "@/lib/queries/db.queries";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { File } from "@prisma/client";
import { useSession } from "next-auth/react";

type props = {
  title: string;
  id: string;
  listType: "folder" | "file";
  iconId: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

const Dropdown = ({
  title,
  id,
  listType,
  iconId,
  children,
  disabled,
}: props) => {
  const {
    workspaces,
    folderId,
    setPathName,
    workSpaceId,
    updateFolder,
    updateFile,
    addFile,
  } = useAppSotre();
  const router = useRouter();
  const isFolder = listType === "folder";
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const pathname = usePathname(); 
  const session= useSession();

  useEffect(() => {
    if (pathname) {
      setPathName(pathname);
    }
  }, [pathname]);


  // get the title of folder
  const folderTitle: string | undefined = useMemo(() => {
    if (listType === "folder") {
      const stateTtile = workspaces
        .find((w) => w.id === workSpaceId)
        ?.folders.find((f) => f.id === id)?.title;
      if (title === stateTtile || !stateTtile) return title;
      return stateTtile;
    }
  }, [title, id, workspaces, workSpaceId, listType]);

  //get the title of folder

  const fileTitle: string | undefined = useMemo(() => {
    if (listType === "file") {
      const filandFolderid = id.split("folder");
      const stateTitle = workspaces
        .find((w) => w.id === workSpaceId)
        ?.folders.find((f) => f.id === filandFolderid[0])
        ?.files.find((f) => f.id === filandFolderid[1])?.title;
      if (title === stateTitle || !stateTitle) return title;
      return stateTitle;
    }
  }, [title, id, workSpaceId, workspaces, listType]);

  // css for changing statebetween folder and file
  const groupIdentifies = useMemo(
    () =>
      clsx(
        "dark:text-white whitespace-nowrap flex justify-between space-y-4  items-center w-full relative",
        {
          "group/folder": isFolder,
          "group/file": !isFolder,
        }
      ),
    [isFolder]
  );
  const listStyles = useMemo(
    () =>
      clsx("relative", {
        "border-none text-md": isFolder,
        "border-none ml-6 text-[16px] py-1": !isFolder,
      }),
    [isFolder]
  );
  const hoverStyles = useMemo(
    () =>
      clsx(
        "h-full hidden rounded-sm absolute right-0 flex items-center gap-2 justify-between",
        {
          "group-hover/file:block": listType === "file",
          "group-hover/folder:block": listType === "folder",
        }
      ),
    [isFolder]
  );

  //send it to the folder one or file one
  const navigatatePage = (accordionid: string, listtype: string) => {
    startTransition(() => {
      if (listtype === "folder") {
        router.push(`/dashboard/${workSpaceId}/${accordionid}`);
      }

      if (listtype === "file") {
        router.push(
          `/dashboard/${workSpaceId}/${folderId}/${
            accordionid.split("folder")[1]
          }`
        );
      }
    });
  };

  // emoji change for the workspace
  const onChangeEmoji = async (selectedEmoji: string) => {
    // update the emoji
    if (listType != "folder") return;
    const { data, error } = await updatefolder(
      { iconId: selectedEmoji },
      folderId as string
    );
    if (error) {
      toast.error("something went wrong while updating", { duration: 3000 });
    }
    if (workSpaceId && folderId) {
      updateFolder(workSpaceId as string, folderId as string, {
        iconId: selectedEmoji,
      });
    }
    toast.success("emoji updated", { duration: 3000 });
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // to update the title
  const handleBlur = async () => {
    if (!isEditing) return;
    setIsEditing(false);
    const fid = id.split("folder"); 

    if (fid?.length === 1 && listType === "folder") { 
      if (!folderTitle) return;
      const { data, error: folderError } = await updatefolder(
        { title: folderTitle },
        fid[0]
      );
      if (folderError) {
        toast.success("Unable to update folder title ", { duration: 3000 });
        return;
      }
      toast.success("folder title updated", { duration: 3000 });
    }
    if (fid?.length === 2 && fid[1] && listType=== "file") {
      if (!fileTitle) {
        return;
      } 
      const { data, error: fileerror } = await updateFiles(
        { title: fileTitle },
        fid[1]
      );

      if (fileerror) {
        toast.error("Unable to update file title ", { duration: 3000 });
        return;
      }
      toast.success("file title updated", { duration: 3000 });
    }
  };

  // change the folder title
  const folderTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!workSpaceId) return;
    if (listType === "folder") {
      const fid = id.split("folder");

      if (fid?.length === 1) {
        updateFolder(workSpaceId, fid[0], { title: e.target.value });
      }
    }
  }; 
  // change the file tilte
  const fileTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!workSpaceId) return;
    if (listType === "file"){
      const fid = id.split("folder");
      if (fid.length === 2 && fid[1]) {
        updateFile(workSpaceId, fid[0], fid[1], { title: e.target.value });
      }
    }
  }; 

  // create a new file
  const handleAddnewFile = async () => {
    if (!workSpaceId) return;
    const fid = id.split("folder");
    if (fid.length < 0) return;
    const newfileData: Partial<File> = {
      folderId: fid[0],
      title: "untitled",
      workspaceId: workSpaceId,
      iconId: "📂",
    };
    const { data, error } = await createFile(newfileData);

    if (error) {
      toast.error("Unable to create a file something went wrong");
      return;
    }

    toast.success("File created successfully", { duration: 3000 });
    if (data) {
      addFile(workSpaceId, fid[0], data);
    }
  };

  const moveToTrash = async() => {
   const fid= id.split("folder"); 
   if(!fid || !workSpaceId ) return; 
 if(listType==="folder" ){
  try {
    const {data,error:folderError}= await updatefolder({inTrash:`folder is deleted by ${session.data?.user.email}`, 
    },fid[0]);  

    if(folderError){
      toast.error("something went wrong while moving Folder to trash"); 
      return
    } 
    toast.success("Folder moved to trash  Successfully");  
    updateFolder(workSpaceId ,fid[0], {inTrash:`folder is deleted by ${session.data?.user.email}`}); 
    return;
  } catch (error) {
    toast.error("something went wrong while moving Folder to trash");
  }
 }    

 if(listType === "file"){
  try {
     const {data,error:fileerror} = await updateFiles({inTrash:` file is deleted by ${session.data?.user.email}`},fid[1]);  

     if(fileerror){
      toast.error("something went wrong while moving file to trash ") 
      return; 
     } 

     toast.success("file is Moved to trash successfully "); 
     updateFile(workSpaceId,fid[0],fid[1],{inTrash:` file is deleted by ${session.data?.user.email}`});
  } catch (error) {
    toast.error("something went wrong while moving file to trash")
  }
 }


  };
  return (
    <AccordionItem
      value={id}
      className={listStyles}
      onClick={(e) => {
        e.stopPropagation();
        navigatatePage(id, listType);
      }}
    >
      <AccordionTrigger
        id={listType}
        className="hover:no-underline 
        p-2 
        dark:text-muted-foreground  
        text-sm"
        disabled={listType === "file"}
      >
        <div className={groupIdentifies}>
          <div
            className="flex 
          gap-4
          items-center 
          justify-center 
          overflow-hidden"
          >
            <div className="relative">
              <EmojiPicker getvalues={onChangeEmoji}>{iconId}</EmojiPicker>
            </div>
            <Input
              type="text"
              value={listType === "folder" ? folderTitle : fileTitle}
              className={clsx(
                "outline-none overflow-hidden w-[140px]  text-neutral-7",
                {
                  "bg-muted cursor-text": isEditing,
                  "bg-transparent cursor-pointer": !isEditing,
                }
              )}
              readOnly={!isEditing}
              onDoubleClick={handleDoubleClick}
              onBlur={handleBlur}
              onChange={
                listType === "folder" ? folderTitleChange : fileTitleChange
              }
            />
          </div>
          <div className={hoverStyles}>
            <TooltipComponent message="Delete Folder">
              <Trash2
                onClick={moveToTrash}
                size={15}
                className="hover:dark:text-white dark:text-neutral-7 transition-colors"
              />
            </TooltipComponent>
            {listType === "folder" && !isEditing && (
              <TooltipComponent message="Add File">
                <PlusIcon
                  onClick={handleAddnewFile}
                  size={15}
                  className="hover:dark:text-white  dark:text-neutral-7 transition-colors"
                />
              </TooltipComponent>
            )}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {workspaces
          .find((workspace) => workspace.id === workSpaceId)
          ?.folders.find((folder) => folder.id === id)
          ?.files.filter((file) => !file.inTrash)
          .map((file) => {
            const customFileId = `${id}folder${file.id}`;
            return (
              <Dropdown
                key={file.id}
                title={file.title}
                listType="file"
                id={customFileId}
                iconId={file.iconId}
              />
            );
          })}
      </AccordionContent>
    </AccordionItem>
  );
};
export default Dropdown;
