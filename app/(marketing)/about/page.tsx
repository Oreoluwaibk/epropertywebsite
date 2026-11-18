import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-body">About us</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-5xl">
          Built in Nigeria.
          <span className="mt-1 block text-brand">For the way Nigeria rents.</span>
        </h1>
        <p className="mt-6 text-base leading-7 text-body">
          ePropertyTree exists because renting in Nigeria runs on cash, WhatsApp, and trust that gets burned. We&apos;re building the software that should have been there all along.
        </p>

        <h2 className="mt-14 text-2xl font-bold text-heading">What we do</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-body sm:text-base">
          <p>
            ePropertyTree is one product with three sides: an app for landlords to manage portfolios, an app for tenants to pay rent and live in their home, and an app for agents to work for landlords with proper access, all on the same backbone.
          </p>
          <p>
            We handle the small things landlords spend hours on: generating tenancy agreements, issuing receipts, sending rent reminders, recording payments, paying out to bank accounts, triaging maintenance, and keeping chat with tenants attributable. We don&apos;t try to replace estate management companies, we give them and the landlords they work with the same tool.
          </p>
        </div>

        <h2 className="mt-14 text-2xl font-bold text-heading">Why we built it</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-body sm:text-base">
          <p>
            Renting in Nigeria has unique mechanics, annual rent paid up front, a stack of fees that includes agreement and caution, agents who work on commission, and tenants who are often paying through informal channels. International software doesn&apos;t fit, and what local options exist are either landlord-only spreadsheets or marketing-only listing sites.
          </p>
          <p>
            ePropertyTree was built end to end for this market: Paystack for payments, NGN only currency, Nigerian fee categories baked into the lease model, and a marketplace where every listing is tied to a verified landlord.
          </p>
        </div>

        <h2 className="mt-14 text-2xl font-bold text-heading">Where we are</h2>
        <p className="mt-4 text-sm leading-7 text-body sm:text-base">
          Headquartered in Lagos, with landlords and tenants using the app across the country. The team writes code, talks to landlords on WhatsApp, and ships releases every couple of weeks.
        </p>

        <div className="mt-12 border-t border-[#e4dddd] pt-6 text-sm text-body">
          Want to get in touch?{" "}
          <Link href="/support" className="font-semibold text-heading underline">
            Contact us
          </Link>
          .
        </div>
      </article>
    </div>
  );
}
