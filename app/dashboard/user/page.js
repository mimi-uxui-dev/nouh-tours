"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const data = useSession();
  const user = data?.user;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("data00", data);

  // const fetchUserData = async (userId) => {

  //   if (!data) {
  //     console.log("No session found");
  //     return;
  //   }

  //   try {
  //     // Extract the token (if it exists in the session)
  //     const token = data?.accessToken; // Typically `accessToken` is used for authentication

  //     // Fetch data with Authorization header (if you have the token)
  //     const res = await fetch(`/api/admin/user/${userId}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`, // Use the token if available
  //       },
  //     });

  //     if (!res.ok) {
  //       throw new Error("Failed to fetch user data");
  //     }

  //     const data = await res.json();
  //     console.log("userData", data);
  //     // Optionally update your state with fetched data
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (user?._id) {
  //     fetchUserData(user._id);
  //   }
  // }, [user?._id]);

  return (
    <div className="my-10 py-16 bg-green-100 rounded-2xl w-full max-w-screen-xl h-fit flex flex-col justify-self-center">
      <Link className="pl-14 mb-10" href="/">
        ← Go Back
      </Link>
      <h1 className="text-center">
        {user?.fullName} Dashboard <br /> {user?._id}
      </h1>

      {loading && <div className="text-center">Loading...</div>}

      {error && <div className="text-center text-red-500">{error}</div>}

      {userData?.role === "user" &&
      userData?.universitiesAppliedTo?.length !== 0 ? (
        <div className="mt-10 px-4">
          <div className="w-full grid grid-cols-6 text-green-600 font-bold gap-2 mb-2">
            <div>Name</div>
            <div>Specialty</div>
            <div>PreEnrollment</div>
            <div>Status</div>
            <div>Note</div>
            <div>Actions</div>
          </div>

          {userData?.universitiesAppliedTo?.map((univ) => (
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
