const sections: Record<string, { title: string; empty: string }> = {
  properties: {
    title: "Properties",
    empty: "Nothing Yet. Add a property to see activity",
  },
  tenants: {
    title: "Tenants",
    empty: "Nothing Yet. Invite a tenant to see them here.",
  },
  managers: {
    title: "Property Managers",
    empty: "Nothing Yet. Invite an agent to manage a property.",
  },
  transactions: {
    title: "Transactions",
    empty: "Nothing Yet. Rent collected through Paystack will show here.",
  },
  complains: {
    title: "Complains",
    empty: "Nothing Yet. Maintenance and account issues will show here.",
  },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export default async function DashboardSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const content = sections[section] ?? {
    title: "Dashboard",
    empty: "Nothing Yet.",
  };

  return (
    <div>
      <h2 className="text-sm font-medium text-[#6d6d6d]">{content.title}</h2>
      <div className="mt-3 rounded-2xl border border-[#e6e6e6] px-6 py-10 text-center text-sm text-[#b0b0b0]">
        {content.empty}
      </div>
    </div>
  );
}
