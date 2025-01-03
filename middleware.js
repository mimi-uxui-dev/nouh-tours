import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/dashboard/user/:path*",
    "/dashboard/admin/:path*",
    "/api/user/:path*",
    "/api/admin/:path*",
    "/api/users",
  ],
};

// Role based authorization

export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl.pathname;
    const userRole = req?.nextauth?.token?.user?.role;

    if (url?.includes("/api")) {
      const response = NextResponse.next();

      response.headers.set(
        "Access-Control-Allow-Origin",
        "https://www.nouhtours.com"
      );
      response.headers.set("Access-Control-Allow-Credentials", "true");
      response.headers.set(
        "Access-Control-Allow-Methods",
        "GET, DELETE, PATCH, POST, PUT"
      );
      response.headers.set(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
      );

      // Handle preflight requests
      if (req.method === "OPTIONS") {
        return new Response(null, {
          headers: {
            "Access-Control-Allow-Origin": "https://www.nouhtours.com",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, DELETE, PATCH, POST, PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          status: 204,
        });
      }

      return response;
    }

    if (url?.includes("/admin") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }
        return true;
      },
    },
  }
);
