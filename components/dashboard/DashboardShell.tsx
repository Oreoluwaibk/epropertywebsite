"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { clearSession, readSession, type Account, type Role } from "@/lib/session";

const nav: Record<Role, { href: string; label: string }[]> = {
  landlord: [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/properties", label: "Properties" },
    { href: "/dashboard/tenants", label: "Tenants" },
    { href: "/dashboard/managers", label: "Property Managers" },
    { href: "/dashboard/transactions", label: "Transactions" },
    { href: "/dashboard/complains", label: "Complains" },
  ],
  tenant: [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/properties", label: "My home" },
    { href: "/dashboard/transactions", label: "Payments" },
    { href: "/dashboard/complains", label: "Requests" },
    { href: "/dashboard/tenants", label: "Messages" },
  ],
  agent: [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/properties", label: "Properties" },
    { href: "/dashboard/managers", label: "Landlords" },
    { href: "/dashboard/complains", label: "Requests" },
    { href: "/dashboard/transactions", label: "Transactions" },
  ],
};

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [account, setAccount] = useState<Account | null>(null);

  useEffect(() => {
    const session = readSession();
    if (!session) {
      router.replace("/sign-in");
      return;
    }
    setAccount(session);
  }, [router]);

  if (!account) {
    return <div className="min-h-screen bg-white" />;
  }

  const links = nav[account.role];

  return (
    <div className="min-h-screen bg-white md:flex">
      <aside className="border-b border-[#eee] bg-white md:sticky md:top-0 md:flex md:h-screen md:w-64 md:flex-col md:border-b-0 md:border-r">
        <div className="px-6 py-8 text-center">
          <Avatar name={`${account.firstName} ${account.lastName}`} />
          <p className="mt-3 text-xs text-[#9a9a9a]">Welcome Back</p>
          <p className="mt-1 text-sm font-bold text-heading">
            {account.firstName} {account.lastName}
          </p>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-4 md:flex-1 md:flex-col md:overflow-visible md:px-0">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-4 py-3 text-center text-sm md:rounded-none ${
                  active ? "font-semibold text-heading" : "text-[#8a8a8a]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden border-t border-[#eee] md:block">
          <button
            type="button"
            onClick={() => {
              clearSession();
              router.push("/");
            }}
            className="w-full px-4 py-6 text-center text-sm text-[#8a8a8a]"
          >
            Logout
          </button>
        </div>
      </aside>
      <div className="flex-1 px-4 py-8 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => {
              clearSession();
              router.push("/");
            }}
            className="text-sm text-body"
          >
            Logout
          </button>
        </div>
        <h1 className="text-xl font-semibold text-brand sm:text-2xl">
          Goodmorning {account.firstName} {account.lastName}
        </h1>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3d6d4] text-lg font-bold text-ink">
      {initials}
    </div>
  );
}
