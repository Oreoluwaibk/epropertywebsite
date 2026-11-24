"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, CloseIcon, MenuIcon } from "./Icons";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/properties", label: "Properties" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

export function Header({ step }: { step?: 1 | 2 | 3 }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-[11px] tracking-wide sm:text-xs">
          <span>· Driven by Transparency</span>
          <span className="hidden sm:inline">· Rooted in Integrity</span>
          <span className="hidden md:inline">· Quality Homes & Verified Properties</span>
        </div>
      </div>
      <div className="border-b border-black/5 bg-nav">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm ${active ? "font-semibold text-heading" : "text-body hover:text-heading"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <Link href="/sign-in" className="text-sm font-medium text-heading">
              Sign in
            </Link>
            {step ? (
              <span className="text-sm text-body">Step {step} of 3</span>
            ) : (
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-black/5 bg-nav px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-1 text-base text-heading"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/sign-in" onClick={() => setOpen(false)} className="py-1 text-base text-heading">
                Sign in
              </Link>
              {step ? (
                <p className="text-sm text-body">Step {step} of 3</p>
              ) : (
                <Link
                  href="/get-started"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
