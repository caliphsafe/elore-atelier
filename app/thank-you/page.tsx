import Link from "next/link";

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const booking = type === "booking";

  return (
    <main className="min-h-[72svh] bg-brand-bone text-brand-olive">
      <section className="editorial-container flex min-h-[72svh] items-center px-5 py-16 md:px-8 lg:px-12">
        <div className="max-w-4xl border-l border-brand-olive/25 pl-6 md:pl-10">
          <p className="mb-5 text-[10px] uppercase tracking-[.28em] text-brand-olive/60">ELÖRE ATELIER</p>
          <h1 className="serif-display text-[clamp(4rem,8vw,8rem)] leading-[.82] tracking-[-.055em]">
            Thank you.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-brand-olive/75 md:text-lg">
            {booking
              ? "Your request has been received. ELÖRE ATELIER will contact you to confirm your booking."
              : "Your message has been received. ELÖRE ATELIER will be in touch with you soon."}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className="btn-olive">Return Home</Link>
            {booking ? <Link href="/shop" className="btn-outline-olive">Explore the Collection</Link> : null}
          </div>
        </div>
      </section>
    </main>
  );
}
