"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const res = await fetch(`${process.env.API}/users`);
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <hr />
      <h1>Admin HOME Dashboard B</h1>
      {loading
        ? "Loading"
        : users?.map((user) => (
            <div key={user._id}>
              {user.fullName}{" "}
              <Link href={`/dashboard/admin/createApplication/${user._id}`}>
                Add Application
              </Link>
            </div>
          ))}
    </div>
  );
}
