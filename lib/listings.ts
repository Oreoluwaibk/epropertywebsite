export type Intent = "sale" | "rent";
export type Kind = "bungalow" | "apartment" | "semi-detached" | "detached" | "flat" | "terrace";
export type RentPeriod = "month" | "year";
export type HouseVariant = "bungalow" | "terrace" | "duplex";

export type Listing = {
  id: string;
  title: string;
  price: number;
  intent: Intent;
  kind: Kind;
  company: string;
  area: number;
  rooms: number;
  baths: number;
  beds: number;
  city: string;
  variant: HouseVariant;
  image?: string;
  featured?: boolean;
};

export const propertyImages: Record<HouseVariant, string> = {
  bungalow: "/properties/bungalow.png",
  terrace: "/properties/terrace.png",
  duplex: "/properties/duplex.png",
};

export function listingImage(listing: Listing) {
  return listing.image ?? propertyImages[listing.variant];
}

export const PRICE_FROM = 5_000;
export const SALE_PRICE_MIN = 1_000_000;
export const SALE_PRICE_MAX = 4_950_000_000;
export const LETTING_MONTH_MIN = 20_000;
export const LETTING_MONTH_MAX = 5_000_000;
export const LETTING_YEAR_MIN = 250_000;
export const LETTING_YEAR_MAX = 50_000_000;

export function priceBounds(mode: "sale" | "letting-month" | "letting-year") {
  if (mode === "letting-month") {
    return { min: Math.max(PRICE_FROM, LETTING_MONTH_MIN), max: LETTING_MONTH_MAX, step: 5_000 };
  }
  if (mode === "letting-year") {
    return { min: Math.max(PRICE_FROM, LETTING_YEAR_MIN), max: LETTING_YEAR_MAX, step: 50_000 };
  }
  return { min: Math.max(PRICE_FROM, SALE_PRICE_MIN), max: SALE_PRICE_MAX, step: 1_000_000 };
}

export function kindLabel(kind: Kind) {
  if (kind === "semi-detached") return "Semi detached duplex";
  if (kind === "detached") return "Detached duplex";
  if (kind === "flat") return "Flat";
  return kind.charAt(0).toUpperCase() + kind.slice(1);
}

export function formatNaira(value: number) {
  return `N${Math.round(value).toLocaleString("en-NG")}`;
}

