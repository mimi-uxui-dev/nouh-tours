import NextAuth from "next-auth";
import { authOptions } from "@/utils/authOptions";

const handler = NextAuth.default(authOptions);

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
