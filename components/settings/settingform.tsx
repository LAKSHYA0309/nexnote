"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  addCollaborator,
  updateWorkSpace as updateworkspace,
  removeCollaborator,
  deleteWorksapce,
  getcollaborator,
} from "@/lib/queries/db.queries";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import Collaboratorssearch from "../global/collaboratorssearch";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "../ui/alert-dialog";
import {
  Briefcase,
  Lock,
  Share,
  Plus,
  CreditCard,
  ExternalLink,
  UserIcon,
} from "lucide-react";
import { Subscription, User, Workspace } from "@prisma/client";
import { useAppSotre } from "@/lib/store/state.provider";
import { getUserSubscriptionStatus } from "@/lib/queries/db.queries";
import { toast } from "sonner";

const Settingform = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openAlertMessage, setOpenAlertMessage] = useState<boolean>(false);
  const titleTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const [permissions, setpermissions] = useState<string>("private");
  const [loadingPortal, setloadingPortal] = useState<boolean>(false);
  const [collaborators, setcollaborators] = useState<User[] | []>([]);
  const [workspaceDetails, setworkspaceDetails] = useState<Workspace>();
  const { workSpaceId, workspaces, updateWorkspace } = useAppSotre();
  const [subscription, setSubscription] = useState<Subscription | null>();
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!workspaces) return;
    const currentspacedetails = workspaces.find((w) => w.id === workSpaceId);
    if (currentspacedetails) {
      setworkspaceDetails(currentspacedetails);
    }
  }, [workSpaceId, workspaces]);

  useEffect(() => {
    return () => {
      if (titleTimerRef.current) clearTimeout(titleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!workSpaceId) return;
    const getworkspaceCollaborator = async () => {
      const { data, error } = await getcollaborator(workSpaceId);
      if (error) {
        return;
      }

      if (data && data?.length > 0) {
        setpermissions("shared");
        setcollaborators(data);
      }
    };

    getworkspaceCollaborator();
  }, [workSpaceId]);

  const workspaceNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!workSpaceId || !e.target.value) return;
    updateWorkspace(workSpaceId, { title: e.target.value });
    if (titleTimerRef.current) clearTimeout(titleTimerRef.current);
    setTimeout(async () => {
      await updateworkspace({ title: e.target.value }, workSpaceId);
    }, 500);
  };

  useEffect(() => {
    const getuseSubscription = async () => {
      const { data: subscriptiondata, error } = await getUserSubscriptionStatus(
        data?.user.name
      );

      if (error) {
        return;
      }
      if (subscriptiondata) {
        setSubscription(subscriptiondata);
      }
    };
    getuseSubscription();
  }, [data?.user?.name]);

  const addNewCollaborator = async (user: User) => {
    if (!workSpaceId) return;
    if (subscription?.status !== "active" && collaborators.length >= 2) {
      setOpen(true);
      return;
    }
    await addCollaborator([user], workSpaceId);
    setcollaborators((prev) => [...prev, user]);
  };

  const handleRemoveCollaborator = async (user: User) => {
    if (!workSpaceId) return;
    if (collaborators.length === 1) {
      setpermissions("private");
    }
    try {
      const remvoedCollaborator = await removeCollaborator([user], workSpaceId);

      if (remvoedCollaborator) {
        setcollaborators((prev) => prev.filter((i) => i.id !== user.id));
      }
      toast.success("collaborator is removed ", { duration: 3000 });
    } catch (error) {
      toast.error("something went wrong while removing the collaborator");
    }
  };
  const onClickAlertConfirm = async () => {
    if (!workSpaceId) return;
    if (collaborators.length > 0) {
      await removeCollaborator(collaborators, workSpaceId);
    }
    setpermissions("private");
    setOpenAlertMessage(false);
  };
  const onPermissionsChange = (val: string) => {
    if (val === "private") {
      setOpenAlertMessage(true);
    } else setpermissions(val);
  };
  return (
    <div className="flex gap-4 flex-col">
      <p className="flex items-center gap-2 mt-6">
        <Briefcase size={20} />
        Workspace
      </p>
      <Separator />
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="workspaceName"
          className="text-sm text-muted-foreground"
        >
          Name
        </Label>
        <Input
          name="workspaceName"
          value={workspaceDetails ? workspaceDetails.title : ""}
          placeholder="Workspace Name"
          onChange={workspaceNameChange}
        />
        {subscription?.status !== "active" && (
          <small className="text-muted-foreground">
            To customize your workspace, you need to be on a Pro Plan
          </small>
        )}
      </div>
      <>
        <Label htmlFor="permissions">Permissions</Label>
        <Select onValueChange={onPermissionsChange} value={permissions}>
          <SelectTrigger className="w-full h-26 -mt-3">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="private">
                <div
                  className="p-2
                  flex
                  gap-4
                  justify-center
                  items-center
                "
                >
                  <Lock />
                  <article className="text-left flex flex-col">
                    <span>Private</span>
                    <p>
                      Your workspace is private to you. You can choose to share
                      it later.
                    </p>
                  </article>
                </div>
              </SelectItem>
              <SelectItem value="shared">
                <div className="p-2 flex gap-4 justify-center items-center">
                  <Share></Share>
                  <article className="text-left flex flex-col">
                    <span>Shared</span>
                    <span>You can invite collaborators.</span>
                  </article>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {permissions === "shared" && (
          <div>
            <Collaboratorssearch
              existingCollaborators={collaborators}
              getCollaborator={(user) => {
                addNewCollaborator(user);
              }}
            >
              <Button type="button" className="text-sm mt-4">
                <Plus />
                Add Collaborators
              </Button>
            </Collaboratorssearch>
            <div className="mt-4">
              <span className="text-sm text-muted-foreground">
                Collaborators {collaborators?.length || ""}
              </span>
              <ScrollArea
                className="
            h-[120px]
            overflow-y-scroll
            w-full
            rounded-md
            border
            border-muted-foreground/20"
              >
                {collaborators?.length ? (
                  collaborators.map((c) => (
                    <div
                      className="p-4 flex
                      justify-between
                      items-center
                "
                      key={c.id}
                    >
                      <div className="flex gap-4 items-center">
                        <Avatar>
                          <AvatarImage src={c?.image ?? " "} />
                          <AvatarFallback>{c.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div
                          className="text-sm 
                          gap-2
                          text-muted-foreground
                          overflow-hidden
                          overflow-ellipsis
                          sm:w-[300px]
                          w-[140px]
                        "
                        >
                          {c.email}
                        </div>
                      </div>
                      <Button
                        variant="secondary"
                        onClick={() => handleRemoveCollaborator(c)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))
                ) : (
                  <div
                    className="absolute
                  right-0 left-0
                  top-0
                  bottom-0
                  flex
                  justify-center
                  items-center
                "
                  >
                    <span className="text-muted-foreground text-sm">
                      You have no collaborators
                    </span>
                  </div>
                )}
              </ScrollArea>
            </div>
          </div>
        )}
        <Alert variant={"destructive"}>
          <AlertTitle>
            Warning! deleting you workspace will permanantly delete all data
            related to this workspace.
          </AlertTitle>
          <AlertDescription>
            <Button
              type="submit"
              variant={"destructive"}
              className="mt-4 
            text-sm
            bg-destructive/40 
            border-2 
            border-destructive"
              onClick={async () => {
                if (!workSpaceId) return;
                await deleteWorksapce(workSpaceId);
                toast.success("workspace deleted successfully");
                router.replace("/dashboard");
              }}
            >
              Delete Workspace
            </Button>
          </AlertDescription>
        </Alert>
        <p className="flex items-center gap-2 mt-6">
          <UserIcon size={20} /> Profile
        </p>
        <Separator />
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={data?.user.image} />
            <AvatarFallback>{data?.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ml-6">
            <small className="text-muted-foreground cursor-not-allowed">
              {data?.user ? data?.user.email : ""}
            </small>
          </div>
        </div>
        {/* <LogoutButton>
          <div className="flex items-center">
            <LogOut />
          </div>
        </LogoutButton> */}
        <p className="flex items-center gap-2 mt-6">
          <CreditCard size={20} /> Billing & Plan
        </p>
        <Separator />
        <p className="text-muted-foreground">
          You are currently on a{" "}
          {subscription?.status === "active" ? "Pro" : "Free"} Plan
        </p>
        <Link
          href="/"
          target="_blank"
          className="text-muted-foreground flex flex-row items-center gap-2"
        >
          View Plans <ExternalLink size={16} />
        </Link>
        {subscription?.status === "active" ? (
          <div>
            <Button
              type="button"
              size="sm"
              variant={"secondary"}
              disabled={loadingPortal}
              className="text-sm"
              // onClick={redirectToCustomerPortal}
            >
              Manage Subscription
            </Button>
          </div>
        ) : (
          <div>
            <Button
              type="button"
              size="sm"
              variant={"secondary"}
              className="text-sm"
              onClick={() => setOpen(true)}
            >
              Start Plan
            </Button>
          </div>
        )}
      </>
      <AlertDialog open={openAlertMessage}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Changing a Shared workspace to a Private workspace will remove all
              collaborators permanantly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlertMessage(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={onClickAlertConfirm}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Settingform;
