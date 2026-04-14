import "./globals.css";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "ELÖRE Atelier",
  description: "Luxury fashion e-commerce experience for handcrafted hats."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="luxury-shell bg-brand-white text-brand-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
