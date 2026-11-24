import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import {
  AppleIcon,
  ArrowRight,
  BriefcaseIcon,
  HouseIcon,
  KeyIcon,
  PinIcon,
  PlayIcon,
  SearchIcon,
} from "@/components/Icons";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PropertyCard } from "@/components/PropertyCard";
import { homeFaqs } from "@/lib/content";
import { listings } from "@/lib/listings";

const featuredIds = ["wuse-duplex", "lekki-duplex", "kuje-bungalow-1"];

const roles = [
  {
    n: "01",
    kicker: "Landlords",
    icon: HouseIcon,
    title: "Manage your property, in one place.",
    body: "From a single duplex to a 50-unit estate, every property, lease, and payment lives in one place.",
    points: [
      "Paystack rent collection (card, bank, USSD)",
      "Auto invoices, instant receipts, and late fees",
      "Wallet with payouts to any Nigerian bank",
      "Tenancy agreements: upload, OCR, in-app e-signing",
      "Maintenance tracking and real-time tenant chat",
      "Agents with per-property permissions and audit trail",
      "Reports: P&L, balance sheet, cash-flow exports",
    ],
    href: "/get-started",
    link: "Get Started",
  },
  {
    n: "02",
    kicker: "Property Managers / Agents",
    icon: BriefcaseIcon,
    title: "One dashboard for every landlord you serve.",
    body: "Managing across multiple landlords is messy. ePropertyTree centralizes it, with only the access each landlord grants you.",
    points: [
      "Central dashboard for all your landlords",
      "Per-property permissions set by the landlord",
      "Audit trail of every action on their behalf",
      "Record payments, add tenants, manage maintenance",
      "Sign and upload tenancy agreements & other documents (when permitted)",
      "Alerts the moment a unit goes vacant",
    ],
    href: "/get-started",
    link: "Get Started",
  },
  {
    n: "03",
    kicker: "Tenants",
    icon: KeyIcon,
    title: "Your home, lease, and receipts in your pocket.",
    body: "Browse verified listings, reserve in two taps, and run your whole tenancy from one place.",
    points: [
      "Browse verified listings and reserve in two taps",
      "Pay rent by card, transfer, or USSD",
      "Instant receipts and downloadable agreements",
      "Sign your tenancy agreement in-app",
      "Maintenance requests with photo evidence",
      "Chat with your Agents; lease-expiry reminders",
    ],
    href: "/properties",
    link: "Find a home",
  },
];

const steps = [
  {
    n: "01",
    title: "Sign up in Few seconds",
    body: "Email, phone, password, that's it. Verify with NIN, Driver's Licence, Passport, or Voter's Card and you're ready to transact.",
  },
  {
    n: "02",
    title: "Add your Agent, Properties or join one",
    body: "Landlords list properties and units. Tenants accept invitation links. Agents get invited by the landlords they work for.",
  },
  {
    n: "03",
    title: "Set the lease, set the rent schedule",
    body: "Pick monthly, quarterly, or annual billing. Caution, agent, agreement, legal, service, all the Nigerian fee categories handled.",
  },
  {
    n: "04",
    title: "Get paid, on time, into your wallet",
    body: "Tenants pay via Paystack, card, bank, USSD. Funds settle into your wallet, withdraw to any Nigerian bank in minutes.",
  },
];

