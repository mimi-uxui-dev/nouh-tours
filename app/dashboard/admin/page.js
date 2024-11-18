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
    console.log("🚀🚀", users);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="max-w-">
      <h1>Admin HOME Dashboard B</h1>
      {loading
        ? "Loading"
        : users?.map((user) => (
            <div key={user._id}>
              {user.fullName}{" "}
              {user.universitiesAppliedTo?.map((univ) => (
                <li key={univ._id}>{univ.status}</li>
              ))}
              <Link href={`/dashboard/admin/createApplication/${user._id}`}>
                Add Application
              </Link>
              <br />
              <br />
            </div>
          ))}
    </div>
  );
}
