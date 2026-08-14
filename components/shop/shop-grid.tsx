"use client";

import { useMemo, useState } from "react";
import { Product, ProductCollection } from "@/lib/shopify/types";
import { ProductCard } from "@/components/shop/product-card";

type ShopGridProps = {
  products: Product[];
};

type FilterOption = {
  label: string;
  value: string;
};

function productCollections(product: Product): ProductCollection[] {
  if (product.collections?.length) {
    return product.collections;
  }

  if (product.category) {
    return [
      {
        handle: product.category.toLowerCase().replace(/\s+/g, "-"),
        title: product.category
      }
    ];
  }

  return [];
}

export function ShopGrid({ products }: ShopGridProps) {
  const [query, setQuery] = useState("all");
  const [search, setSearch] = useState("");

  const collections = useMemo<FilterOption[]>(() => {
    const map = new Map<string, string>();

    products.forEach((product) => {
      productCollections(product).forEach((collection) => {
        map.set(collection.handle, collection.title);
      });
    });

    const values = Array.from(map.entries()).map(([value, label]) => ({
      value,
      label
    }));

    return [{ value: "all", label: "All" }, ...values];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const collectionHandles = productCollections(product).map(
        (collection) => collection.handle
      );
      const matchesCollection =
        query === "all" ? true : collectionHandles.includes(query);

      const searchText = [
        product.title,
        product.description,
        product.category,
        ...(product.collections?.map((collection) => collection.title) ?? [])
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      return matchesCollection && matchesSearch;
    });
  }, [products, query, search]);

  return (
    <>
      <section className="section-pad pt-0">
        <div className="editorial-container rounded-luxe border thin-border bg-white p-4 shadow-soft sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search hats..."
                className="w-full rounded-full border thin-border bg-white px-5 py-3 text-sm text-brand-ink outline-none transition focus:border-brand-mocha"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {collections.map((collection) => {
                const active = query === collection.value;
                return (
                  <button
                    key={collection.value}
                    type="button"
                    onClick={() => setQuery(collection.value)}
                    className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.24em] transition ${
                      active
                        ? "border-brand-ink bg-brand-ink text-white"
                        : "border-brand-ink text-brand-ink hover:border-brand-mocha hover:text-brand-mocha"
                    }`}
                  >
                    {collection.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="editorial-container grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
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
