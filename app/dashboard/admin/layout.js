import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="my-10 w-full max-w-screen-xl h-fit min-h-fit flex justify-self-center flex-col">
      <nav>
        <Link className="btn mr-2" href={"/dashboard/admin"}>
          Admin Dashboard
        </Link>
        <Link className="outline-btn" href={"/register"}>
          New Student
        </Link>
      </nav>
      <br />
      {children}
    </div>
  );
}
