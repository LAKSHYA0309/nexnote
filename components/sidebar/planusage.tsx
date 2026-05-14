"use client";
import { Subscription } from "@prisma/client";
import React, { useEffect, useState } from "react";
import CypressDiamondIcon from "@/public/icons/diamond.svg";
import { useAppSotre } from "@/lib/store/state.provider";
import { Progress } from "../ui/progress";
import { MAX_FOLDERS_FREE_PLAN } from "@/lib/constants";
import Image from "next/image";

type props = {
  foldersLength: number;
  subscription: Subscription | null;
  workSpaceid: string;
};

const Planusage = ({ foldersLength, subscription, workSpaceid }: props) => {
  const { workspaces } = useAppSotre();
  const [usagePercentage, setUsagePercentage] = useState(
    (foldersLength / MAX_FOLDERS_FREE_PLAN) * 100
  );

  useEffect(() => {
    const workspaceFoldersLength = workspaces.find((w) => w.id === workSpaceid)
      ?.folders.length;
    if (workspaceFoldersLength === 0) return;
    if (workspaceFoldersLength) {
      setUsagePercentage(
        (workspaceFoldersLength / MAX_FOLDERS_FREE_PLAN) * 100
      );
    }
  }, [workSpaceid, workspaces]);
  return (
    <article className="mb-4">
      {subscription?.status !== "active" && (
        <div
          className="flex 
          gap-2
          text-muted-foreground
          mb-2
          items-center
        "
        >
          <div className="h-4 w-4">
            <Image src={CypressDiamondIcon} alt="icon"/>
          </div>
          <div
            className="flex 
        justify-between 
        w-full 
        items-center
        "
          >
            <div>Free Plan</div>
            <small>{usagePercentage.toFixed(0)}% / 100%</small>
          </div>
        </div>
      )}
      {subscription?.status !== "active" && (
        <Progress value={usagePercentage} className="h-1" />
      )}
    </article>
  );
};

export default Planusage;
