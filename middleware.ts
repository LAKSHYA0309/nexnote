import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default async function middleware(req: NextRequest) {
  const session = await auth();

  const path = req.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/";
  const isProtectedPath = path.startsWith("/dashboard");

  if (session?.user?.email && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (!session?.user?.email && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};