export function HomePage() {
  const featured = featuredIds
    .map((id) => listings.find((listing) => listing.id === id))
    .filter((listing) => listing !== undefined);

  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#fff_0%,_#fdecee_46%,_#f6d7da_100%)]">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-6 sm:pt-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-1.5 text-xs text-body shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Built in Nigeria • for landlords, tenants &amp; agents
          </p>
          <h1 className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-6xl">
            Everything your property
            <span className="block">needs.</span>
            <span className="mt-1 block text-brand">On one platform.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-body sm:text-base">
            Collect rent online, automate invoices and receipts, manage leases and maintenance, and fill vacant units. One platform for landlords, tenants, and agents across Nigeria.
          </p>
          <form action="/properties" className="mt-8 flex w-full max-w-2xl items-center rounded-full border border-black/5 bg-white p-1.5 shadow-sm">
            <PinIcon className="ml-4 h-4 w-4 shrink-0 text-body" />
            <input
              name="q"
              placeholder="Find your next Home: try an area like Lagos Island, Ikeja, Wuse or Jos"
              className="h-12 w-full bg-transparent px-3 text-sm text-ink outline-none placeholder:text-[#b0a4a4]"
            />
            <button type="submit" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white">
              <SearchIcon className="h-4 w-4" />
              Search
            </button>
          </form>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-started" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#how-it-works" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#eadfdf] bg-white px-6 text-sm font-semibold text-heading">
              <PlayIcon className="h-4 w-4" />
              Watch Demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-body">Free for your first property. No card required</p>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_top,_#4a1020_0%,_#16060a_38%,_#0c0000_100%)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">Featured Properties</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">
                Fresh Properties, Ready to Discover
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
                Fresh rentals, shortlets, commercial spaces, land and properties available for your review at ePropertyTree.
              </p>
            </div>
            <Link
              href="/properties"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-white/10 px-5 text-sm font-semibold text-white/90"
            >
              View more Properties
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,_#fff_0%,_#fff_70%,_#fdecee_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a9a9a]">
            Built for property rental and management
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="text-3xl font-extrabold leading-[1.1] text-heading sm:text-5xl">
              Transparent property experience, from every side.
            </h2>
            <p className="text-sm leading-7 text-body lg:pb-1">
              The work is different for an owner, an agent and a tenant. The experience should still feel clear, accountable and easy to trust.
            </p>
          </div>
          <div className="mt-12 grid border-t border-[#ececec] md:grid-cols-3">
            {roles.map((role, index) => (
              <article key={role.n} className={`flex flex-col px-0 py-8 md:px-6 ${index > 0 ? "md:border-l md:border-[#ececec]" : "md:pl-0"}`}>
                <div className="flex items-start justify-between">
                  <p className="text-sm font-semibold text-brand">{role.n}</p>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ececec] text-heading">
                    <role.icon className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-heading">{role.kicker}</p>
                <h3 className="mt-2 text-xl font-extrabold leading-tight text-heading">{role.title}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{role.body}</p>
                <div className="my-5 h-px bg-[#ececec]" />
                <ul className="space-y-2.5">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-5 text-body">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#b0b0b0]" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href={role.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-heading">
                  {role.link}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[linear-gradient(180deg,_#fff_0%,_#fff_80%,_#fdecee_100%)]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#9a9a9a]">How it works</p>
          <h2 className="mt-4 text-center text-3xl font-extrabold leading-tight text-heading sm:text-5xl">
            From download to first rent, &amp; Management{" "}
            <span className="text-brand">in under a day.</span>
          </h2>
          <ol className="relative mt-16 space-y-10">
            <span className="absolute bottom-6 left-[4.4rem] top-2 hidden w-px bg-[#e4e4e4] sm:block" />
            {steps.map((step) => (
              <li key={step.n} className="grid gap-2 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
                <p className="relative text-sm font-semibold text-brand sm:pt-1">Step {step.n}</p>
                <div>
                  <h3 className="text-xl font-bold text-heading">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,_#fff_0%,_#f8e4e6_28%,_#fff_72%)]">
        <div className="mx-auto max-w-3xl px-4 pb-8 pt-8 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#9a9a9a]">FAQ</p>
          <h2 className="mt-3 text-center text-4xl font-extrabold text-heading">Question, answered.</h2>
          <div className="mt-8">
            <FaqList items={homeFaqs} />
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <div className="rounded-[28px] border border-[#f0e4e4] bg-white px-6 py-8 sm:px-10">
            <h3 className="text-2xl font-bold text-heading">Stay in the loop</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-body">
              Occasional tips for Nigerian and Uk landlords, tenants, and agents, plus product updates. No spam.
            </p>
            <div className="mt-5">
              <NewsletterForm button="Subscribe" placeholder="You@email.com" />
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="bg-[radial-gradient(ellipse_at_center,_#3a0c14_0%,_#140206_50%,_#0c0000_100%)] text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Your next <span className="bg-brand px-1 text-white">rent payment</span> should be the easy one.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/70">
            Use ePropertyTree today on the web and run your first cycle by next month.
            <br />
            Free for your property. No card. No commitment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-started" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white">
              Create your free account
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/sign-in" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-brand px-6 text-sm font-semibold text-white">
              I already have an account
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.16em] text-brand">Also on mobile</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a href="#download" className="inline-flex min-w-44 items-center gap-3 rounded-full border border-brand/80 px-4 py-2 text-left">
              <AppleIcon className="h-5 w-5" />
              <span>
                <span className="block text-[10px] text-white/70">Download on the</span>
                <span className="text-sm font-semibold">App Store</span>
              </span>
            </a>
            <a href="#download" className="inline-flex min-w-44 items-center gap-3 rounded-full border border-brand/80 px-4 py-2 text-left">
              <PlayIcon className="h-4 w-4" />
              <span>
                <span className="block text-[10px] text-white/70">Get it on</span>
                <span className="text-sm font-semibold">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
