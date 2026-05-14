import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { File } from "@/prisma/zod";
import { Folder, Workspace } from "@prisma/client";

export type appFoldersType = Folder & { files: File[] | [] };
export type appWorkspacesType = Workspace & {
  folders: appFoldersType[] | [];
};
type AppState = {
  workspaces: appWorkspacesType[];
  workSpaceId: string | null;
  folderId: string | null;
  filesId: string | null;
  // workspace actions
  setWorkspaces: (workspaces: appWorkspacesType[]) => void;
  addWorkspace: (workspace: appWorkspacesType) => void;
  updateWorkspace: (
    workspaceId: string,
    partial: Partial<appWorkspacesType>
  ) => void;
  deleteWorkspace: (workspaceId: string) => void;
  setPathName: (pathname: string) => void;
  // folder actions
  setFolders: (workspaceId: string, folders: appFoldersType[]) => void;
  addFolder: (workspaceId: string, folder: appFoldersType) => void;
  updateFolder: (
    workspaceId: string,
    folderId: string,
    partial: Partial<appFoldersType>
  ) => void;
  removeFolder: (workspaceId: string, folderId: string) => void;

  // file actions
  setFiles: (workspaceId: string, folderId: string, files: File[]) => void;
  addFile: (workspaceId: string, folderId: string, file: File) => void;
  updateFile: (
    workspaceId: string,
    folderId: string,
    fileId: string,
    partial: Partial<File>
  ) => void;
  removeFile: (workspaceId: string, folderId: string, fileId: string) => void;
};

export const useAppSotre = create<AppState>()(
  devtools((set) => ({
    workspaces: [],
    workSpaceId: null,
    folderId: null,
    filesId: null,
    // set the current path of to know which route you are in
    setPathName: (pathname: string) => {
      const segments = pathname.split("/").filter(Boolean);
      set({
        workSpaceId: segments[1] || null,
        folderId: segments[2] || null,
        filesId: segments[3] || null,
      });
    },

    // workspacess
    addWorkspace: (workspace) => {
      set((state) => ({
        workspaces: [...state.workspaces, { ...workspace, folders: [] }],
      }));
    },
    setWorkspaces: (allworkSpaces) => {
      set(() => ({
        workspaces: allworkSpaces,
      }));
    },

    updateWorkspace: (workspaceId, value) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceId
            ? {
                ...w,
                ...value,
              }
            : w
        ),
      }));
    },
    //folders
    addFolder: (workspaceId, folder) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceId
            ? {
                ...w,
                folders: [...w.folders, folder].sort(
                  (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
                ),
              }
            : w
        ),
      }));
    },

    setFolders: (workspaceId, folders) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceId
            ? {
                ...w,
                folders: folders.sort(
                  (a, b) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
                ),
              }
            : w
        ),
      }));
    },

    updateFolder: (workspaceId, folderId, data) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceId
            ? {
                ...w,
                folders: w.folders.map((f) =>
                  f.id === folderId
                    ? {
                        ...f,
                        ...data,
                      }
                    : f
                ),
              }
            : w
        ),
      }));
    },
    removeFolder: (workSpaceId, folderId) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workSpaceId
            ? {
                ...w,
                folders: w.folders.filter((f) => f.id !== folderId),
              }
            : w
        ),
      }));
    },

    // files

    setFiles: (workspaceId, folderId, newfiles) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workspaceId
            ? {
                ...w,
                folders: w.folders.map((f) =>
                  f.id === folderId
                    ? {
                        ...f,
                        files: newfiles.sort(
                          (a, b) =>
                            new Date(a.createdAt).getTime() -
                            new Date(b.createdAt).getTime()
                        ),
                      }
                    : f
                ),
              }
            : w
        ),
      }));
    },

    addFile: (workSpaceId, folderId, newFile) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workSpaceId
            ? {
                ...w,
                folders: w.folders.map((f) =>
                  f.id === folderId
                    ? {
                        ...f,
                        files: [...f.files, newFile].sort(
                          (a, b) =>
                            new Date(a.createdAt).getTime() -
                            new Date(b.createdAt).getTime()
                        ),
                      }
                    : f
                ),
              }
            : w
        ),
      }));
    },
    updateFile: (workSpaceId, folderId, fileid, values) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workSpaceId
            ? {
                ...w,
                folders: w.folders.map((f) =>
                  f.id === folderId
                    ? {
                        ...f,
                        files: f.files.map((fil) =>
                          fil.id === fileid
                            ? {
                                ...fil,
                                ...values,
                              }
                            : fil
                        ),
                      }
                    : f
                ),
              }
            : w
        ),
      }));
    },

    removeFile: (workSpaceId, folderId, fileid) => {
      set((state) => ({
        workspaces: state.workspaces.map((w) =>
          w.id === workSpaceId
            ? {
                ...w,
                folders: w.folders.map((f) =>
                  f.id == folderId
                    ? {
                        ...f,
                        files: f.files.filter((files) => files.id !== fileid),
                      }
                    : f
                ),
              }
            : w
        ),
      }));
    },
  }))
);
