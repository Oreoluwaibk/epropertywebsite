"use client";

import { useEffect, useState } from "react";
import { readSession, type Role } from "@/lib/session";

const stats: Record<Role, { title: string; value: string; note: string }[]> = {
  landlord: [
    { title: "Properties", value: "0", note: "0 added this month" },
    { title: "Tenants", value: "0", note: "0 of 0 Units Occupied" },
    { title: "Monthly Rent", value: "0", note: "From Active Tenants" },
  ],
  tenant: [
    { title: "Rent due", value: "0", note: "Nothing outstanding" },
    { title: "Requests", value: "0", note: "Open with your landlord" },
    { title: "Messages", value: "0", note: "Waiting in chat" },
  ],
  agent: [
    { title: "Properties", value: "0", note: "Assigned to you" },
    { title: "Landlords", value: "0", note: "Invitations accepted" },
    { title: "Monthly Rent", value: "0", note: "On properties you manage" },
  ],
};

const empty: Record<Role, string> = {
  landlord: "Nothing Yet. Add a property to see activity",
  tenant: "Nothing yet. Your landlord will show up here once you are invited.",
  agent: "Nothing yet. Accept an invitation from a landlord to see activity.",
};

export default function DashboardPage() {
  const [role, setRole] = useState<Role>("landlord");

  useEffect(() => {
    const session = readSession();
    if (session) setRole(session.role);
  }, []);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats[role].map((card) => (
          <article key={card.title} className="rounded-2xl border border-[#ececec] bg-white px-5 py-5">
            <h2 className="text-base font-semibold text-heading">{card.title}</h2>
            <p className="mt-3 text-4xl font-bold tracking-tight text-heading">{card.value}</p>
            <p className="mt-3 text-sm text-[#b0b0b0]">{card.note}</p>
          </article>
        ))}
      </div>
      <h2 className="mt-8 text-sm font-medium text-[#6d6d6d]">Recent Activity</h2>
      <div className="mt-3 rounded-2xl border border-[#e6e6e6] px-6 py-10 text-center text-sm text-[#b0b0b0]">
        {empty[role]}
      </div>
    </div>
  );
}
