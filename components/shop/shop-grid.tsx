"use client";

import { useMemo, useState } from "react";
import { Product, ProductCollection } from "@/lib/shopify/types";
import { ProductCard } from "@/components/shop/product-card";

type ShopGridProps = { products: Product[] };
type FilterOption = { label: string; value: string };

function productCollections(product: Product): ProductCollection[] {
  if (product.collections?.length) return product.collections;
  if (product.category) return [{ handle: product.category.toLowerCase().replace(/\s+/g, "-"), title: product.category }];
  return [];
}

export function ShopGrid({ products }: ShopGridProps) {
  const [query, setQuery] = useState("all");
  const [search, setSearch] = useState("");

  const collections = useMemo<FilterOption[]>(() => {
    const map = new Map<string, string>();
    products.forEach((product) => productCollections(product).forEach((collection) => map.set(collection.handle, collection.title)));
    return [{ value: "all", label: "All" }, ...Array.from(map.entries()).map(([value, label]) => ({ value, label }))];
  }, [products]);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const handles = productCollections(product).map((collection) => collection.handle);
    const matchesCollection = query === "all" || handles.includes(query);
    const searchText = [product.title, product.description, product.category, ...(product.collections?.map((collection) => collection.title) ?? [])].filter(Boolean).join(" ").toLowerCase();
    return matchesCollection && searchText.includes(search.toLowerCase());
  }), [products, query, search]);

  return (
    <>
      <section className="border-y border-brand-olive/20 bg-brand-sand px-5 py-5 md:px-8 lg:px-12">
        <div className="editorial-container grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search hats..." className="contrast-input w-full border-b border-brand-olive/45 bg-transparent px-0 py-3 text-sm text-brand-olive outline-none placeholder:text-brand-olive/50 focus:border-brand-maroon" />
          <div className="flex flex-wrap gap-2">
            {collections.map((collection) => {
              const active = query === collection.value;
              return <button key={collection.value} type="button" onClick={() => setQuery(collection.value)} className={active ? "filter-active" : "filter-idle"}>{collection.label}</button>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-bone px-5 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
        <div className="editorial-container grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
        </div>
        {filteredProducts.length === 0 ? <div className="editorial-container mt-8 border-y border-brand-olive/25 py-7 text-sm leading-7 text-brand-olive/75">No pieces matched your search or filter.</div> : null}
      </section>
    </>
  );
}
