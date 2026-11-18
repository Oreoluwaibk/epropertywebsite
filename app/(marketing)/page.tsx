import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: { absolute: "ePropertyTree" },
  description:
    "Everything your property needs in one app. Listings, leases, and rent collection for landlords, tenants, and agents in Nigeria.",
};

export default function Page() {
  return <HomePage />;
}
