export type Intent = "sale" | "rent";
export type Kind = "bungalow" | "apartment" | "duplex" | "terrace";
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

export const PRICE_FLOOR = 0;
export const PRICE_CEILING = 4_950_000_000;

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
    kind: "duplex",
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
    title: "5 Bedroom Duplex in Lekki, Lagos Nigeria",
    price: 450_000_000,
    intent: "sale",
    kind: "duplex",
    company: "Perfect Constructions",
    area: 820,
    rooms: 5,
    baths: 5,
    beds: 5,
    city: "Lekki, Lagos",
    variant: "duplex",
    image: "/properties/duplex.png",
    featured: true,
  },
  {
    id: "ikoyi-apartment",
    title: "3 Bedroom Apartment in Ikoyi",
    price: 320_000_000,
    intent: "sale",
    kind: "apartment",
    company: "Palm Court Homes",
    area: 240,
    rooms: 3,
    baths: 3,
    beds: 3,
    city: "Ikoyi, Lagos",
    variant: "terrace",
  },
  {
    id: "ibadan-terrace",
    title: "4 Bedroom Terrace in Bodija Ibadan",
    price: 75_000_000,
    intent: "sale",
    kind: "terrace",
    company: "ePropertyTree Verified",
    area: 380,
    rooms: 4,
    baths: 3,
    beds: 4,
    city: "Ibadan",
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
    title: "2 Bedroom Apartment in Lekki",
    price: 4_500_000,
    intent: "rent",
    kind: "apartment",
    company: "Palm Court Homes",
    area: 110,
    rooms: 2,
    baths: 2,
    beds: 2,
    city: "Lekki, Lagos",
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
    title: "3 Bedroom Bungalow in GRA Port Harcourt",
    price: 3_200_000,
    intent: "rent",
    kind: "bungalow",
    company: "ePropertyTree Verified",
    area: 300,
    rooms: 3,
    baths: 2,
    beds: 3,
    city: "Port Harcourt",
    variant: "bungalow",
  },
  {
    id: "ikoyi-rent",
    title: "4 Bedroom Duplex in Old Ikoyi",
    price: 15_000_000,
    intent: "rent",
    kind: "duplex",
    company: "Palm Court Homes",
    area: 480,
    rooms: 4,
    baths: 4,
    beds: 5,
    city: "Ikoyi, Lagos",
    variant: "duplex",
  },
  {
    id: "ibadan-rent",
    title: "2 Bedroom Terrace in Jericho Ibadan",
    price: 1_800_000,
    intent: "rent",
    kind: "terrace",
    company: "ePropertyTree Verified",
    area: 140,
    rooms: 2,
    baths: 1,
    beds: 2,
    city: "Ibadan",
    variant: "terrace",
  },
  {
    id: "kuje-rent",
    title: "1 Bedroom Apartment in Kuje",
    price: 1_200_000,
    intent: "rent",
    kind: "apartment",
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

export const categories = ["Bungalow", "Duplex", "Apartment", "Terrace"] as const;
export const locations = [
  "Abuja (FCT)",
  "Lekki, Lagos",
  "Ikoyi, Lagos",
  "Port Harcourt",
  "Ibadan",
] as const;
