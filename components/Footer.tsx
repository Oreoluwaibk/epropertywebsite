import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./Icons";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
        <div>
          <Logo className="h-12 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-body">
            To perfect property management.
            <br />
            Built in Naija, for the global market.
          </p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-body">
            GM Mall, KM 46 Lekki-Epe Expressway, opposite SBI Hotel, Sangotedo, Lagos.
          </p>
          <p className="mt-6 text-sm font-bold text-heading">
            Tips for landlords, tenants & agents, straight to your inbox.
          </p>
          <div className="mt-3">
            <NewsletterForm />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-heading">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-body">
            <li><Link href="/" className="hover:text-heading">Home</Link></li>
            <li><Link href="/about" className="hover:text-heading">About</Link></li>
            <li><Link href="/properties" className="hover:text-heading">Properties</Link></li>
            <li><Link href="/pricing" className="hover:text-heading">Pricing</Link></li>
            <li><Link href="/support" className="hover:text-heading">Support</Link></li>
            <li><Link href="/#download" className="hover:text-heading">Download The App</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-heading">Legal</h2>
          <ul className="mt-4 space-y-3 text-sm text-body">
            <li><Link href="/privacy" className="hover:text-heading">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-heading">Terms</Link></li>
            <li><Link href="/delete-account" className="hover:text-heading">Delete Account</Link></li>
          </ul>
        </div>
        <div className="flex items-end justify-end gap-4 md:col-start-3">
          <a href="https://instagram.com" aria-label="Instagram" className="text-heading hover:text-brand">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="text-heading hover:text-brand">
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-body sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 ePropertyTree</p>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Made for landlords, tenants & agents
          </span>
        </div>
      </div>
    </footer>
  );
}
