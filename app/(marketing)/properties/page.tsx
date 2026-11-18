import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertiesExplorer } from "@/components/properties/PropertiesExplorer";

export const metadata: Metadata = { title: "Properties" };

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-white" />}>
      <PropertiesExplorer />
    </Suspense>
  );
}
