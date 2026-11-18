import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { BriefcaseIcon, HouseIcon, KeyIcon } from "@/components/Icons";
import type { Role } from "@/lib/session";

const roles: { role: Role; title: string; body: string; icon: typeof HouseIcon }[] = [
  {
    role: "landlord",
    title: "I’m a Landlord",
    body: "I own one or more properties and want to manage tenants, leases, and rent collection",
    icon: HouseIcon,
  },
  {
    role: "tenant",
    title: "I’m a Tenant",
    body: "I am renting a home (or about to). I want to pay rent, sign agreement, and chat with my landlord in one app.",
    icon: KeyIcon,
  },
  {
    role: "agent",
    title: "I’m a Property Manager / Agent",
    body: "I manage my own portfolio and/or accept invitation from landlords to manage theirs",
    icon: BriefcaseIcon,
  },
];

export default function GetStartedPage() {
  return (
    <AuthShell step={1}>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-sm text-body">Get Started</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl">
          Which one are you?
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
          Your account is set up around your role. You can&apos;t switch later, but you can sign up again from a different email if you wear two hats.
        </p>
        <div className="mt-8 h-px bg-[#e5d4d6]" />
        <div className="mt-8 space-y-4">
          {roles.map((item) => (
            <Link
              key={item.role}
              href={`/create-account?role=${item.role}`}
              className="flex w-full items-center gap-4 rounded-2xl bg-white px-5 py-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <item.icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-lg font-bold text-heading">{item.title}</span>
                <span className="mt-1 block text-sm leading-6 text-body">{item.body}</span>
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-body">
          Already have an account?{" "}
          <Link href="/sign-in" className="font-semibold text-heading underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
