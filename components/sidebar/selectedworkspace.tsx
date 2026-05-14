import { Workspace } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/cypresslogo.svg";
import React from "react";

type prop = {
  workspace: Workspace;
  onClick?: (option: Workspace) => void;
};

const SelectedWorkspace = ({ workspace, onClick }: prop) => {
  return (
    <Link
      href={`/dashboard/${workspace.id}`}
      onClick={() => {
        if (onClick) onClick(workspace);
      }}
      className="flex 
      rounded-md 
      hover:bg-muted 
      transition-all 
      flex-row 
      p-2 
      gap-4 
      justify-center 
      cursor-pointer 
      items-center 
      my-2"
    >
      <Image
        src={workspace.logo ?? Logo}
        alt="workspace logo"
        width={26}
        height={26}
        objectFit="cover"
      />
      <div className="flex flex-col">
        <p
          className="text-lg 
        w-[170px] 
        overflow-hidden 
        overflow-ellipsis 
        whitespace-nowrap"
        >
          {workspace.title}
        </p>
      </div>
    </Link>
  );
};

export default React.memo(SelectedWorkspace);
