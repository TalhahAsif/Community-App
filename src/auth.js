import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import connectDB from "./lib/db/connectDB";
import { UserModel } from "./lib/models/Users.js";

const handlelogin = async (profile) => {
  await connectDB();
  const user = await UserModel.findOne({ email: profile.email });

  console.log("user==>", user);
  if (user) return user;
  let newUser = new UserModel({
    profileImg: profile.picture,
    fullname: profile.name,
    email: profile.email,
  });
  newUser = await newUser.save();
  return newUser;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      const loginUser = await handlelogin(profile);
      return true;
    },

    async jwt({ token, user, profile }) {
      token.role = "user";
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});
