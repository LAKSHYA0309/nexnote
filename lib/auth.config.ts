import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
 
export default { 
    providers: [Google({
      id: "google",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
      allowDangerousEmailAccountLinking: true,
    })]
 } satisfies NextAuthConfig