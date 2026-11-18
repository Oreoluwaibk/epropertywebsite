import Link from "next/link";
import type { Listing } from "@/lib/listings";
import { formatNaira, listingImage } from "@/lib/listings";
import { AreaIcon, BathIcon, BedIcon, DoorIcon, PinIcon, SearchIcon, UserIcon } from "./Icons";
import { PropertyPhoto } from "./PropertyPhoto";

export function PropertyCard({ listing }: { listing: Listing }) {
  const specs = [
    { icon: AreaIcon, label: `${listing.area} sqm` },
    { icon: DoorIcon, label: `${listing.rooms} Rooms` },
    { icon: BathIcon, label: `${listing.baths} Bathrooms` },
    { icon: BedIcon, label: `${listing.beds} Beds` },
  ];

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="relative">
        <PropertyPhoto src={listingImage(listing)} alt={listing.title} className="aspect-[16/11]" />
        <p className="absolute left-4 top-4 rounded-xl border border-white/80 bg-white/10 px-3 py-1.5 text-sm font-bold text-white">
          {formatNaira(listing.price)}
          {listing.intent === "rent" && <span className="ml-1 text-xs font-medium">/ year</span>}
        </p>
        <div className="absolute inset-x-0 bottom-0 px-4 pb-4 text-white">
          <h3 className="text-sm font-semibold leading-5">{listing.title}</h3>
          <p className="mt-1.5 flex items-center gap-2 text-xs text-white/90">
            <UserIcon className="h-3.5 w-3.5" />
            {listing.company}
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-4 px-2 py-4 text-center text-[11px] text-body">
        {specs.map((spec) => (
          <li key={spec.label} className="flex flex-col items-center gap-1.5">
            <spec.icon className="h-5 w-5 text-[#8a8a8a]" />
            {spec.label}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t border-[#f0f0f0] px-4 py-3">
        <p className="flex items-center gap-2 text-xs font-medium text-heading">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2457d6] text-white">
            <PinIcon className="h-4 w-4" />
          </span>
          {listing.city}
        </p>
        <Link
          href={`/properties/${listing.id}`}
          aria-label={`View ${listing.title}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f2f2] text-[#8d8d8d] hover:text-heading"
        >
          <SearchIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
