"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(`${process.env.API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
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

      if (session?.data?.user?.role === "admin") {
        router.push("/dashboard/admin");
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
    <div className="my-10 py-16 bg-green-100 rounded-2xl w-full max-w-screen-xl h-fit min-h-fit flex flex-col justify-self-center">
      <Link className="pl-14 mb-10" href="/dashboard/admin">
        ← Go Back
      </Link>
      <h1 className="text-center">Register New Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter full name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button disabled={loading || !fullName || !email || !password}>
          {loading ? "Please wait.." : "Register"}
        </button>
      </form>
    </div>
  );
}
