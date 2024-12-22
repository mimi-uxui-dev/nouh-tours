import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="mb-10 mt-48 w-full max-w-screen-xl h-fit min-h-fit flex justify-self-center flex-col">
      <nav className="px-4 lg:px-0">
        {/* <Link className="btn mr-2" href={"/dashboard/admin"}>
          Admin Dashboard
        </Link> */}
        <Link className="outline-btn" href={"/register"}>
          New Student
        </Link>
      </nav>

      {children}
    </div>
  );
}
