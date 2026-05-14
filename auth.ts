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
    async signIn({ account }) {
      // console.log("🔐 signIn callback triggered", { provider: account?.provider });
      if (account?.provider !== "credentials") {
        return true;
      }
      return false;
    },

    async jwt({ token, trigger, user, session }) {
      // Detect if we're running in Edge Runtime
      const isEdgeRuntime =
        typeof process === "undefined" || process.env.NEXT_RUNTIME === "edge";

      // ✅ Only run Prisma queries outside of Edge Runtime (not in middleware)
      if (token?.email && !isEdgeRuntime) {
        const emailToQuery = user?.email || token.email;
        // console.log("📧 Email to query:", emailToQuery);

        try {
          // console.log("🔍 Fetching user from database...");
          const dbUser = await prisma.user.findUnique({
            where: { email: emailToQuery as string },
          });


          if (dbUser) {
            token.id = dbUser.id;
            token.name = dbUser.name;
            token.email = dbUser.email;
            // console.log("✅ Token updated with library roles:", token.libraryRoles);
          }
        } catch (error) {
          console.error("❌ Error fetching user data:", error);
          // Keep existing token data if database query fails
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
          id: token.id,
          name: token.name,
          email: token.email
        },
      };
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});