import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
// export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/user/:path*",
    "/dashboard/admin/:path*",
    "/api/user/:path*",
    "/api/admin/:path*",
    // "/api/users",
  ],
};

// Role based authorization

export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl.pathname;
    const userRole = req?.nextauth?.token?.user?.role;

    // if (url?.includes("/api")) {
    //   NextResponse.next().headers.append(
    //     "ACCESS-CONTROL-ALLOW-ORIGIN",
    //     "https://nouhtours.com"
    //   );
    // }

    if (url?.includes("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }
      },
    },
  }
);
