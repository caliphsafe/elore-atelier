import Link from "next/link";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/about", label: "About" },
  { href: "/haymaker", label: "Haymaker" },
  { href: "/custom", label: "Custom" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f5f0]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg tracking-[0.25em]">
          ELÖRE
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm uppercase tracking-[0.18em]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
