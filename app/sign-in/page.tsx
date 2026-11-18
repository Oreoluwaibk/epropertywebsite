"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { EyeIcon, EyeOffIcon } from "@/components/Icons";
import { readAccount, setSession, type Account } from "@/lib/session";

export default function SignInPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!identifier.trim() || password.length < 6) {
      setError("Enter the email or phone, and a password of at least 6 characters.");
      return;
    }
    const saved = readAccount();
    if (saved) {
      const id = identifier.trim().toLowerCase();
      const matches =
        id === saved.email.toLowerCase() || id === saved.phone.replace(/\s/g, "").toLowerCase();
      if (!matches || password !== saved.password) {
        setError("Those details don't match the account on this browser.");
        return;
      }
      setSession(saved);
      router.push("/dashboard");
      return;
    }

    const email = identifier.includes("@") ? identifier.trim() : "imoukhuedeakhigbe@gmail.com";
    const phone = identifier.trim().startsWith("+") ? identifier.trim() : "+2348067568963";
    const guest: Account = {
      firstName: "Solomon",
      lastName: "Akhigbe",
      email,
      phone,
      role: "landlord",
      password,
    };
    setSession(guest);
    router.push("/dashboard");
  }

  return (
    <AuthShell>
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
        <p className="text-sm text-body">Welcome back</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-heading">Sign in</h1>
        <p className="mt-3 text-sm leading-6 text-body">
          Use the email or phone on your ePropertyTree account. The same password works in the mobile app.
        </p>
        <form onSubmit={onSubmit} className="mt-8">
          <label className="text-sm text-heading" htmlFor="identifier">
            Email or phone
          </label>
          <input
            id="identifier"
            value={identifier}
            onChange={(event) => setIdentifier(event.target.value)}
            placeholder="you@ePropertyTree.com"
            className="mt-2 h-14 w-full rounded-full border border-[#eadfdf] bg-white px-5 text-sm outline-none focus:border-brand"
          />
          <label className="mt-4 block text-sm text-heading" htmlFor="password">
            Password
          </label>
          <div className="relative mt-2">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="h-14 w-full rounded-full border border-[#eadfdf] bg-white px-5 pr-12 text-sm outline-none focus:border-brand"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-body"
            >
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
          <p className="mt-3 text-sm text-body">
            <Link href="/support#forgot" className="underline">
              Forgot password
            </Link>
          </p>
          {error && <p className="mt-3 text-sm text-brand">{error}</p>}
          <button type="submit" className="mt-6 h-12 w-full rounded-full bg-ink text-sm font-semibold text-white">
            Sign in
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-body">
          New here?{" "}
          <Link href="/get-started" className="font-semibold text-heading underline">
            Get started
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
