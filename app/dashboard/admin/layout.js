import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-red-200 w-full max-w-screen-xl h-full  flex justify-self-center">
      <nav className="">
        <Link className="btn mr-2" href={"/dashboard/admin"}>
          Admin Dashboard
        </Link>
        <Link className="btn" href={"/register"}>
          New Student
        </Link>
      </nav>
      {/* {children} */}
    </div>
  );
}
