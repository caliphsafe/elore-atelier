import "./globals.css";
import "./cultural-backgrounds.css";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "ELÖRE Atelier",
  description: "Boston-based handcrafted hat atelier by founder and designer Salome Kopasz."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="luxury-shell elore-cultural-shell bg-brand-white text-brand-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
