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
import { XCircleIcon, Image as ImageIcon } from "lucide-react";
import { handleImgDelete } from "@/lib/uploadImg";
import UseSocket from "@/lib/store/socket.provider";
import { useSession } from "next-auth/react";
import { SlashMenu } from "./slashmenu";
import { AIAssistant } from "./aiassistant";
import { CoverGallery } from "./covergallery";
import { BubbleMenu } from "./bubblemenu";

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

  const [showSlashMenu, setShowSlashMenu] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showCoverGallery, setShowCoverGallery] = useState(false);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

  const [showBubbleMenu, setShowBubbleMenu] = useState(false);
  const [bubblePos, setBubblePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!quill) return;

    const handleSelectionChange = (range: any, oldRange: any, source: string) => {
      if (range && range.length > 0) {
        const bounds = quill.getBounds(range.index, range.length);
        if (bounds) {
          setBubblePos({
            x: bounds.left + bounds.width / 2,
            y: bounds.top + 230,
          });
          setShowBubbleMenu(true);
        }
      } else {
        setShowBubbleMenu(false);
      }
    };

    quill.on("selection-change", handleSelectionChange);
    return () => {
      quill.off("selection-change", handleSelectionChange);
    };
  }, [quill]);

  const handleBubbleFormat = (format: string, value: any = true) => {
    if (!quill) return;
    const range = quill.getSelection();
    if (range) {
      quill.formatText(range.index, range.length, format, value);
    }
  };

  const handleBubbleAIAction = (actionType: string) => {
    if (!quill) return;
    const range = quill.getSelection();
    if (range) {
      const selectedText = quill.getText(range.index, range.length);
      setMenuPos({ x: bubblePos.x, y: bubblePos.y + 40 });
      setShowAIAssistant(true);
      setShowBubbleMenu(false);
    }
  };

  useEffect(() => {
    if (!quill) return;

    const handleTextChange = (delta: any, oldDelta: any, source: string) => {
      if (source !== "user") return;

      const range = quill.getSelection();
      if (!range) return;

      const index = range.index;
      const text = quill.getText(0, index);

      if (text.endsWith("/")) {
        const bounds = quill.getBounds(index);
        const container = document.getElementById("container");
        if (container && bounds) {
          const containerRect = container.getBoundingClientRect();
          setMenuPos({
            x: bounds.left,
            y: bounds.top + bounds.height + 260,
          });
          setShowSlashMenu(true);
        }
      } else {
        setShowSlashMenu(false);
      }
    };

    quill.on("text-change", handleTextChange);
    return () => {
      quill.off("text-change", handleTextChange);
    };
  }, [quill]);

  const handleSlashSelect = (id: string) => {
    if (!quill) return;

    const range = quill.getSelection();
    if (!range) return;

    quill.deleteText(range.index - 1, 1);

    if (id === "h1") {
      quill.formatLine(range.index - 1, 1, "header", 1);
    } else if (id === "h2") {
      quill.formatLine(range.index - 1, 1, "header", 2);
    } else if (id === "h3") {
      quill.formatLine(range.index - 1, 1, "header", 3);
    } else if (id === "bullet") {
      quill.formatLine(range.index - 1, 1, "list", "bullet");
    } else if (id === "ordered") {
      quill.formatLine(range.index - 1, 1, "list", "ordered");
    } else if (id === "todo") {
      quill.formatLine(range.index - 1, 1, "list", "check");
    } else if (id === "code") {
      quill.clipboard.dangerouslyPasteHTML(
        range.index - 1,
        `<pre style="background: #090d16; border: 1px solid rgba(255,255,255,0.08); color: #94a3b8; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 13px; margin: 10px 0;"><code>// Write your code here...</code></pre><p><br></p>`
      );
    } else if (id === "callout") {
      quill.clipboard.dangerouslyPasteHTML(
        range.index - 1,
        `<div style="background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); padding: 16px; border-radius: 10px; display: flex; align-items: center; gap: 12px; margin: 10px 0;"><span style="font-size: 22px;">💡</span><span style="font-size: 13.5px; font-weight: 300; color: #cbd5e1;">Callout description goes here...</span></div><p><br></p>`
      );
    } else if (id === "table") {
      quill.clipboard.dangerouslyPasteHTML(
        range.index - 1,
        `<table style="width: 100%; border-collapse: collapse; margin: 16px 0; border: 1px solid #334155; font-size: 13px;">
          <thead>
            <tr style="background: #1e293b; border-bottom: 2px solid #334155;">
              <th style="padding: 10px; text-align: left; border: 1px solid #334155; font-weight: 600;">Task Name</th>
              <th style="padding: 10px; text-align: left; border: 1px solid #334155; font-weight: 600;">Assignee</th>
              <th style="padding: 10px; text-align: left; border: 1px solid #334155; font-weight: 600;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #334155; background: #0f172a;">
              <td style="padding: 10px; border: 1px solid #334155; color: #cbd5e1;">Design UI Layouts</td>
              <td style="padding: 10px; border: 1px solid #334155; color: #94a3b8;">Laks</td>
              <td style="padding: 10px; border: 1px solid #334155; color: #34d399;">Complete</td>
            </tr>
            <tr style="border-bottom: 1px solid #334155; background: #0f172a;">
              <td style="padding: 10px; border: 1px solid #334155; color: #cbd5e1;">Add Table Block</td>
              <td style="padding: 10px; border: 1px solid #334155; color: #94a3b8;">NexNote AI</td>
              <td style="padding: 10px; border: 1px solid #334155; color: #facc15;">In Progress</td>
            </tr>
          </tbody>
        </table><p><br></p>`
      );
    } else if (id === "tpl-meeting") {
      quill.clipboard.dangerouslyPasteHTML(
        range.index - 1,
        `<h2 style="font-weight: 600; color: #3b82f6; margin-top: 16px;">📅 Meeting Notes Template</h2>
        <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); padding: 14px; border-radius: 8px; margin: 10px 0;">
          <strong>Agenda:</strong> Discuss target roadmap, feature priorities, and assign main items.
        </div>
        <h3 style="font-weight: 600; margin-top: 12px;">👥 Attendees</h3>
        <ul>
          <li>[ ] User A</li>
          <li>[ ] User B</li>
        </ul>
        <h3 style="font-weight: 600; margin-top: 12px;">📋 Action Items</h3>
        <ul>
          <li>[ ] Build and test the advanced editor pipeline</li>
          <li>[ ] Style premium callouts</li>
        </ul><p><br></p>`
      );
    } else if (id === "tpl-roadmap") {
      quill.clipboard.dangerouslyPasteHTML(
        range.index - 1,
        `<h2 style="font-weight: 600; color: #ec4899; margin-top: 16px;">🚀 Project Taskboard Template</h2>
        <p>Track targets, timelines, and objectives across active developments.</p>
        <h3 style="font-weight: 600; margin-top: 12px;">🎯 Core Objectives</h3>
        <div style="background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.2); padding: 14px; border-radius: 8px; margin: 10px 0;">
          <strong>Q3 Launch:</strong> Seamless cloud synchronization, rich canvas notes, and optimized assets.
        </div><p><br></p>`
      );
    } else if (id === "tpl-planner") {
      quill.clipboard.dangerouslyPasteHTML(
        range.index - 1,
        `<h2 style="font-weight: 600; color: #6366f1; margin-top: 16px;">🗓️ Weekly Planner Template</h2>
        <p>Track priorities day-by-day to keep development focus extremely clean.</p>
        <h3 style="font-weight: 600; color: #818cf8; margin-top: 8px;">Monday</h3>
        <ul>
          <li>[ ] Review pipeline bounds checks</li>
        </ul>
        <h3 style="font-weight: 600; color: #818cf8; margin-top: 8px;">Tuesday</h3>
        <ul>
          <li>[ ] Build responsive layouts</li>
        </ul><p><br></p>`
      );
    } else if (id === "ai") {
      setShowAIAssistant(true);
    }

    setShowSlashMenu(false);
  };

  const handleAIInsert = (text: string) => {
    if (!quill) return;
    const range = quill.getSelection() || { index: quill.getLength() };

    const htmlText = text
      .split("\n")
      .map(line => {
        if (line.startsWith("### ")) return `<h3 style="font-weight: 600; color: #a855f7; margin-top: 12px; margin-bottom: 6px;">${line.substring(4)}</h3>`;
        if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ") || line.startsWith("5. ")) {
          const boldFormatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
          return `<p style="margin-left: 16px; margin-bottom: 4px;">${boldFormatted}</p>`;
        }
        if (line.trim() === "") return "";
        const boldFormatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return `<p style="margin-bottom: 8px;">${boldFormatted}</p>`;
      })
      .filter(l => l !== "")
      .join("");

    quill.clipboard.dangerouslyPasteHTML(range.index, htmlText);
  };

  const handleCoverSelect = async (url: string) => {
    if (dirType === "workspace") {
      const { error } = await updatewrkspace({ bannerUrl: url }, fileId);
      if (!error) {
        updateWorkspace(fileId, { bannerUrl: url });
        toast.success("Banner updated successfully!");
      }
    } else if (dirType === "folder") {
      const { error } = await updatefolder({ bannerUrl: url }, fileId);
      if (!error) {
        updateFolder(workSpaceId!, fileId, { bannerUrl: url });
        toast.success("Banner updated successfully!");
      }
    } else if (dirType === "file") {
      const { error } = await updateFiles({ bannerUrl: url }, fileId);
      if (!error) {
        updateFile(workSpaceId!, folderId!, fileId, { bannerUrl: url });
        toast.success("Banner updated successfully!");
      }
    }
  };

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
    connectSocket(
      process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8000",
      fileId,
      {
        id: session?.data?.user?.id as string,
        name: session?.data?.user?.name as string,
        email: session?.data?.user?.email as string,
        image: session?.data?.user?.image as string || "",
      }
    );
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
          <div className="flex gap-2">
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
            <Button
              variant="ghost"
              onClick={() => setShowCoverGallery(true)}
              className="gap-2 hover:bg-background
              flex
              items-center
              justify-center
              mt-2
              text-sm
              text-muted-foreground
              p-2
              rounded-md"
            >
              <ImageIcon size={16} />
              <span className="whitespace-nowrap font-normal">
                Choose Preset Cover
              </span>
            </Button>
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
      <div className="flex w-full items-center flex-col justify-center mt-10 relative">
        {showSlashMenu && (
          <SlashMenu
            x={menuPos.x}
            y={menuPos.y}
            onClose={() => setShowSlashMenu(false)}
            onSelect={handleSlashSelect}
          />
        )}
        {showAIAssistant && (
          <AIAssistant
            x={menuPos.x}
            y={menuPos.y}
            onClose={() => setShowAIAssistant(false)}
            onInsert={handleAIInsert}
          />
        )}
        {showCoverGallery && (
          <CoverGallery
            onClose={() => setShowCoverGallery(false)}
            onSelect={handleCoverSelect}
          />
        )}
        {showBubbleMenu && (
          <BubbleMenu
            x={bubblePos.x}
            y={bubblePos.y}
            onFormat={handleBubbleFormat}
            onAIAction={handleBubbleAIAction}
            onClose={() => setShowBubbleMenu(false)}
          />
        )}
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
