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
      <section className="shop-tools">
        <div className="editorial-container shop-tools__inner">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search hats..."
            className="shop-tools__search"
          />
          <div className="shop-tools__filters">
            {collections.map((collection) => {
              const active = query === collection.value;
              return (
                <button
                  key={collection.value}
                  type="button"
                  onClick={() => setQuery(collection.value)}
                  className={`shop-tools__filter ${active ? "is-active" : ""}`}
                >
                  {collection.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="shop-products">
        <div className="editorial-container shop-products__grid">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        {filteredProducts.length === 0 ? (
          <div className="editorial-container shop-products__empty">No pieces matched your search or filter.</div>
        ) : null}
      </section>
    </>
  );
}
