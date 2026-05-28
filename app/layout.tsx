import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexNote – Supreme Note-Taking Platform",
  description:
    "NexNote is a powerful, Notion-inspired note-taking platform. Write, organize, and collaborate with rich text, AI assistance, and real-time collaboration.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased` } 
        suppressHydrationWarning
      > 
      <Provider 
      defaultTheme="dark"
      attribute="class" 
      enableSystem 
      disableTransitionOnChange
      >
        {children}
      </Provider>
      </body>
    </html>
  );
}
