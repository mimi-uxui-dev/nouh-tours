"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function NewApplication(studentId) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [preEnrollment, setPreEnrollment] = useState("");
  const [status, setStatus] = useState("pending");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e, studentId) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(`${process.env.API}/api/admin/univApplication`, {
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
          studentId: studentId,
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
      if (session?.data?.user?.role === "admin") {
      } else {
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>New Application 🚀</h1>
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
        <textarea value={note} onChange={(e) => setNote(e.target.value)}>
          Note ..
        </textarea>
        <button disabled={loading}>
          {loading ? "Please wait.." : "Create Application"}
        </button>
      </form>
    </div>
  );
}

export default NewApplication;
