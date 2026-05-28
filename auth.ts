import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import  prisma from "./lib/prisma";
import authConfig from "./lib/auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ account, user }) {
      // console.log("🔐 signIn callback triggered", { provider: account?.provider });
      if (account?.provider === "credentials") {
        try {
          const email = user?.email || "guest@nexnote.com";
          const dbUser = await prisma.user.findUnique({
            where: { email },
          });
          if (!dbUser) {
            await prisma.user.create({
              data: {
                email,
                name: user?.name || "Guest User",
              },
            });
          }
        } catch (error) {
          console.error("Error creating guest user in signIn:", error);
        }
        return true;
      }
      return true;
    },

    async jwt({ token, trigger, user, session }) {
      if (user) {
        token.id = user.id;
      }

      // Detect if we're running in Edge Runtime
      const isEdgeRuntime =
        typeof process === "undefined" || process.env.NEXT_RUNTIME === "edge";

      const emailToQuery = user?.email || token?.email;

      // ✅ Only run Prisma queries outside of Edge Runtime (not in middleware)
      if (emailToQuery && !isEdgeRuntime) {
        try {
          // console.log("🔍 Fetching user from database...");
          const dbUser = await prisma.user.findUnique({
            where: { email: emailToQuery as string },
          });

          if (dbUser) {
            token.id = dbUser.id;
            token.name = dbUser.name;
            token.email = dbUser.email;
          }
        } catch (error) {
          console.error("❌ Error fetching user data:", error);
        }
      }

      return token;
    },

    async session({  token,session }) {
      // const isEdgeRuntime = typeof process === 'undefined' || process.env.NEXT_RUNTIME === 'edge';

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          name: token.name,
          email: token.email
        },
      };
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});