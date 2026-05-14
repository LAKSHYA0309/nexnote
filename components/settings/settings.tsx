import React from "react";
import Settingform from "./settingform";
import CustomDialogTrigger from "../global/customdialogtrigger";

type props= {
  children: React.ReactNode;
}

const Settings = ({ children }:props) => {
  return (
    <CustomDialogTrigger header="Settings" content={<Settingform />}>
      {children}
    </CustomDialogTrigger>
  );
};

export default Settings;
