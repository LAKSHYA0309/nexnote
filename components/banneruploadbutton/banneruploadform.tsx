"use clinet";
import React from "react";
import { useForm } from "react-hook-form";
import {
  updateFolder as updatefolder,
  updateWorkSpace as updateworkspace,
  updateFiles,
} from "@/lib/queries/db.queries";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Loader from "../global/Loader";
import { ImgFormats } from "@/lib/constants";
import { useAppSotre } from "@/lib/store/state.provider";
import { HandleUploadImg } from "@/lib/uploadImg";
import { toast } from "sonner";
import { Rethink_Sans } from "next/font/google";

type props = {
  dirType: "workspace" | "file" | "folder";
  id: string;
};
const Banneruploadform = ({ dirType, id }: props) => {
  const {
    workSpaceId,
    folderId,
    updateFolder,
    updateFile,
    updateWorkspace,
    filesId,
  } = useAppSotre();
  const {
    handleSubmit,
    register,
    setError,
    formState: { isLoading, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      banner: FileList,
    },
  });

  const onSubmitHandler = async (data: any) => {
    const file = data.banner[0];
    if (!file) {
      setError("banner", { message: "Banner cant be empty" });
      return;
    }
    const fileType = file.name.split(".");
    console.log(fileType, "file");
    const type = ImgFormats.find((i) => i === fileType[1]);
    console.log(type, "type");
    if (!type) {
      setError("banner", { message: "Invalid format of banner img " });
      return;
    }

    let imgUrl = "";
    try {
      const { data: imgdataURL, error: imguploaderror } = await HandleUploadImg(
        file,
        "bannerurl"
      );

      if (imguploaderror) {
        toast.error("Error while uplloading the img ", { duration: 3000 });
        return;
      }
      imgUrl = imgdataURL as string;
    } catch (error: any) {
      toast.error(error.message, { duration: 3000 });
      return;
    }

    try {
      if (dirType === "workspace") {
        const { data, error } = await updateworkspace(
          { bannerUrl: imgUrl },
          id
        );
        if (error) {
          toast.error("something went wrong while saving the img ", {
            duration: 3000,
          });
          return;
        }

        toast.success("uploaed successfully ", { duration: 3000 });
        updateworkspace({ bannerUrl: imgUrl }, id);
        return;
      }

      if (dirType === "folder") {
        if (!workSpaceId) return;
        const { data, error } = await updatefolder({ bannerUrl: imgUrl }, id);
        if (error) {
          toast.error("something went wrong while saving the img ", {
            duration: 3000,
          });
          return;
        }
        toast.success("uploaed successfully ", { duration: 3000 });
        updateFolder(workSpaceId, id, { bannerUrl: imgUrl });
        return;
      }

      if (dirType === "file") {
        if (!workSpaceId || !folderId) return;
        const { data, error } = await updateFiles({ bannerUrl: imgUrl }, id);
        if (error) {
          toast.error("something went wrong while saving the img ", {
            duration: 3000,
          });
          return;
        }
        toast.success("uploaed successfully ", { duration: 3000 });
        updateFile(workSpaceId, folderId, id, { bannerUrl: imgUrl });
      }
    } catch (error) {
      toast.error("Internal server uncaughted error", { duration: 3000 });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col items-center justify-center gap-2  mt-5  "
    >
      <Label className="text-sm text-muted-foreground" htmlFor="bannerImage">
        Banner Image
      </Label>
      <Input
        id="banner"
        type="file"
        accept="image/*"
        disabled={isSubmitting}
        {...register("banner")}
      />
      <small className="text-red-600">{errors.banner?.message}</small>
      <Button disabled={isSubmitting} type="submit">
        {!isSubmitting ? "Upload Banner" : <Loader />}
      </Button>
    </form>
  );
};

export default Banneruploadform;
