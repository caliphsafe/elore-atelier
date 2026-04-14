"use client";

import { useMemo, useState } from "react";
import { Product } from "@/lib/shopify/types";
import { ProductCard } from "@/components/shop/product-card";

type ShopGridProps = {
  products: Product[];
};

export function ShopGrid({ products }: ShopGridProps) {
  const [query, setQuery] = useState("all");
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const values = Array.from(
      new Set(products.map((product) => product.category).filter(Boolean))
    ) as string[];
    return ["all", ...values];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        query === "all" ? true : product.category === query;

      const searchText = `${product.title} ${product.description} ${product.category ?? ""}`.toLowerCase();
      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, query, search]);

  return (
    <>
      <section className="section-pad pt-0">
        <div className="editorial-container rounded-luxe border thin-border bg-white p-4 shadow-soft sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">Browse the Collection</p>
              <div className="mt-3">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search hats..."
                  className="w-full rounded-full border thin-border bg-white px-5 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-mocha"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = query === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setQuery(category)}
                    className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em] transition ${
                      active
                        ? "border-brand-ink bg-brand-ink text-white"
                        : "border-brand-ink text-brand-ink hover:border-brand-mocha hover:text-brand-mocha"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="editorial-container mt-8 rounded-luxe border thin-border bg-[#f7f1ea] p-8 text-sm leading-7 text-brand-ink/72 shadow-soft">
            No pieces matched your search or filter.
          </div>
        ) : null}
      </section>
    </>
  );
}
