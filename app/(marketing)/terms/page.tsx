import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <div className="bg-paper">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-body">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold text-heading">Terms</h1>
        <div className="mt-6 space-y-4 text-sm leading-7 text-body sm:text-base">
          <p>
            Creating an account means you agree to use ePropertyTree for a real role: landlord, tenant, or agent. The role is fixed to that email. If you need a second role, sign up again with a different email.
          </p>
          <p>
            Listings on the marketplace are tied to a landlord account. You are responsible for the price, description, and availability you publish. Rent paid in the product is processed by Paystack in naira.
          </p>
          <p>
            The same email and password sign you into this website and the mobile app. Keep them to yourself. We can suspend an account that is used to misrepresent a property or to collect money outside the tenancy it belongs to.
          </p>
        </div>
      </article>
    </div>
  );
}
