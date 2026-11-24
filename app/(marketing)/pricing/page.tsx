import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = { title: "Pricing" };

const plans = [
  {
    name: "Subscription",
    price: "N4,500",
    cadence: "per month",
    note: "Demo price. We will update this figure.",
    points: [
      "One property included",
      "Rent collection, invoices, and receipts",
      "Lease and maintenance records",
      "Email support",
    ],
    href: "/get-started",
    cta: "Start subscription",
    featured: false,
  },
  {
    name: "Premium",
    price: "N12,000",
    cadence: "per month",
    note: "Demo price. We will update this figure.",
    points: [
      "Unlimited properties",
      "Premium listing placement",
      "Agent seats on your account",
      "Priority support",
    ],
    href: "/get-started",
    cta: "Start premium",
    featured: true,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Pricing</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-5xl">
          Subscription and premium.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
          Two plans for landlords, agents, and property managers. The figures below are demos and will be updated.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl bg-white p-8 shadow-sm ${plan.featured ? "ring-2 ring-brand" : "ring-1 ring-black/5"}`}
            >
              <p className="text-sm font-semibold text-brand">{plan.name}</p>
              <p className="mt-4 text-4xl font-extrabold text-heading">
                {plan.price} <span className="text-base font-medium text-body">{plan.cadence}</span>
              </p>
              <p className="mt-2 text-xs text-body">{plan.note}</p>
              <ul className="mt-6 space-y-3 text-sm text-body">
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-8 inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold ${
                  plan.featured ? "bg-brand text-white" : "bg-ink text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