export const listings: Listing[] = [
  {
    id: "kuje-bungalow-1",
    title: "2 Bedroom Bungalow in kuje Abuja Nigeria",
    price: 40_000_000,
    intent: "sale",
    kind: "bungalow",
    company: "Teckdock Africa Constructions",
    area: 440,
    rooms: 2,
    baths: 2,
    beds: 4,
    city: "Abuja (FCT)",
    variant: "bungalow",
    image: "/properties/bungalow.png",
    featured: true,
  },
  {
    id: "kuje-bungalow-2",
    title: "2 Bedroom Bungalow in kuje Abuja Nigeria",
    price: 40_000_000,
    intent: "sale",
    kind: "bungalow",
    company: "Teckdock Africa Constructions",
    area: 440,
    rooms: 2,
    baths: 2,
    beds: 4,
    city: "Abuja (FCT)",
    variant: "bungalow",
  },
  {
    id: "kuje-bungalow-3",
    title: "2 Bedroom Bungalow in kuje Abuja Nigeria",
    price: 40_000_000,
    intent: "sale",
    kind: "bungalow",
    company: "Teckdock Africa Constructions",
    area: 440,
    rooms: 2,
    baths: 2,
    beds: 4,
    city: "Abuja (FCT)",
    variant: "bungalow",
  },
  {
    id: "kuje-bungalow-4",
    title: "3 Bedroom Bungalow in kuje Abuja Nigeria",
    price: 48_500_000,
    intent: "sale",
    kind: "bungalow",
    company: "Teckdock Africa Constructions",
    area: 520,
    rooms: 3,
    baths: 2,
    beds: 4,
    city: "Abuja (FCT)",
    variant: "bungalow",
  },
  {
    id: "kuje-bungalow-5",
    title: "3 Bedroom Bungalow in Lugbe Abuja Nigeria",
    price: 62_000_000,
    intent: "sale",
    kind: "bungalow",
    company: "Teckdock Africa Constructions",
    area: 610,
    rooms: 3,
    baths: 3,
    beds: 5,
    city: "Abuja (FCT)",
    variant: "terrace",
  },
  {
    id: "wuse-duplex",
    title: "4 Bedroom Duplex in Wuse, Abuja Nigeria",
    price: 180_000_000,
    intent: "sale",
    kind: "semi-detached",
    company: "Perfect Constructions",
    area: 640,
    rooms: 4,
    baths: 4,
    beds: 4,
    city: "Abuja (FCT)",
    variant: "terrace",
    image: "/properties/terrace.png",
    featured: true,
  },
  {
    id: "lekki-duplex",
    title: "5 Bedroom Detached Duplex in Lagos - Island, Nigeria",
    price: 450_000_000,
    intent: "sale",
    kind: "detached",
    company: "Perfect Constructions",
    area: 820,
    rooms: 5,
    baths: 5,
    beds: 5,
    city: "Lagos - Island",
    variant: "duplex",
    image: "/properties/duplex.png",
    featured: true,
  },
  {
    id: "ikoyi-apartment",
    title: "3 Bedroom Apartment in Lagos - Island",
    price: 320_000_000,
    intent: "sale",
    kind: "apartment",
    company: "Palm Court Homes",
    area: 240,
    rooms: 3,
    baths: 3,
    beds: 3,
    city: "Lagos - Island",
    variant: "terrace",
  },
  {
    id: "ibadan-terrace",
    title: "4 Bedroom Terrace in Oyo",
    price: 75_000_000,
    intent: "sale",
    kind: "terrace",
    company: "ePropertyTree Verified",
    area: 380,
    rooms: 4,
    baths: 3,
    beds: 4,
    city: "Oyo",
    variant: "terrace",
  },
  {
    id: "kuje-starter",
    title: "1 Bedroom Bungalow in Kuje",
    price: 18_000_000,
    intent: "sale",
    kind: "bungalow",
    company: "Teckdock Africa Constructions",
    area: 180,
    rooms: 1,
    baths: 1,
    beds: 1,
    city: "Abuja (FCT)",
    variant: "bungalow",
  },
  {
    id: "lekki-rent",
    title: "2 Bedroom Apartment in Lagos - Mainland",
    price: 4_500_000,
    intent: "rent",
    kind: "apartment",
    company: "Palm Court Homes",
    area: 110,
    rooms: 2,
    baths: 2,
    beds: 2,
    city: "Lagos - Mainland",
    variant: "duplex",
  },
  {
    id: "abuja-rent",
    title: "3 Bedroom Apartment in Wuse 2",
    price: 6_800_000,
    intent: "rent",
    kind: "apartment",
    company: "ePropertyTree Verified",
    area: 160,
    rooms: 3,
    baths: 2,
    beds: 3,
    city: "Abuja (FCT)",
    variant: "terrace",
  },
  {
    id: "ph-rent",
    title: "3 Bedroom Bungalow in Rivers",
    price: 3_200_000,
    intent: "rent",
    kind: "bungalow",
    company: "ePropertyTree Verified",
    area: 300,
    rooms: 3,
    baths: 2,
    beds: 3,
    city: "Rivers",
    variant: "bungalow",
  },
  {
    id: "ikoyi-rent",
    title: "4 Bedroom Detached Duplex in Jos",
    price: 15_000_000,
    intent: "rent",
    kind: "detached",
    company: "Palm Court Homes",
    area: 480,
    rooms: 4,
    baths: 4,
    beds: 5,
    city: "Jos",
    variant: "duplex",
  },
  {
    id: "ibadan-rent",
    title: "2 Bedroom Flat in Jos",
    price: 1_800_000,
    intent: "rent",
    kind: "flat",
    company: "ePropertyTree Verified",
    area: 140,
    rooms: 2,
    baths: 1,
    beds: 2,
    city: "Jos",
    variant: "terrace",
  },
  {
    id: "kuje-rent",
    title: "1 Bedroom Flat in Kuje",
    price: 1_200_000,
    intent: "rent",
    kind: "flat",
    company: "Teckdock Africa Constructions",
    area: 55,
    rooms: 1,
    baths: 1,
    beds: 1,
    city: "Abuja (FCT)",
    variant: "bungalow",
  },
];

export function getListing(id: string) {
  return listings.find((listing) => listing.id === id);
}

export const categories = [
  "Bungalow",
  "Semi detached duplex",
  "Detached duplex",
  "Flat",
  "Apartment",
  "Terrace",
] as const;

export function categoryToKind(category: string): Kind | null {
  const map: Record<string, Kind> = {
    Bungalow: "bungalow",
    "Semi detached duplex": "semi-detached",
    "Detached duplex": "detached",
    Flat: "flat",
    Apartment: "apartment",
    Terrace: "terrace",
  };
  return map[category] ?? null;
}

export const locations = [
  "Abuja (FCT)",
  "Lagos - Island",
  "Lagos - Mainland",
  "Oyo",
  "Rivers",
  "Jos",
] as const;
