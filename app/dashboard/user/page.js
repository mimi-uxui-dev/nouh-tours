"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserDashboard() {
  const { data } = useSession();
  const user = data.user;
  console.log("user", user);
  return (
    <div className="my-10 py-16 bg-green-100 rounded-2xl w-full max-w-screen-xl h-fit flex flex-col justify-self-center">
      <Link className="pl-14 mb-10" href="/">
        ← Go Back
      </Link>
      <h1 className="text-center">{user?.fullName} Dashboard</h1>

      {user?.role === "user" && user?.universitiesAppliedTo?.length !== 0 ? (
        <div className="mt-10 px-4">
          <div className="w-full grid grid-cols-6 text-green-600 font-bold gap-2 mb-2">
            <div>Name</div>
            <div>Specialty</div>
            <div>PreEnrollment</div>
            <div>Status</div>
            <div>Note</div>
            <div>Actions</div>
          </div>

          {user?.universitiesAppliedTo?.map((univ) => (
            <div
              key={univ._id}
              className="w-full grid grid-cols-6 font-medium py-2 gap-2 border-b h-fit"
            >
              <div>{univ.name}</div>
              <div>{univ.specialty}</div>
              <div>{univ.preEnrollment}</div>
              <div>{univ.status}</div>
              <div>{univ.note}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-2xl pt-4">
          Nouh have not applied to any universities yet. Thank you for your
          patience 💛
        </div>
      )}
    </div>
  );
}
