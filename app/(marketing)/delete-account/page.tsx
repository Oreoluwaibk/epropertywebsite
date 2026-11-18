import type { Metadata } from "next";
import { DeleteAccountForm } from "@/components/DeleteAccountForm";

export const metadata: Metadata = { title: "Delete Account" };

export default function DeleteAccountPage() {
  return (
    <div className="bg-blush">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-body">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold text-heading">Delete Account</h1>
        <p className="mt-4 text-sm leading-7 text-body sm:text-base">
          Send the email on your ePropertyTree account. We close the login, and we handle the personal data request within 30 days, per the Nigeria Data Protection Act. Rent records a landlord is required to keep may stay on that property.
        </p>
        <DeleteAccountForm />
      </article>
    </div>
  );
}
