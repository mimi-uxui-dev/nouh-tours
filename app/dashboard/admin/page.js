"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.API}/users`);
      const data = await res.json();
      const students = data.filter((user) => user.role !== "admin");
      setUsers(students);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center text-4xl pt-4">Loading...</div>
      ) : (
        users?.map((user) => (
          <div className="grid " key={user._id}>
            {/* Users Row */}

            <div className="py-2 px-2 flex flex-row justify-between items-center bg-darkGray mt-6">
              <div className="px-6 grid grid-cols-4 font-medium	">
                <div>{user.fullName}</div>
                <div>{user.email}</div>
                <div>{user.contactInfo}</div>
              </div>
              <Link
                className="btn w-fit"
                href={`/dashboard/admin/createApplication/${user._id}`}
              >
                Add Application
              </Link>
            </div>
            {/* Univ Row */}
            <div className="bg-slate-200 flex flex-col justify-between w-full px-12 py-2 font-medium">
              {user.universitiesAppliedTo.length === 0 ? (
                ""
              ) : (
                <div className="grid grid-cols-6 text-green-600">
                  <div>Name</div>
                  <div>specialty</div>
                  <div>preEnrollment</div>
                  <div>status</div>
                  <div>note</div>
                </div>
              )}

              {user.universitiesAppliedTo.length === 0 ? (
                <div className="text-center">
                  No university applications, yet!
                </div>
              ) : (
                user.universitiesAppliedTo?.map((univ) => (
                  <div key={univ._id} className="grid grid-cols-6 font-medium">
                    <div>{univ.name}</div>
                    <div>{univ.specialty}</div>
                    <div>{univ.preEnrollment}</div>
                    <div>{univ.status}</div>
                    <div>{univ.note}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}