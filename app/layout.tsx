import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ePropertyTree",
    template: "%s · ePropertyTree",
  },
  description:
    "To perfect property management. Built in Naija, for the global market. Landlords, tenants, and agents on one platform, with rent collection through Paystack.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-body">{children}</body>
    </html>
  );
}
