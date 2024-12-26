import dbConnect from "./dbConnect";
import User from "@/models/user";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider.default({
      async authorize(credentials, req) {
        await dbConnect();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid email or password");
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          throw new Error("Invalid password");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const userByEmail = await User.findOne({ email: token.email });
      userByEmail.password = undefined;
      token.user = userByEmail;
      return token;
    },
    session: async ({ session, token }) => {
      const userByEmail = await User.findOne({ email: token.email });
      userByEmail.password = undefined;
      session.user = userByEmail;
      return session;
    },
  },
  secret: process.env.SECRET,
  pages: {
    signIn: "/login",
  },
};
