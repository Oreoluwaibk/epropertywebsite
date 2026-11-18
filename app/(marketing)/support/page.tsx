import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { ClockIcon, MailIcon, WhatsAppIcon } from "@/components/Icons";
import { faqs } from "@/lib/content";

export const metadata: Metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <div className="bg-blush">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
        <h1 className="text-4xl font-extrabold text-heading sm:text-5xl">Support</h1>
        <p className="mt-3 text-sm text-body sm:text-base">
          We&apos;re here to help. Most questions are answered within one business day.
        </p>
        <div className="mt-8 h-px bg-[#e7d4d6]" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href="mailto:support@ePropertyTree.com" className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
              <MailIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-heading">Email Us</span>
              <span className="mt-1 block text-sm text-body">support@ePropertyTree.com</span>
              <span className="mt-1 block text-xs text-[#8d8080]">Best for account, payment or lease questions</span>
            </span>
          </a>
          <a href="https://wa.me/2348000000000" className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-heading">WhatsApp</span>
              <span className="mt-1 block text-sm text-body">+234 800 000 0000</span>
              <span className="mt-1 block text-xs text-[#8d8080]">Mon–Fri, 9am–5pm WAT</span>
            </span>
          </a>
        </div>

        <h2 className="mt-10 flex items-center gap-2 text-lg font-bold text-heading">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white text-sm">?</span>
          Common Questions
        </h2>
        <div className="mt-4">
          <FaqList items={faqs} variant="card" />
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="flex items-center gap-2 font-bold text-heading">
            <ClockIcon className="h-4 w-4" />
            Response Time
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-body">
            <div>
              <dt className="inline font-semibold text-heading">Account &amp; Payment Issues: </dt>
              <dd className="inline">Within 1 business day</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-heading">Privacy &amp; Data Requests: </dt>
              <dd className="inline">Within 30 days, per the Nigeria Data Protection Act</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-heading">General Questions: </dt>
              <dd className="inline">Within 2 business days</dd>
            </div>
          </dl>
        </div>
        <p className="mt-8 text-center text-sm text-body">
          For privacy-specific requests, email privacy@ePropertyTree.com
        </p>
      </div>
    </div>
  );
}
