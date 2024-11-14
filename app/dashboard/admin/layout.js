import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <>
      <nav>
        <Link href={"/dashboard/admin"}>Admin Dashboard</Link>
        <Link href={"/dashboard/admin/application/create"}>
          Create Application
        </Link>
      </nav>
      {children}
    </>
  );
}
