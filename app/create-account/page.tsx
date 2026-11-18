"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { ArrowLeft, ArrowRight, EyeIcon, EyeOffIcon } from "@/components/Icons";
import { saveAccount, type Role } from "@/lib/session";

function CreateAccountForm() {
  const router = useRouter();
  const params = useSearchParams();
  const roleParam = params.get("role");
  const role: Role = roleParam === "tenant" || roleParam === "agent" ? roleParam : "landlord";
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const subtitle =
    role === "tenant"
      ? "Use the same email and password to sign into the mobile app when you are ready."
      : "Create your free account, then add and publish your first standard property or room.";

  function update(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError("Enter your first and last name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (form.phone.replace(/\D/g, "").length < 10) {
      setError("Enter a phone number with at least 10 digits.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    saveAccount({ ...form, role });
    router.push("/welcome");
  }

  return (
    <AuthShell step={2}>
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-sm text-body">Get Started</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl">
          Create your account
        </h1>
        <p className="mt-3 text-sm leading-6 text-body sm:text-base">{subtitle}</p>
        <div className="mt-8 h-px bg-[#e5d4d6]" />
        <form onSubmit={onSubmit} className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First Name" value={form.firstName} onChange={(value) => update("firstName", value)} />
            <Field label="Last Name" value={form.lastName} onChange={(value) => update("lastName", value)} />
          </div>
          <div className="mt-4">
            <Field
              label="Email"
              type="email"
              placeholder="you@ePropertyTree.com"
              value={form.email}
              onChange={(value) => update("email", value)}
            />
          </div>
          <div className="mt-4">
            <Field
              label="Phone Number"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(value) => update("phone", value)}
            />
          </div>
          <div className="mt-4">
            <label className="text-sm text-heading">Password</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                placeholder="Password"
                onChange={(event) => update("password", event.target.value)}
                className="h-14 w-full rounded-full border border-[#eadfdf] bg-white px-5 pr-12 text-sm text-ink outline-none placeholder:text-[#c0b4b4] focus:border-brand"
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
            <p className="mt-2 text-xs text-body">At least 6 Characters</p>
          </div>
          {error && <p className="mt-3 text-sm text-brand">{error}</p>}
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => router.push("/get-started")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-heading"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <button
              type="submit"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-body">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-semibold text-heading underline">
            Sign in
          </Link>
        </p>
        <p className="mt-4 text-center text-sm text-body">
          By creating an account you agree to our{" "}
          <Link href="/terms" className="underline">
            terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </AuthShell>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm text-heading">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-14 w-full rounded-full border border-[#eadfdf] bg-white px-5 text-sm text-ink outline-none placeholder:text-[#c0b4b4] focus:border-brand"
      />
    </label>
  );
}

export default function CreateAccountPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-blush" />}>
      <CreateAccountForm />
    </Suspense>
  );
}
