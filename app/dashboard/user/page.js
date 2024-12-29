"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const { data } = useSession();
  const [moi, setMoi] = useState({});
  const [loading, setLoading] = useState(false);

  const user = data?.user;
  const userID = data?.user._id;

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.API}/users`, {
        method: "GET",
        redirect: "follow",
      });

      res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins (adjust as needed)
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );

      const data = await res.json();
      const me = data.filter((person) => person._id === userID);
      setMoi(me[0]);
      // console.log("🚀 Hna ->>>>>", me[0].email);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-10 mt-48 py-16 bg-green-100 rounded-2xl w-full max-w-screen-xl h-fit flex flex-col justify-self-center">
      <Link className="pl-14 mb-10" href="/">
        ← Go Back
      </Link>
      <div className="flex flex-col md:flex-row justify-between px-4">
        <h1 className="text-center text-2xl lg:4xl">
          {user?.fullName} Dashboard <br />
        </h1>
        <Link
          href={"https://calendly.com/Nouhtours"}
          className="btn text-center"
        >
          Book Appointment
        </Link>
      </div>
      {loading ? (
        <div className="text-center text-4xl pt-4">Loading...</div>
      ) : moi.universitiesAppliedTo?.length !== 0 ? (
        <div
          key={user?.email}
          className="mt-10 px-4 overflow-x-scroll lg:overflow-x-hidden"
        >
          <div className="w-full grid grid-cols-5 text-green-600 font-bold gap-2 mb-2 min-w-800px">
            <div>University</div>
            <div>Specialty</div>
            <div>Status</div>
            <div>PreEnrollment</div>
            <div>Note</div>
          </div>

          {moi.universitiesAppliedTo?.map((univ) => (
            <div
              key={univ._id}
              className="w-full grid grid-cols-5 font-medium py-2 gap-2 border-b h-fit min-w-800px"
            >
              <div>{univ.name}</div>
              <div>{univ.specialty}</div>
              <div>{univ.status}</div>
              <div>{univ.preEnrollment}</div>
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
