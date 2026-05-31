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
import { XCircleIcon, Image as ImageIcon, Search, File as FileIcon, Folder as FolderIcon, X, Globe } from "lucide-react";
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
  const sessionUserRef = useRef(session?.data?.user);
  useEffect(() => {
    sessionUserRef.current = session?.data?.user;
  }, [session?.data?.user]);
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

  const [showBookmarkDialog, setShowBookmarkDialog] = useState(false);
  const [showPageLinkDialog, setShowPageLinkDialog] = useState(false);
  const [bookmarkUrl, setBookmarkUrl] = useState("");
  const [bookmarkTitle, setBookmarkTitle] = useState("");
  const [bookmarkDesc, setBookmarkDesc] = useState("");
  const [pageSearchQuery, setPageSearchQuery] = useState("");
  const [savedRange, setSavedRange] = useState<any>(null);
  const [isSelectionLink, setIsSelectionLink] = useState(false);

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
          const formats = quill.getFormat(range.index, range.length);
          setIsSelectionLink(!!formats.link);
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
      const formats = quill.getFormat(range.index, range.length);
      setIsSelectionLink(!!formats.link);
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
    } else if (id === "link-bookmark") {
      setSavedRange(range);
      setShowBookmarkDialog(true);
    } else if (id === "link-page") {
      setSavedRange(range);
      setShowPageLinkDialog(true);
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
    const user = sessionUserRef.current;
    if (!fileId || quill === null || !user) return;
    connectSocket(
      process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8000",
      fileId,
      {
        id: user.id as string,
        name: user.name as string,
        email: user.email as string,
        image: user.image as string || "",
      }
    );
    return () => {
      disconnectSocket();
    };
  }, [fileId, quill, session?.data?.user?.id, session?.data?.user?.email, session?.data?.user?.name, session?.data?.user?.image]);

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
  }, [fileId, workSpaceId, folderId, quill]);

  // for adding user to the room
  useEffect(() => {
    const user = sessionUserRef.current;
    if (!fileId || !quill || !socket || !user) return;
    addListener("connect", () => {
      sendMessage("createRoom", { fileId, joinedUser: sessionUserRef.current });
    });
  }, [fileId, quill, socket, session?.data?.user?.id]);

  //send all the changes to the user and save in db
  useEffect(() => {
    const user = sessionUserRef.current;
    if (
      !fileId ||
      !quill ||
      !socket ||
      !user ||
      !localCursor.length
    )
      return;

    const cursorChangeHnalder = () => {
      return (range: any, oldRange: any, source: any) => {
        const currentUser = sessionUserRef.current;
        if (source === "user" && currentUser?.id && range) {
          console.log(range, fileId, " in the sending res of cursor ");
          sendMessage("cursor-move", range, fileId, currentUser.id);
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
    session?.data?.user?.id,
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
      const currentUser = sessionUserRef.current;
      if (currentUser) {
        const cursors: any = quill.getModule("cursors");
        allcollaborator.forEach((user: any) => {
          if (
            user.id !== currentUser.id &&
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
  }, [fileId, quill, socket, session?.data?.user?.id]);

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
            isLink={isSelectionLink}
          />
        )}

        {showBookmarkDialog && (
          <div className="fixed inset-0 z-55 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="w-[420px] rounded-xl border border-muted bg-background/95 backdrop-blur-md p-6 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-muted pb-3 mb-4">
                <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Add Web Bookmark
                </h3>
                <button
                  onClick={() => {
                    setShowBookmarkDialog(false);
                    setBookmarkUrl("");
                    setBookmarkTitle("");
                    setBookmarkDesc("");
                  }}
                  className="text-muted-foreground hover:text-foreground rounded-lg p-1 hover:bg-muted transition-all cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase">URL</label>
                  <input
                    type="text"
                    placeholder="https://example.com"
                    value={bookmarkUrl}
                    onChange={(e) => setBookmarkUrl(e.target.value)}
                    className="w-full bg-muted/50 border border-muted-foreground/20 rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-muted-foreground/45"
                  />
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase">Title (Optional)</label>
                  <input
                    type="text"
                    placeholder="Custom Title"
                    value={bookmarkTitle}
                    onChange={(e) => setBookmarkTitle(e.target.value)}
                    className="w-full bg-muted/50 border border-muted-foreground/20 rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-muted-foreground/45"
                  />
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase">Description (Optional)</label>
                  <textarea
                    placeholder="Short description of the link..."
                    value={bookmarkDesc}
                    onChange={(e) => setBookmarkDesc(e.target.value)}
                    rows={2}
                    className="w-full bg-muted/50 border border-muted-foreground/20 rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-muted-foreground/45 resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 mt-2 pt-3 border-t border-muted">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setShowBookmarkDialog(false);
                      setBookmarkUrl("");
                      setBookmarkTitle("");
                      setBookmarkDesc("");
                    }}
                    className="text-xs"
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    disabled={!bookmarkUrl.trim()}
                    onClick={() => {
                      if (!quill) return;
                      let cleanUrl = bookmarkUrl.trim();
                      if (!/^https?:\/\//i.test(cleanUrl)) {
                        cleanUrl = "https://" + cleanUrl;
                      }
                      let domain = "web";
                      try {
                        domain = new URL(cleanUrl).hostname;
                      } catch (e) {}

                      const title = bookmarkTitle.trim();
                      const description = bookmarkDesc.trim();

                      const html = `<a href="${cleanUrl}" target="_blank" style="text-decoration: none; display: block; margin: 16px 0;">
                        <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); padding: 16px 20px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 16px; transition: all 0.2s ease;">
                          <div style="display: flex; flex-direction: column; gap: 4px; overflow: hidden; flex-grow: 1; text-align: left;">
                            <span style="font-size: 14px; font-weight: 600; color: #f8fafc; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block;">${title || cleanUrl}</span>
                            <span style="font-size: 11px; color: #94a3b8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${description || "View shared bookmark"}</span>
                            <span style="font-size: 10px; color: #a855f7; margin-top: 4px; font-weight: 500;">🌐 ${domain}</span>
                          </div>
                          <div style="flex-shrink: 0; width: 44px; height: 44px; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            🔗
                          </div>
                        </div>
                      </a><p><br></p>`;

                      const index = savedRange ? savedRange.index : quill.getLength();
                      quill.clipboard.dangerouslyPasteHTML(index, html);
                      
                      setShowBookmarkDialog(false);
                      setBookmarkUrl("");
                      setBookmarkTitle("");
                      setBookmarkDesc("");
                    }}
                    className="bg-purple-600 hover:bg-purple-500 text-xs text-foreground"
                  >
                    Insert Bookmark
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showPageLinkDialog && (() => {
          const currentWorkspace = workspaces.find((w) => w.id === workSpaceId);
          const allFolders = currentWorkspace?.folders || [];
          const allFiles = allFolders.flatMap((f) => f.files || []);

          // Filter by search query
          const filteredFolders = allFolders.filter(
            (f) => f.title.toLowerCase().includes(pageSearchQuery.toLowerCase())
          );
          const filteredFiles = allFiles.filter(
            (fil) => fil.title.toLowerCase().includes(pageSearchQuery.toLowerCase())
          );

          return (
            <div className="fixed inset-0 z-55 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="w-[420px] rounded-xl border border-muted bg-background/95 backdrop-blur-md p-5 shadow-2xl flex flex-col max-h-[480px] animate-in fade-in-50 zoom-in-95 duration-200">
                <div className="flex items-center justify-between border-b border-muted pb-2.5 mb-3 flex-shrink-0">
                  <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                    <Search className="h-4 w-4" /> Link to Page
                  </h3>
                  <button
                    onClick={() => {
                      setShowPageLinkDialog(false);
                      setPageSearchQuery("");
                    }}
                    className="text-muted-foreground hover:text-foreground rounded-lg p-1 hover:bg-muted transition-all cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative mb-3 flex-shrink-0">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search folders or files in this workspace..."
                    value={pageSearchQuery}
                    onChange={(e) => setPageSearchQuery(e.target.value)}
                    className="w-full bg-muted/50 border border-muted-foreground/20 rounded-lg pl-9 pr-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-muted-foreground/45"
                  />
                </div>

                <div className="flex-grow overflow-y-auto pr-1 flex flex-col gap-3">
                  {/* Folders List */}
                  {filteredFolders.length > 0 && (
                    <div className="flex flex-col gap-1">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase px-2 mb-1 text-left">
                        Folders
                      </div>
                      {filteredFolders.map((folder) => (
                        <button
                          key={folder.id}
                          onClick={() => {
                            if (!quill) return;
                            const pageUrl = `/dashboard/${workSpaceId}/${folder.id}`;
                            const html = `<a href="${pageUrl}" style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); color: #60a5fa; padding: 4px 8px; border-radius: 6px; font-size: 13.5px; font-weight: 500; margin: 2px 2px; transition: all 0.2s ease;">
                              <span style="font-size: 14px;">${folder.iconId || "📁"}</span>
                              <span style="border-bottom: 1px dashed rgba(96, 165, 250, 0.4);">${folder.title}</span>
                            </a>&nbsp;`;

                            const index = savedRange ? savedRange.index : quill.getLength();
                            quill.clipboard.dangerouslyPasteHTML(index, html);
                            
                            setShowPageLinkDialog(false);
                            setPageSearchQuery("");
                          }}
                          className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left hover:bg-muted/60 transition-all text-xs text-foreground cursor-pointer"
                        >
                          <span className="text-sm p-1 bg-muted rounded-md">{folder.iconId || "📁"}</span>
                          <span className="font-medium text-foreground">{folder.title}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Files List */}
                  {filteredFiles.length > 0 && (
                    <div className="flex flex-col gap-1">
                      <div className="text-[10px] font-bold text-muted-foreground uppercase px-2 mb-1 text-left">
                        Files
                      </div>
                      {filteredFiles.map((file) => (
                        <button
                          key={file.id}
                          onClick={() => {
                            if (!quill) return;
                            const pageUrl = `/dashboard/${workSpaceId}/${file.folderId}/${file.id}`;
                            const html = `<a href="${pageUrl}" style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px; background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.2); color: #c084fc; padding: 4px 8px; border-radius: 6px; font-size: 13.5px; font-weight: 500; margin: 2px 2px; transition: all 0.2s ease;">
                              <span style="font-size: 14px;">${file.iconId || "📄"}</span>
                              <span style="border-bottom: 1px dashed rgba(192, 132, 252, 0.4);">${file.title}</span>
                            </a>&nbsp;`;

                            const index = savedRange ? savedRange.index : quill.getLength();
                            quill.clipboard.dangerouslyPasteHTML(index, html);
                            
                            setShowPageLinkDialog(false);
                            setPageSearchQuery("");
                          }}
                          className="w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left hover:bg-muted/60 transition-all text-xs text-foreground cursor-pointer"
                        >
                          <span className="text-sm p-1 bg-muted rounded-md">{file.iconId || "📄"}</span>
                          <span className="font-medium text-foreground">{file.title}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {filteredFolders.length === 0 && filteredFiles.length === 0 && (
                    <div className="text-center text-xs text-muted-foreground py-8">
                      No matching pages found in this workspace.
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
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
