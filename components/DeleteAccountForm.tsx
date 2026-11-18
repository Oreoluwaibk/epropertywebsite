"use client";

import { FormEvent, useState } from "react";

export function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter the email on the account.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <p className="mt-6 rounded-2xl bg-white p-5 text-sm leading-6 text-body">
        Request received for <span className="font-semibold text-heading">{email}</span>. We handle privacy and data requests within 30 days. A note will also go to privacy@ePropertyTree.com if we need to confirm it is you.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-md">
      <label className="text-sm text-heading" htmlFor="delete-email">
        Email on the account
      </label>
      <input
        id="delete-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@ePropertyTree.com"
        className="mt-2 h-12 w-full rounded-full border border-[#eadfdf] bg-white px-4 text-sm outline-none focus:border-brand"
      />
      {error && <p className="mt-2 text-sm text-brand">{error}</p>}
      <button type="submit" className="mt-4 h-12 rounded-full bg-ink px-6 text-sm font-semibold text-white">
        Request deletion
      </button>
    </form>
  );
}
