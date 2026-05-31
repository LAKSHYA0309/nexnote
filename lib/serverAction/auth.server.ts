"use server";

import { signIn } from "@/auth";

export async function loginWithGoogle() {
  await signIn("google");
}

export async function loginAsGuest() {
  await signIn("credentials", {
    email: "guest@nexnote.com",
    password: "guest",
    redirectTo: "/dashboard",
  });
}
