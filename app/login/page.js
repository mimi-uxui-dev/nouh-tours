"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const callbackUrl =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("callbackUrl") || "/"
      : "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading(false);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Login successful");
        router.push(callbackUrl);
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="mb-10 mt-48 py-16 bg-green-100 rounded-2xl w-full max-w-screen-xl h-fit min-h-fit flex flex-col justify-self-center ">
      <Link className="pl-14 mb-10" href="/">
        ← Go Back
      </Link>
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button disabled={loading || !email || !password}>
          {loading ? "Please wait.." : "Login"}
        </button>
      </form>
    </div>
  );
}
