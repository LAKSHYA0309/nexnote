"use client";
import { useAppSotre } from "@/lib/store/state.provider";
import { Workspace } from "@prisma/client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import SelectedWorkspace from "./selectedworkspace";
import CustomDialogTrigger from "../global/customdialogtrigger";
import Workspacecreator from "./workspacecreator";

type prop = {
  sharedWorkspace: Workspace[] | [];
  collaboratorWorkspace: Workspace[] | [];
  personalWorkspace: Workspace[] | [];
  defaultWorkSpace: Workspace | undefined;
};

const Workspacedropdown = ({
  sharedWorkspace,
  collaboratorWorkspace,
  personalWorkspace,
  defaultWorkSpace,
}: prop) => {
  const { setWorkspaces } = useAppSotre();
  const [selectedWorksapce, setSeletectedWorkspace] =
    useState(defaultWorkSpace);
  const [open, setOpen] = useState(false);

  const allWorkspaces = useMemo(() => {
    return [
      ...sharedWorkspace,
      ...collaboratorWorkspace,
      ...personalWorkspace,
    ].map((workspace) => ({ ...workspace, folders: [] }));
  }, [sharedWorkspace, collaboratorWorkspace, personalWorkspace]);

  useEffect(() => {
    if (allWorkspaces.length > 0) {
      setWorkspaces(allWorkspaces);
    }
  }, [allWorkspaces]);

  const handleSelectedWorkspace = useCallback((option: Workspace) => {
    setSeletectedWorkspace(option);
    setOpen(false);
  }, []);

  return (
    <div
      className=" relative inline-block 
      text-left
  "
    >
      <div className="">
        <span onClick={() => setOpen((prev) => !prev)}>
          {selectedWorksapce ? (
            <SelectedWorkspace workspace={selectedWorksapce} />
          ) : (
            "Select a workspace"
          )}
        </span>
      </div>
      {open && (
        <div
          className="origin-top-right
          absolute
          w-full
          rounded-md
          shadow-md
          z-50
          h-[190px]
          backdrop-blur-lg
          group
          overflow-y-auto
          border-[1px]
          border-muted
      "
        >
          <div className="rounded-md flex flex-col">
            <div className="!p-2">
              {!!personalWorkspace.length && (
                <>
                  <p className="text-muted-foreground">Private</p>
                  <hr></hr>
                  {personalWorkspace.map((option) => (
                    <SelectedWorkspace
                      key={option.id}
                      workspace={option}
                      onClick={handleSelectedWorkspace}
                    />
                  ))}
                </>
              )}
              {!!sharedWorkspace.length && (
                <>
                  <p className="text-muted-foreground">Shared</p>
                  <hr />
                  {sharedWorkspace.map((option) => (
                    <SelectedWorkspace
                      key={option.id}
                      workspace={option}
                      onClick={handleSelectedWorkspace}
                    />
                  ))}
                </>
              )}
              {!!collaboratorWorkspace.length && (
                <>
                  <p className="text-muted-foreground">Collaborating</p>
                  <hr />
                  {collaboratorWorkspace.map((option) => (
                    <SelectedWorkspace
                      key={option.id}
                      workspace={option}
                      onClick={handleSelectedWorkspace}
                    />
                  ))}
                </>
              )}
            </div>
            <CustomDialogTrigger
              header="Create A Workspace"
              content={<Workspacecreator />}
              description="Workspaces give you the power to collaborate with others. You can change your workspace privacy settings after creating the workspace too."
            >
              <div
                className="flex 
              transition-all 
              hover:bg-muted 
              justify-center 
              items-center 
              gap-2 
              p-2 
              w-full"
              >
                <article
                  className="text-slate-500 
                rounded-full
                 bg-slate-800 
                 w-4 
                 h-4 
                 flex 
                 items-center 
                 justify-center"
                >
                  +
                </article>
                Create workspace
              </div>
            </CustomDialogTrigger>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workspacedropdown;
