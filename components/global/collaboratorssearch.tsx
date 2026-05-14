"use client";
import React, { ReactHTMLElement, useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetContent,
} from "../ui/sheet";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { User } from "@prisma/client";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { getAllUsersFromSeacrh } from "@/lib/queries/db.queries";

type props = {
  children: React.ReactNode;
  existingCollaborators: User[] | [];
  getCollaborator: (user: User) => void;
};
const Collaboratorssearch = ({
  children,
  existingCollaborators,
  getCollaborator,
}: props) => {
  const [searchResults, setSearchresults] = useState<User[]>([]);
  const { data } = useSession();
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const addCollaborator = (user: User) => {
    getCollaborator(user);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(async () => {
      const users = await getAllUsersFromSeacrh(e.target.value);
      setSearchresults(users);
    }, 450);
  };
  return (
    <Sheet>
      <SheetTrigger className="w-full" asChild>{children}</SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Search Collaborator</SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            You can also remove collaborators after adding them from the
            settings tab.
          </SheetDescription>
        </SheetHeader>
        <div
          className="flex justify-center
          items-center
          gap-2
          mt-2
        "
        >
          <Search />
          <Input
            name="name"
            className="dark:bg-background"
            placeholder="Email"
            onChange={onChangeHandler}
          />
        </div>
        <ScrollArea
          className="mt-6
          overflow-y-scroll
          w-full
          rounded-md
        "
        >
          {searchResults
            .filter(
              (result) =>
                !existingCollaborators.some(
                  (existing) => existing.id === result.id
                )
            )
            .filter((result) => result.id !== data?.user?.id)
            .map((user) => (
              <div
                key={user.id}
                className=" p-4 flex justify-between items-center"
              >
                <div className="flex gap-4 items-center">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.image ?? " "} />
                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div
                    className="text-sm 
                  gap-2 
                  overflow-hidden 
                  overflow-ellipsis 
                  w-[180px] 
                  text-muted-foreground
                  "
                  >
                    {user.email}
                  </div>
                </div>
                <Button
                  variant="secondary"
                  onClick={() => addCollaborator(user)}
                >
                  Add
                </Button>
              </div>
            ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default Collaboratorssearch;
