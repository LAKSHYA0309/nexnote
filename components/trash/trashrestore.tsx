"use client";
import { appFoldersType, useAppSotre } from "@/lib/store/state.provider";
import { File } from "@prisma/client";
import { FileIcon, FolderIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Trashrestore = () => {
  const { workSpaceId, workspaces } = useAppSotre();
  const [folders, setFolder] = useState<appFoldersType[] | []>([]);
  const [files, setFiles] = useState<File[] | []>([]);

  useEffect(() => {
    const folder =
      workspaces
        .find((w) => w.id === workSpaceId)
        ?.folders.filter((f) => f.inTrash) || [];
    setFolder(folder);

    let currfiles: File[] = [];
    const file = workspaces
      .find((w) => w.id === workSpaceId)
      ?.folders.forEach((f) =>
        f.files.forEach((i) => {
          if (i.inTrash) {
            currfiles.push(i);
          }
        })
      );
    setFiles(currfiles);
  }, [workSpaceId, workspaces]);
  return (
    <section>
      {!!folders.length && (
        <>
          <h3>Folders</h3>
          {folders.map((folder) => (
            <Link
              className="hover:bg-muted
            rounded-md
            p-2
            flex
            item-center
            justify-between"
              href={`/dashboard/${folder.workspaceId}/${folder.id}`}
              key={folder.id}
            >
              <article>
                <aside className="flex items-center gap-2">
                  <FolderIcon />
                  {folder.title}
                </aside>
              </article>
            </Link>
          ))}
        </>
      )}
      {!!files.length && (
        <>
          <h3>Files</h3>
          {files.map((file) => (
            <Link
              key={file.id}
              className=" hover:bg-muted rounded-md p-2 flex items-center justify-between"
              href={`/dashboard/${file.workspaceId}/${file.folderId}/${file.id}`}
            >
              <article>
                <aside className="flex items-center gap-2">
                  <FileIcon />
                  {file.title}
                </aside>
              </article>
            </Link>
          ))}
        </>
      )}
      {!files.length && !folders.length && (
        <div
          className="
          text-muted-foreground
          absolute
          top-[50%]
          left-[50%]
          transform
          -translate-x-1/2
          -translate-y-1/2
      "
        >
          No Items in trash
        </div>
      )}
    </section>
  );
};

export default Trashrestore;
