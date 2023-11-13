import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { createHash } from 'crypto';

const generateSecret = () => {
  return createHash('sha256').update(Math.random().toString()).digest('hex');
};

export default NextAuth({
  secret: generateSecret(),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",


      authorize(credentials, req) {
        console.log(credentials.username, credentials.password);
        if (
          credentials.username === "admin" &&
          credentials.password === "ledtrap"
        ) {
          console.log("tamo aca");
          return { id: "1", name: "Admin" };
        } else {
          return null;
        }
      },
    }),
  ],
});
