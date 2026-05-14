import React from "react";
import CustomDialogTrigger from "../global/customdialogtrigger";
import Banneruploadform from "./banneruploadform";

type props = {
  children: React.ReactNode;
  className?: string;
  dirType: "workspace" | "file" | "folder";
  id: string;
};

const BannerUpload = ({ children, className, dirType, id }: props) => {
  return (
    <CustomDialogTrigger
      header="Upload Banner"
      content={<Banneruploadform dirType={dirType} id={id} />}
      className={className}
    >
      {children}
    </CustomDialogTrigger>
  );
};

export default BannerUpload;
