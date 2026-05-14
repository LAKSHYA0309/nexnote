"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";  
import {SessionProvider} from "next-auth/react"
import { Toaster } from "@/components/ui/sonner";

export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

  return (
    <NextThemesProvider {...props}>
      <SessionProvider>
          {children}
        <Toaster />
      </SessionProvider>
    </NextThemesProvider>
  );
}