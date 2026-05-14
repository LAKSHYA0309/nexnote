"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  deleteFile,
  deleteFolder,
  getFileDetails,
  getFoldereDetails,
  getworkspaceDetails,
  updateFiles,
  updateFolder as updatefolder,
  updateWorkSpace as updatewrkspace,
} from "@/lib/queries/db.queries";
import { useAppSotre } from "@/lib/store/state.provider";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import EmojiPicker from "../global/emojiPicker";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import BannerUpload from "../banneruploadbutton/bannerupload";
import type QuillType from "quill";
import "quill/dist/quill.snow.css";
import { Folder, File, Workspace, User } from "@prisma/client";
import { XCircleIcon } from "lucide-react";
import { handleImgDelete } from "@/lib/uploadImg";
import UseSocket from "@/lib/store/socket.provider";
import { useSession } from "next-auth/react";

type props = {
  dirType: "workspace" | "folder" | "file";
  fileId: string;
  data: File | Folder | Workspace;
};
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];
const Texteditor = ({ dirType, fileId, data }: props) => {
  const [quill, setQuill] = useState<QuillType | null>();
  const {
    isConnected,
    connectSocket,
    disconnectSocket,
    addListener,
    sendMessage,
    removeListener,
    socket,
  } = UseSocket();
  const [collaborator, setcollaborator] = useState<Partial<User[]> | []>([]);
  const socketRef = useRef<ReturnType<typeof setTimeout>>(null);
  const functionref = useRef<(data: any) => void>(null);
  const [deletingBanner, setDeletingBanner] = useState<boolean>(false);
  const [saving, setsaving] = useState<boolean>(false);
  const [renderKey, setRenderKey] = useState<number>(1);
  const [localCursor, setLocalCursor] = useState<any>([]);
  const session = useSession();
  const {
    workSpaceId,
    workspaces,
    folderId,
    updateFile,
    updateFolder,
    removeFile,
    removeFolder,
    updateWorkspace,
  } = useAppSotre();
  const pathname = usePathname();
  const router = useRouter();

  const wrapperref = useCallback((wrapper: HTMLDivElement | null) => {
    if (typeof window === undefined || wrapper === null) return;
    (async () => {
      wrapper.innerHTML = " ";
      const editor = document.createElement("div");
      wrapper.append(editor);

      const Quill = (await import("quill")).default;
      const QuillCursor = (await import("quill-cursors")).default;
      Quill.register("modules/cursors", QuillCursor);
      const q = new Quill(editor, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
          cursors: {
            transformOnTextChange: true,
          },
        },
      });
      const cursorsModule = q.getModule("cursors");
      console.log("Cursors module loaded:", cursorsModule);
      setQuill(q);
    })();
  }, []);

  const details = useMemo(() => {
    let selectedDir;
    if (dirType === "file") {
      selectedDir = workspaces
        .find((w) => w.id === workSpaceId)
        ?.folders.find((f) => f.id === folderId)
        ?.files.find((f) => f.id === fileId);
    }
    if (dirType === "folder") {
      selectedDir = workspaces
        .find((w) => w.id === workSpaceId)
        ?.folders.find((f) => f.id === fileId);
    }
    if (dirType === "workspace") {
      selectedDir = workspaces.find((w) => w.id === fileId);
    }

    if (selectedDir) {
      return selectedDir;
    }

    return {
      title: data.title as string,
      iconId: data.iconId,
      createdAt: data.createdAt,
      data: data.data,
      inTrash: data.inTrash,
      bannerUrl: data.bannerUrl,
    } as Workspace | Folder | File;
  }, [workSpaceId, workspaces, fileId]);

  const restoreHandler = async () => {
    if (dirType === "folder") {
      if (!workSpaceId || !fileId) return;
      const { data, error } = await updatefolder({ inTrash: null }, fileId);

      if (error) {
        toast.error("something went wrong while resotrig folder");
        return;
      }

      toast.success("folder restored successfully");
      updateFolder(workSpaceId, fileId, { inTrash: null });
      return;
    }

    if (dirType === "file") {
      if (!workSpaceId || !fileId || !folderId) return;
      const { data, error } = await updateFiles({ inTrash: null }, fileId);

      if (error) {
        toast.error("something went wrong while resotrig file");
        return;
      }

      toast.success("folder restored successfully");
      updateFile(workSpaceId, folderId, fileId, { inTrash: null });
      return;
    }
  };

  const deleteHandler = async () => {
    if (dirType === "file") {
      if (!fileId || !workSpaceId || !folderId) return;
      const deleted = await deleteFile(fileId);
      if (deleted) {
        removeFile(workSpaceId, folderId, fileId);
      }
    }

    if (dirType === "folder") {
      if (!fileId || !workSpaceId) return;
      const deletedFolder = await deleteFolder(fileId);
      if (deletedFolder) {
        removeFolder(workSpaceId, fileId);
      }
    }
  };

  const breadCrumbs = useMemo(() => {
    if (!workSpaceId || !fileId || !pathname) return;

    const segements = pathname
      .split("/")
      .filter((val) => val !== "dashboard" && val);

    const wid = segements[0];
    const workspacesegments = workspaces.find((w) => w.id === wid);
    const workspaceBreadCrumb = workspacesegments
      ? `${workspacesegments.iconId} ${workspacesegments.title}`
      : "";

    if (segements.length === 1) {
      return workspaceBreadCrumb;
    }
    const fid = segements[1];
    const folderssegment = workspacesegments?.folders.find((f) => f.id === fid);
    const folderBreadCrumb = folderssegment
      ? ` / ${folderssegment.iconId}   ${folderssegment.title}`
      : " ";
    if (segements.length === 2) {
      return `${workspaceBreadCrumb} ${folderBreadCrumb}`;
    }

    const fileid = segements[2];
    const fileSegment = folderssegment?.files.find((f) => f.id === fileid);
    const filebreadcramp = fileSegment
      ? ` / ${fileSegment.iconId} ${fileSegment.title}  `
      : " ";

    return ` ${workspaceBreadCrumb} ${folderBreadCrumb} ${filebreadcramp}`;
  }, [workspaces, workSpaceId, fileId]);

  const iconOnChange = async (icon: string) => {
    if (!icon) return;
    if (dirType === "workspace") {
      if (!fileId) return;
      const { data, error } = await updatewrkspace({ iconId: icon }, fileId);

      if (error) {
        toast.error("something went wrong while updating the iconId", {
          duration: 3000,
        });
        return;
      }
      updateWorkspace(fileId, { iconId: icon });
      return;
    }

    if (dirType === "folder") {
      if (!workSpaceId || !fileId) return;

      const { data, error } = await updatefolder({ iconId: icon }, fileId);

      if (error) {
        toast.error("something went wrong while updatinng the iconId");
        return;
      }
      updateFolder(workSpaceId, fileId, { iconId: icon });
      return;
    }

    if (dirType === "file") {
      if (!fileId || !folderId || !workSpaceId) return;

      const { data, error } = await updateFiles({ iconId: icon }, fileId);

      if (error) {
        toast.error("something went wrong while updatinng the iconId");
        return;
      }
      updateFile(workSpaceId, folderId, fileId, { iconId: icon });
    }
  };

  const deleteBanner = async () => {
    if (!details.bannerUrl) return;
    try {
      setDeletingBanner(true);
      const url = details.bannerUrl?.split("/object/public/bannerurl/")[1];
      const deletedbannerUrl = await handleImgDelete("bannerurl", url);

      if (!deletedbannerUrl) {
        toast.error("somethig went wrong while deleting the banner url", {
          duration: 3000,
        });
        return;
      }

      if (dirType === "workspace") {
        if (!fileId) return;
        const { data, error } = await updatewrkspace({ bannerUrl: "" }, fileId);

        if (error) {
          toast.error("something went wrong while updating the iconId", {
            duration: 3000,
          });
          return;
        }
        updateWorkspace(fileId, { bannerUrl: "" });
        return;
      }

      if (dirType === "folder") {
        if (!workSpaceId || !fileId) return;
        const { data, error } = await updatefolder({ bannerUrl: "" }, fileId);

        if (error) {
          toast.error("something went wrong while deleting  the banner");
          return;
        }
        updateFolder(workSpaceId, fileId, { bannerUrl: "" });
        return;
      }

      if (dirType === "file") {
        if (!fileId || !folderId || !workSpaceId) return;

        const { data, error } = await updateFiles({ bannerUrl: "" }, fileId);

        if (error) {
          toast.error("something went wrong while deleting  the banner");
          return;
        }
        updateFile(workSpaceId, folderId, fileId, { bannerUrl: "" });
      }
      setDeletingBanner(false);
    } catch (error) {
      toast.error("something  wnet wrong while removing the banner ", {
        duration: 3000,
      });
      setDeletingBanner(false);
    }
  };

  //check for socket connection
  useEffect(() => {
    if (!fileId || quill === null || !session?.data?.user) return;
    connectSocket("http://localhost:8000", fileId, session?.data?.user);
    return () => {
      disconnectSocket();
    };
  }, [fileId, quill, session?.data?.user]);

  //get the updated data as per the text edtior getting  updated

  useEffect(() => {
    if (!fileId || quill === null) return;
    let selectedDir;
    const fetchDetails = async () => {
      if (dirType === "workspace") {
        const { data: workspaceDetails, error: workspaceWError } =
          await getworkspaceDetails(fileId);
        if (workspaceWError) {
          return router.replace("/dashboard");
        }

        if (!workspaceDetails || quill === null) {
          return;
        }
        selectedDir = workspaceDetails;

        if (!selectedDir.data) return;

        quill?.setContents(JSON.parse(selectedDir.data), "api");

        updateWorkspace(fileId, { data: selectedDir.data });
      }
      if (dirType === "folder") {
        if (!workSpaceId || !fileId) return;

        const { data: folderdata, error: folderError } =
          await getFoldereDetails(fileId);

        if (folderError || quill === null) {
          return router.replace(`/dashboard/${workSpaceId}`);
        }

        selectedDir = folderdata;
        if (!selectedDir?.data || quill === null) return;
        quill?.setContents(JSON.parse(selectedDir?.data ?? " "), "api");
        updateFolder(workSpaceId, fileId, { data: selectedDir.data });
        return;
      }
      if (dirType === "file") {
        if (!folderId || !workSpaceId || quill === null) return;
        const { data: fileData, error: fileError } = await getFileDetails(
          fileId
        );
        if (fileError || quill === null) {
          return router.replace(`/dashboard/${workSpaceId}/${folderId}`);
        }

        selectedDir = fileData;
        if (!selectedDir?.data || quill === null) return;
        quill?.setContents(JSON.parse(selectedDir?.data ?? " "), "api");
        updateFile(workSpaceId, folderId, fileId, { data: selectedDir.data });
      }
    };
    fetchDetails();
  }, [fileId, workSpaceId, folderId, quill, socket]);

  // for adding user to the room
  useEffect(() => {
    if (!fileId || !quill || !socket || !session?.data?.user) return;
    addListener("connect", () => {
      sendMessage("createRoom", { fileId, joinedUser: session.data?.user });
    });
  }, [fileId, quill, socket, session?.data?.user]);

  //send all the changes to the user and save in db
  useEffect(() => {
    if (
      !fileId ||
      !quill ||
      !socket ||
      !session?.data?.user ||
      !localCursor.length
    )
      return;

    const cursorChangeHnalder = () => {
      return (range: any, oldRange: any, source: any) => {
        if (source === "user" && session?.data.user.id && range) {
          console.log(range, fileId, " in the sending res of cursor ");
          sendMessage("cursor-move", range, fileId, session?.data.user.id);
        }
      };
    };

    const quillHandler = (delta: any, oldDelta: any, source: any) => {
      if (source != "user") return;
      setsaving(true);

      const content = quill.getContents();
      const length = quill.getLength();
      if (socketRef.current) clearTimeout(socketRef.current);
      socketRef.current = setTimeout(async () => {
        if (content && length !== 1 && fileId) {
          sendMessage("send-changes", { delta, fileId });
          const contentString = JSON.stringify(content);
          if (dirType == "workspace") {
            if (!fileId) return;
            updateWorkspace(fileId, {
              data: contentString,
            });
            await updatewrkspace({ data: contentString }, fileId);
          }
          if (dirType === "folder") {
            if (!workSpaceId) return;

            await updatefolder({ data: contentString }, fileId);

            updateFolder(workSpaceId, fileId, {
              data: contentString,
            });
          }
          if (dirType === "file") {
            if (!folderId || !workSpaceId) return;

            await updateFiles({ data: contentString }, fileId);

            updateFile(workSpaceId, folderId, fileId, {
              data: contentString,
            });
          }
        }

        setsaving(false);
      }, 850);
    };
    quill.on("text-change", quillHandler);
    quill.on("selection-change", cursorChangeHnalder);
    return () => {
      quill.off("text-change", quillHandler);
      quill.off("selection-change", cursorChangeHnalder);
      if (socketRef.current) clearTimeout(socketRef.current);
    };
  }, [
    fileId,
    quill,
    socket,
    session?.data?.user,
    folderId,
    details,
    localCursor,
  ]);

  // received   changes for the texts ,cursors and the users in the room present
  useEffect(() => {
    if (!fileId || quill === null || socket === null) return;
    const socketHandler = ({ delta, fileId: recivedId }: any) => {
      if (recivedId != fileId) return;
      console.log("received the changesss ...................");
      quill?.updateContents(delta, "api");
      setRenderKey((prev) => prev + 1);
    };
    addListener("receive-changes", socketHandler);
    return () => {
      removeListener("receive-changes", socketHandler);
    };
  }, [fileId, socket, quill]);

  // get the collaborator

  useEffect(() => {
    if (!fileId || socket === null || quill === null) return;
    functionref.current = (data) => {
      console.log("available collaborators .......", data);
    };

    const listener = (data: any) => {
      functionref?.current?.(data);
      setcollaborator(data);
      let allcollaborator = data;
      if (!quill) return;
      if (session?.data?.user) {
        const cursors: any = quill.getModule("cursors");
        allcollaborator.forEach((user: any) => {
          if (
            user.id !== session?.data?.user.id &&
            !cursors.cursors()[user.id]
          ) {
            cursors.createCursor(
              user.id,
              user.email.split("@")[0],
              `#${Math.random().toString(16).slice(2, 8)}`
            );
          }
        });
      }
    };

    addListener("user-Joined", listener);

    return () => {
      removeListener("user-Joined", listener);
    };
  }, [fileId, quill, socket]);

  // get the move ment of the cursor
  useEffect(() => {
    if (!fileId || !quill || !socket) return;

    const cursorHandler = (range: any, roomid: string, cursorId: string) => {
      console.log("hey i got fired", range, roomid, cursorId);
      if (roomid === fileId) {
        const cursorsModule: any = quill.getModule("cursors");

        if (cursorsModule) {
          cursorsModule.moveCursor(cursorId, range);
        }
      }
    };
    addListener("receive-cursor-move", cursorHandler);

    return () => {
      removeListener("receive-cursor-move", cursorHandler);
    };
  }, [fileId, quill, socket]);
  console.log(localCursor, "cursor to move");
  return (
    <>
      <div className="relative">
        {details.inTrash && (
          <article
            className="py-2 
          z-40 
          bg-[#EB5757] 
          flex  
          md:flex-row 
          flex-col 
          justify-center 
          items-center 
          gap-4 
          flex-wrap"
          >
            <div
              className="flex 
            flex-col 
            md:flex-row 
            gap-2 
            justify-center 
            items-center"
            >
              <span className="text-white">
                This {dirType} is in the trash.
              </span>
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent
                border-white
                text-white
                hover:bg-white
                hover:text-[#EB5757]
                "
                onClick={restoreHandler}
              >
                Restore
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="bg-transparent
                border-white
                text-white
                hover:bg-white
                hover:text-[#EB5757]
                "
                onClick={deleteHandler}
              >
                Delete
              </Button>
            </div>
            <span className="text-sm text-white">{details.inTrash}</span>
          </article>
        )}
        <div
          className="flex 
        flex-col-reverse 
        sm:flex-row 
        sm:justify-between 
        justify-center 
        sm:items-center 
        sm:p-2 
        p-8"
        >
          <div>{breadCrumbs}</div>
          <div className="flex items-center justify-center gap-4 ">
            <div className="flex items-center justify-center h-10">
              {collaborator &&
                collaborator.map((c) => (
                  <TooltipProvider key={c?.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar
                          className="
                    -ml-3 
                    bg-background 
                    border-2 
                    flex 
                    items-center 
                    justify-center 
                    border-white 
                    h-8 
                    w-8 
                    rounded-full"
                        >
                          <AvatarImage src={c?.image ?? ""} alt="img" />
                          <AvatarFallback>{c?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>{c?.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
            </div>
            {saving ? (
              <Badge
                variant="secondary"
                className="bg-orange-600 top-4
                text-white
                right-4
                z-50
                "
              >
                Saving...
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                className="bg-emerald-600 
                top-4
              text-white
              right-4
              z-50
              "
              >
                Saved
              </Badge>
            )}
          </div>
        </div>
      </div>
      {details?.bannerUrl && (
        <div className="w-full relative h-[200px]">
          <Image
            src={details.bannerUrl}
            alt="bannerurl"
            fill
            className="w-full md:h-48
            h-20
            object-cover"
          />
        </div>
      )}
      <div
        className="flex 
        justify-center
        items-center
        flex-col
        mt-2
        relative
      "
      >
        <div
          className="w-full 
        self-center 
        max-w-[800px] 
        flex 
        flex-col
         px-7 
         lg:my-8"
        >
          <div className="text-[80px]">
            <EmojiPicker getvalues={iconOnChange}>
              <div
                className="w-[100px]
                cursor-pointer
                transition-colors
                h-[100px]
                flex
                items-center
                justify-center
                hover:bg-muted
                rounded-xl"
              >
                {details.iconId}
              </div>
            </EmojiPicker>
          </div>
          <div className="flex ">
            <BannerUpload
              id={fileId}
              dirType={dirType}
              className="mt-2
              text-sm
              text-muted-foreground
              p-2
              hover:text-card-foreground
              transition-all
              rounded-md"
            >
              {details.bannerUrl ? "Update Banner" : "Add Banner"}
            </BannerUpload>
            {details.bannerUrl && (
              <Button
                disabled={deletingBanner}
                onClick={deleteBanner}
                variant="ghost"
                className="gap-2 hover:bg-background
                flex
                item-center
                justify-center
                mt-2
                text-sm
                text-muted-foreground
                w-36
                p-2
                rounded-md"
              >
                <XCircleIcon size={16} />
                <span className="whitespace-nowrap font-normal">
                  Remove Banner
                </span>
              </Button>
            )}
          </div>
          <span
            className="
            text-muted-foreground
            text-3xl
            font-bold
            h-9
          "
          >
            {details.title}
          </span>
          <span className="text-muted-foreground text-sm">
            {dirType.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center flex-col justify-center mt-10">
        <div
          id="container"
          className="max-w-[800px]"
          ref={wrapperref}
          key={renderKey}
        ></div>
      </div>
    </>
  );
};

export default Texteditor;
