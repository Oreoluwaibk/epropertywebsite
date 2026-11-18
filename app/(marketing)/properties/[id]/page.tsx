import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AreaIcon, BathIcon, BedIcon, DoorIcon, PinIcon } from "@/components/Icons";
import { PropertyPhoto } from "@/components/PropertyPhoto";
import { formatNaira, getListing, listingImage, listings } from "@/lib/listings";

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const listing = getListing(id);
  return { title: listing?.title ?? "Property" };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = getListing(id);
  if (!listing) notFound();

  const facts = [
    { icon: AreaIcon, label: `${listing.area} sqm` },
    { icon: DoorIcon, label: `${listing.rooms} Rooms` },
    { icon: BathIcon, label: `${listing.baths} Bathrooms` },
    { icon: BedIcon, label: `${listing.beds} Beds` },
  ];

  return (
    <div className="bg-white">
      <article className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <Link href="/properties" className="text-sm font-medium text-body hover:text-heading">
            ← All properties
          </Link>
          <div className="relative mt-4 overflow-hidden rounded-3xl">
            <PropertyPhoto src={listingImage(listing)} alt={listing.title} className="aspect-[16/10]" />
            <p className="absolute left-5 top-4 rounded-xl border border-white/80 bg-white/10 px-4 py-2 text-2xl font-bold text-white">
              {formatNaira(listing.price)}
              {listing.intent === "rent" && <span className="ml-2 text-sm font-medium">/ year</span>}
            </p>
          </div>
        </div>
        <div className="lg:pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            {listing.intent === "rent" ? "For rent" : "For sale"} · {listing.kind}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-heading">{listing.title}</h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-heading">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2457d6] text-white">
              <PinIcon className="h-4 w-4" />
            </span>
            {listing.city}
          </p>
          <p className="mt-4 text-sm text-body">Listed by {listing.company}</p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-2 rounded-2xl bg-[#faf7f7] px-3 py-3 text-sm text-heading">
                <fact.icon className="h-4 w-4 text-body" />
                {fact.label}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-body">
            This home is tied to a verified landlord on ePropertyTree. Create an account to enquire, pay, or manage the tenancy. The same login works in the mobile app.
          </p>
          <Link
            href="/get-started"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white"
          >
            Get started to enquire
          </Link>
        </div>
      </article>
    </div>
  );
}
