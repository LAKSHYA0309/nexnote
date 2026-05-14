"use client";
import React, { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Session } from "next-auth";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import Loader from "../global/Loader";
import EmojiPicker from "../global/emojiPicker";
import { Subscription } from "@prisma/client";
import { CreateWorkspaceFormSchema } from "@/lib/types";
import { ImgFormats } from "@/lib/constants";
import z from "zod";
import { HandleUploadImg } from "@/lib/uploadImg";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { createWorkSpace } from "@/lib/queries/db.queries";
import { useRouter } from "next/navigation";
import { useAppSotre } from "@/lib/store/state.provider";
interface prop {
  subscription: Subscription | null;
}

const DashboardSetup = ({ subscription }: prop) => {
  const router = useRouter();
  const { addWorkspace } = useAppSotre();
  const [selectedEmoji, setSelectedEmoji] = useState("💼");
  const [isPending, startTransition] = useTransition();
  const { data } = useSession();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      logo: "",
      workspaceName: "",
    },
  });

  const onsubmit: SubmitHandler<
    z.infer<typeof CreateWorkspaceFormSchema>
  > = async (values) => {
    try {
      const workspaceName = values.workspaceName;
      const file = values.logo[0];
      let imgUrl = "";

      if (file) {
        console.log("i am inside the file section");
        try {
          const fileType = file.name.split(".");
          console.log(fileType, "type of  file");
          const type = ImgFormats.find(
            (i: string) => i == (fileType[1] as string)
          );
          if (!type) {
            setError("logo", {
              message: "Please upload Img at valid format",
            });
            return;
          }

          const { data, error } = await HandleUploadImg(
            file,
            "workspace-logos"
          );

          if (error) {
            toast.error(error, { duration: 3000 });
            return;
          }

          imgUrl = data as string;
        } catch (error: any) {
          toast.error(error.message, { duration: 3000 });
          return;
        }
      }

      const workSpaceDetail = {
        iconId: selectedEmoji,
        title: workspaceName,
        workspaceOwner: data?.user.id as string,
        ...(imgUrl && { logo: imgUrl }),
      };

      const Createdworkspace = await createWorkSpace(workSpaceDetail);
      if (Createdworkspace) {
        addWorkspace({ ...Createdworkspace, folders: [] });
        startTransition(() => {
          router.push(`/dashboard/${Createdworkspace.id}`);
        });
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Unexpected Error  Pls try again", { duration: 3000 });
    } finally {
      reset();
    }
  };
  return (
    <Card
      className="w-[800px]
      h-screen
      sm:h-auto
  "
    >
      <CardHeader>
        <CardTitle>Create A Workspace</CardTitle>
        <CardDescription>
          Lets create a private workspace to get you started.You can add
          collaborators later from the workspace settings tab.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col gap-4">
            <div
              className="flex
            items-center
            gap-4"
            >
              <div className="text-5xl">
                <EmojiPicker getvalues={(emoji) => setSelectedEmoji(emoji)}>
                  {selectedEmoji}
                </EmojiPicker>
              </div>
              <div className="w-full ">
                <Label
                  htmlFor="workspaceName"
                  className="text-sm text-muted-foreground"
                >
                  Name
                </Label>
                <Input
                  id="workspaceName"
                  type="text"
                  placeholder="Workspace Name"
                  disabled={isSubmitting || isPending}
                  {...register("workspaceName", {
                    required: "Workspace name is required",
                  })}
                />
                <small className="text-red-600">
                  {errors?.workspaceName?.message?.toString()}
                </small>
              </div>
            </div>
            <div>
              <Label
                htmlFor="logo"
                className="text-sm
                  text-muted-foreground
                "
              >
                Workspace Logo
              </Label>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                placeholder="Workspace Name"
                disabled={isSubmitting || isPending}
                {...register("logo", {
                  required: false,
                })}
              />
              <small className="text-red-600">
                {errors?.logo?.message?.toString()}
              </small>
              {subscription?.status !== "active" && (
                <small
                  className="
                  text-muted-foreground
                  block"
                >
                  To customize your workspace, you need to be on a Pro Plan
                </small>
              )}
            </div>
            <div className="self-end">
              <Button
                disabled={isSubmitting || isPending}
                type="submit"
                className="cursor-pointer"
              >
                {isSubmitting || isPending ? <Loader /> : "Create Workspace"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DashboardSetup;
