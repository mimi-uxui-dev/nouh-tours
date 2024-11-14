import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Nav() {
  const { data, status } = useSession();
  // console.log("data -> ", data, " Status -> ", status);

  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>Services</Link>

      {status === "authenticated" ? (
        <>
          <Link
            href={`/dashboard/${
              data?.user?.role === "admin" ? "admin" : "user"
            }`}
          >
            Dashboard {data?.user?.name} ({data?.user?.role})
          </Link>
          <a onClick={() => signOut({ callbackUrl: "/login" })}>Logout</a>
        </>
      ) : (
        <>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </>
      )}
    </nav>
  );
}

export default Nav;
