import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export default async function middleware(req: NextRequest) {
  const session = await auth();

 const path = req.nextUrl.pathname;

  const publicPaths = ["/login", "/"];
  if (session?.user?.email && publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  const protectedPaths = ["/dashboard"];
  if (!session?.user?.email && protectedPaths.includes(path)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  return NextResponse.next()
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};