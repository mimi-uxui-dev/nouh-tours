"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("handle submit", fullName, email, password);
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
        // throw new Error(data.err);
        // console.log(data.err);
        toast.error(data.err);
        setLoading(false);
        return;
      }

      const data = await res.json();
      // console.log(data.success);
      toast.success(data.success);
      setLoading(false);
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
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
