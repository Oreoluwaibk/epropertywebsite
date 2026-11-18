"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { KeyIcon, ThumbIcon } from "@/components/Icons";
import { clearSession, readSession, type Account } from "@/lib/session";

const copy: Record<Account["role"], string> = {
  landlord:
    "Your trial is active. Download the ePropertyTree app to add your first property, invite tenants, and start collecting rent through Paystack.",
  tenant:
    "Your account is ready. Download the ePropertyTree app to pay rent, sign your agreement, and chat with your landlord.",
  agent:
    "Your account is ready. Download the ePropertyTree app to manage your portfolio and accept invitations from landlords.",
};

export default function WelcomePage() {
  const [account, setAccount] = useState<Account | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAccount(readSession());
    setReady(true);
  }, []);

  return (
    <AuthShell step={3}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {!ready ? (
          <div className="h-40" />
        ) : !account ? (
          <div>
            <h1 className="text-4xl font-extrabold text-heading">Create an account first.</h1>
            <p className="mt-3 text-body">Your sign-in details show up here after the account is created.</p>
            <Link href="/get-started" className="mt-6 inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-semibold text-white">
              Get started
            </Link>
          </div>
        ) : (
          <>
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
              <ThumbIcon className="h-7 w-7" />
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl">
              Congratulations, {account.firstName}.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">{copy[account.role]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
              >
                Open my dashboard
              </Link>
              <Link
                href="/sign-in"
                onClick={() => clearSession()}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d9c8c8] bg-white/40 px-6 text-sm font-semibold text-heading"
              >
                Log in with another account
              </Link>
            </div>
            <div className="mt-10 h-px bg-[#e5d4d6]" />
            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-heading">
                <KeyIcon className="h-5 w-5" />
                Signing in next time
              </h2>
              <p className="mt-3 text-sm leading-6 text-body">
                Use the email or phone below with the password you just created. The same credentials work in the mobile app.
              </p>
              <p className="mt-4 text-sm text-heading">
                <span className="font-semibold">Email:</span> {account.email}
              </p>
              <p className="mt-1 text-sm text-heading">
                <span className="font-semibold">Phone:</span> {account.phone}
              </p>
              <p className="mt-4 text-sm text-body">
                Forgot your password? Tap &quot;Forgot password&quot; on the sign-in screen.
              </p>
            </div>
          </>
        )}
      </div>
    </AuthShell>
  );
}
