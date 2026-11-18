import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="bg-paper">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-body">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold text-heading">Privacy</h1>
        <div className="mt-6 space-y-4 text-sm leading-7 text-body sm:text-base">
          <p>
            ePropertyTree keeps the details a tenancy actually needs: your name, email, phone, role, property records, messages, and payment references from Paystack. We use them to run the account, show the right dashboard, and pay rent to the landlord&apos;s bank.
          </p>
          <p>
            We do not sell that information. Payment card details are handled by Paystack. A landlord sees the tenants and agents on their own properties. An agent sees only the properties they were invited to.
          </p>
          <p>
            You can ask for a copy of your data, or ask us to delete the account, by emailing privacy@ePropertyTree.com. Privacy and data requests are handled within 30 days, per the Nigeria Data Protection Act.
          </p>
        </div>
      </article>
    </div>
  );
}
