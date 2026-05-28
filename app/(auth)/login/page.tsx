import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link"; 
import Logo from "@/public/nexnotelogo.svg"
import { signIn ,auth,signOut} from "@/auth";
import Image from "next/image";
import { LogOut } from "lucide-react";

const LoginPage = async() => { 
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-zinc-950 to-black relative flex items-center justify-center">
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-600/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none animate-pulse duration-[10000ms]" />
      
      {/* Decorative Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center p-4 w-full">
        <Card className="w-full max-w-md backdrop-blur-2xl bg-black/40 border border-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.7)] hover:border-white/[0.12] transition-all duration-700 rounded-3xl p-2">
          <CardHeader className="text-center space-y-4 pb-8 pt-6">
            {/* Elegant Company Logo/Icon */}
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(79,70,229,0.3)] hover:scale-105 transition-transform duration-300">
              <Image src={Logo} alt="logo" width={32} height={32}/>
            </div>

            {/* Rebranded Company Name */}
            <div className="space-y-1">
              <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent tracking-tight">
                <Link href={"/"} className="hover:opacity-90 transition-opacity">NexNote</Link>
              </CardTitle>
              <CardDescription className="text-neutral-400 text-sm tracking-wide">
                Welcome back to your ultimate workspace
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Google Login Button */}
            <form
              action={async () => {
                "use server";
                await signIn('google');
              }}
            >
              <Button
                className="w-full h-12 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] transition-all duration-300 rounded-2xl active:scale-[0.98] font-semibold text-[15px]"
                type="submit"
              >
                <div className="flex items-center justify-center space-x-3">
                  {/* Google Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </div>
              </Button>
            </form>

            {/* Premium Guest Login Button */}
            <form
              action={async () => {
                "use server";
                await signIn('credentials', { email: 'guest@nexnote.com', password: 'guest', redirectTo: '/dashboard' });
              }}
            >
              <Button
                className="w-full h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white border-0 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(79,70,229,0.35)] transition-all duration-300 rounded-2xl active:scale-[0.98] font-semibold text-[15px]"
                type="submit"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span>Log in as Guest</span>
                </div>
              </Button>
            </form>

            {/* Elegant Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/[0.08]" />
              </div>
              <div className="relative flex justify-center text-[11px] uppercase tracking-widest font-semibold">
                <span className="bg-transparent px-3 text-neutral-500">
                  Secure Authentication
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Bottom Copyright */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <p className="text-center text-neutral-600 text-xs tracking-wider">
          © 2025 NexNote. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;