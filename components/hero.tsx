export function Hero() {
  return (
    <section className="min-h-[78vh] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/50">
            ELÖRE Atelier
          </p>
          <h1 className="max-w-3xl text-5xl leading-none md:text-7xl">
            Handcrafted hats with a luxurious editorial presence.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-black/65">
            A custom headless Shopify storefront designed to blend fashion storytelling,
            collection merchandising, and bespoke hat ordering.
          </p>
        </div>
        <div className="aspect-[4/5] rounded-[2rem] border border-black/10 bg-[#e7dfd2]" />
      </div>
    </section>
  );
}
