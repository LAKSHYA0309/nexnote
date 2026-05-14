import React, { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "../ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Lock, Plus, Share } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Prisma, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { createWorkSpace, addCollaborator } from "@/lib/queries/db.queries";
import { toast } from "sonner";
import { useAppSotre } from "@/lib/store/state.provider";
import Collaboratorssearch from "../global/collaboratorssearch";
import { useRouter } from "next/navigation";

const Workspacecreator = () => {
  const [title, setTitle] = useState("");
  const [permissions, setPermissions] = useState("private");
  const { addWorkspace } = useAppSotre();
  const [collaborators, setCollaborators] = useState<User[] | []>([
    {
      id: "u1",
      name: "Alice Johnson",
      email: "alice@example.com",
      emailVerified: new Date(),
      image: null,
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      billingAddress: { street: "123 Main St", city: "New York" },
      paymentMethod: { type: "card", last4: "4242" },
      updatedAt: new Date(),
    },
    {
      id: "u2",
      name: "Bob Smith",
      email: "bob@example.com",
      emailVerified: null,
      image: null,
      avatarUrl: "https://i.pravatar.cc/150?img=2",
      billingAddress: {
        street: "456 Oak Ave",
        city: "Chicago",
      } as Prisma.JsonObject,
      paymentMethod: {
        type: "paypal",
        account: "bob.paypal@example.com",
      } as Prisma.JsonObject,
      updatedAt: new Date(),
    },
    {
      id: "u3",
      name: "Charlie Brown",
      email: "charlie@example.com",
      emailVerified: null,
      image: null,
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      billingAddress: null,
      paymentMethod: null,
      updatedAt: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data } = useSession(); 
  const router= useRouter()

  const addCollaborators = (collaborator: User) => {
    setCollaborators([...collaborators, collaborator]);
  };
  const removeCollaborator = (userid: string) => {
    setCollaborators((prev) => prev.filter((c) => c.id !== userid));
  };

  const createItem = async () => {
    setIsLoading(true);
    if (data?.user.id) {
      const newWorkspaces = {
        iconId: "💼",
        title,
        workspaceOwner: data?.user.id as string,
      };
      const workspace = await createWorkSpace(newWorkspaces);
      if (permissions === "shared") {
        if (workspace) {
          await addCollaborator(collaborators, workspace.id);
          addWorkspace({ ...workspace, folders: [] });
        }
      }
      toast.success("Created the workspace"); 
      router.refresh();
      setIsLoading(false);
    }
  };
  return (
    <div className="flex gap-4 flex-col">
      <div>
        <Label htmlFor="name" className="text-sm text-muted-foreground">
          Name
        </Label>
        <div
          className="flex 
        justify-center 
        items-center 
        gap-2
        "
        >
          <Input
            name="name"
            value={title}
            placeholder="Workspace Name"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </div>
      <>
        <Label
          htmlFor="permissions"
          className="text-sm
          text-muted-foreground"
        >
          Permission
        </Label>
        <Select
          onValueChange={(val) => {
            setPermissions(val);
          }}
          defaultValue={permissions}
        >
          <SelectTrigger className="w-full  h-[50px] -mt-3">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="private">
                <div
                  className="p-4
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
      </>
      {permissions === "shared" && (
        <div>
          <Collaboratorssearch
            existingCollaborators={collaborators}
            getCollaborator={(user) => {
              addCollaborators(user);
            }}
          >
            <Button asChild type="button" className="text-sm mt-4">
              <div className="flex items-center gap-2">
                <Plus />
                <span>Add Collaborators</span>
              </div>
            </Button>
          </Collaboratorssearch>
          <div className="mt-4">
            <span className="text-sm text-muted-foreground">
              Collaborators {collaborators.length || ""}
            </span>
            <ScrollArea
              className="
            h-[120px]
            overflow-y-auto
            w-full
            rounded-md
            border
            border-muted-foreground/20"
            >
              {collaborators.length ? (
                collaborators.map((c) => (
                  <div
                    className="space-y-3 flex
                      
                      items-center
                "
                    key={c.id}
                  >
                    <div className="flex gap-2 items-center">
                      <Avatar>
                        <AvatarImage src={c.image as string} />
                        <AvatarFallback>
                          {data?.user.name.charAt(0)}
                        </AvatarFallback>
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
                      onClick={() => removeCollaborator(c?.id as string)}
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
      <Button
        type="button"
        disabled={
          !title ||
          (permissions === "shared" && collaborators.length === 0) ||
          isLoading
        }
        variant={"secondary"}
        onClick={createItem}
      >
        Create
      </Button>
    </div>
  );
};

export default Workspacecreator;
