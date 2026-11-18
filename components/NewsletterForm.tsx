"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({
  button = "Subscribe",
  placeholder = "You@email.com",
}: {
  button?: string;
  placeholder?: string;
}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Enter a valid email address.");
      return;
    }
    setMessage("You're on the list.");
    setEmail("");
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="flex items-center gap-2">
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setMessage("");
          }}
          placeholder={placeholder}
          aria-label="Email address"
          className="h-11 flex-1 rounded-full border border-[#eadfdf] bg-[#f7f1f1] px-4 text-sm text-ink outline-none placeholder:text-[#b0a4a4] focus:border-brand"
        />
        <button
          type="submit"
          className="h-11 shrink-0 rounded-full bg-ink px-5 text-sm font-semibold text-white hover:bg-black"
        >
          {button}
        </button>
      </div>
      {message && (
        <p className={`mt-2 text-sm ${message.includes("valid") ? "text-brand" : "text-ink"}`}>{message}</p>
      )}
    </form>
  );
}
