import Image from "next/image";
import { ShopGrid } from "@/components/shop/shop-grid";
import { getProducts } from "@/lib/shopify/storefront";

export default async function ShopPage(){
 const products=await getProducts();
 return <>
  <section className="surface-bone overflow-hidden">
   <div className="editorial-container grid min-h-[62svh] gap-8 px-5 py-12 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-16">
    <div className="flex flex-col justify-end lg:col-span-6">
     <p className="eyebrow-olive">Shop / Current Collection</p>
     <h1 className="serif-display mt-5 text-[clamp(4.8rem,10vw,9.5rem)] leading-[.76] tracking-[-.065em] text-brand-olive">All Handcrafted Hats</h1>
     <p className="mt-7 max-w-xl text-base leading-8 text-brand-olive/80 md:text-lg">Explore Elöre pieces shaped through natural materials, intentional design, and the art of modern millinery.</p>
    </div>
    <div className="relative min-h-[360px] lg:col-span-6 lg:min-h-[540px]"><Image src="/images/home/collections/signature.jpg" alt="ELÖRE handcrafted hats" fill priority sizes="(max-width:1024px) 100vw,50vw" className="object-cover"/><div className="absolute bottom-0 left-0 bg-brand-sand px-5 py-4 text-xs uppercase tracking-[.28em] text-brand-olive">{products.length} Featured Products</div></div>
   </div>
  </section>
  <ShopGrid products={products}/>
 </>
}
