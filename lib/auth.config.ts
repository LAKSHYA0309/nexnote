import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
  
export default { 
    providers: [
      Google({
        id: "google",
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        allowDangerousEmailAccountLinking: true,
      }),
      Credentials({
        id: "credentials",
        name: "Guest",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if (credentials?.email === "guest@nexnote.com") {
            return {
              id: "guest-user-id",
              name: "Guest User",
              email: "guest@nexnote.com",
              image: null,
            };
          }
          return null;
        }
      })
    ]
 } satisfies NextAuthConfig