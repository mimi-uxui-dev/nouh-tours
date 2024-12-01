"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddApplication() {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [preEnrollment, setPreEnrollment] = useState("");
  const [status, setStatus] = useState("pending");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const { studentId } = useParams();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(`${process.env.API}/admin/univApplication`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          specialty,
          preEnrollment,
          status,
          note,
          studentId,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        toast.error(data.err);
        setLoading(false);
        return;
      }

      const data = await res.json();
      toast.success(data.success);
      setLoading(false);
      router.push("/dashboard/admin");
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="my-10 py-16 bg-green-100 rounded-2xl w-full max-w-screen-xl h-fit min-h-fit flex flex-col justify-self-center">
      <Link className="pl-14 mb-10" href="/dashboard/admin">
        ← Go Back
      </Link>
      <h1 className="text-center">New Application 🚀</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="University Name"
        />
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          placeholder="specialty"
        />
        <input
          type="text"
          value={preEnrollment}
          onChange={(e) => setPreEnrollment(e.target.value)}
          placeholder="preEnrollment"
        />
        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
        <textarea
          placeholder="Note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        >
          Note ..
        </textarea>
        <button disabled={loading}>
          {loading ? "Please wait.." : "Create Application"}
        </button>
      </form>
    </div>
  );
}

export default AddApplication;
