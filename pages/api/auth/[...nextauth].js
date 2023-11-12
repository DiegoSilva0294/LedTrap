import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
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
