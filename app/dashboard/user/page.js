"use client";

import { useSession } from "next-auth/react";

export default function UserDashboard() {
  const { data, status } = useSession();
  console.log(data);
  return (
    <div>
      <h1>{data?.user?.fullName} Dashboard</h1>
    </div>
  );
}
