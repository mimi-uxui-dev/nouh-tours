"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function EditApplication() {
  const router = useRouter();
  const { applicationId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    preEnrollment: false,
    status: "pending",
    note: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch the existing application data
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await fetch(`/api/admin/univApplication`, {
          method: "GET",
        });

        if (!res.ok) {
          // maybe Failed to fetch application data.
          const data = await res.json();
          toast.error(data.err);
          setLoading(false);
          return;
        }

        const applications = await res.json();
        const application = applications.find(
          (app) => app._id === applicationId
        );

        if (!application) {
          throw new Error("Application not found.");
        }

        setFormData({
          name: application.name || "",
          specialty: application.specialty || "",
          preEnrollment: application.preEnrollment || false,
          status: application.status || "pending",
          note: application.note || "",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [applicationId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`/api/admin/univApplication`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationId,
          ...formData,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to update application.");
      }

      toast.success("Update application with success ");

      router.push("/dashboard/admin");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="my-10 py-16 bg-green-100 rounded-2xl w-full max-w-screen-xl h-fit min-h-fit flex flex-col justify-self-center">
      <Link className="pl-14 mb-10" href="/dashboard/admin">
        ← Go Back
      </Link>
      <h1 className="text-center">Edit University Application</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />

        <input
          type="text"
          name="preEnrollment"
          value={formData.preEnrollment}
          onChange={handleChange}
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
        <textarea name="note" value={formData.note} onChange={handleChange} />

        <button type="submit">Update Application</button>
      </form>
    </div>
  );
}
