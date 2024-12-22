import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/app/images/logo.png";

function Nav() {
  const { data, status } = useSession();
  // console.log("data -> ", data, " Status -> ", status);

  return (
    <div className="flex justify-center items-center">
      <nav className="text-black max-w-screen-2xl nav flex justify-between items-center w-full  2xl:px-0 px-5">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="nouh tours logo"
            className="h-auto w-full lg:h-14"
          />
        </Link>

        <div className="flex space-x-10 items-center ">
          <div className="lg:flex space-x-10 items-center hidden ">
            <Link href={"/"}>Home</Link>
            <Link href={"#service"}>Our Services</Link>
            <Link href={"/"}>Our Process</Link>
            <Link href={"/"}>Contact</Link>
          </div>
          {status === "authenticated" ? (
            <div className="flex gap-3 md:gap-12">
              <Link
                href={`/dashboard/${
                  data?.user?.role === "admin" ? "admin" : "user"
                }`}
              >
                Dashboard
              </Link>
              <a onClick={() => signOut({ callbackUrl: "/login" })}>Logout</a>
            </div>
          ) : (
            <Link className="btn" href={"/login"}>
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
