"use client";
import {useMemo,useState} from "react";
import Image from "next/image";
import {Product,ProductCollection} from "@/lib/shopify/types";
import {ProductCard} from "@/components/shop/product-card";

type ShopGridProps={products:Product[]};
function productCollections(product:Product):ProductCollection[]{if(product.collections?.length)return product.collections;if(product.category)return[{handle:product.category.toLowerCase().replace(/\s+/g,"-"),title:product.category}];return[]}
export function ShopGrid({products}:ShopGridProps){
 const[query,setQuery]=useState("all");const[search,setSearch]=useState("");
 const collections=useMemo(()=>{const map=new Map<string,string>();products.forEach(p=>productCollections(p).forEach(c=>map.set(c.handle,c.title)));return[{value:"all",label:"All"},...Array.from(map.entries()).map(([value,label])=>({value,label}))]},[products]);
 const filtered=useMemo(()=>products.filter(p=>{const handles=productCollections(p).map(c=>c.handle);const collection=query==="all"||handles.includes(query);const text=[p.title,p.description,p.category,...(p.collections?.map(c=>c.title)??[])].filter(Boolean).join(" ").toLowerCase();return collection&&text.includes(search.toLowerCase())}),[products,query,search]);
 return <>
  <section className="surface-sand border-y border-brand-olive/20"><div className="editorial-container grid gap-5 px-5 py-6 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search hats..." className="contrast-input w-full border-b border-brand-olive bg-transparent px-0 py-3 text-sm text-brand-olive outline-none placeholder:text-brand-olive/45"/><div className="flex flex-wrap gap-2">{collections.map(c=>{const active=query===c.value;return <button key={c.value} type="button" onClick={()=>setQuery(c.value)} className={active?"filter-active":"filter-idle"}>{c.label}</button>})}</div></div></section>
  <section className="surface-bone"><div className="editorial-container px-5 py-14 md:px-8 lg:px-12 lg:py-20">
   <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-20">
    {filtered.map((product,i)=><div key={product.id} className={`${i%7===0?"lg:col-span-7":i%7===1?"lg:col-span-5 lg:pt-28":i%7===2?"lg:col-span-4":i%7===3?"lg:col-span-4 lg:pt-16":i%7===4?"lg:col-span-4":i%7===5?"lg:col-span-5":"lg:col-span-7 lg:pt-20"}`}><ProductCard product={product} index={i}/></div>)}
   </div>
   {filtered.length===0?<p className="mt-12 border-y border-brand-olive/25 py-8 text-sm text-brand-olive">No pieces matched your search or filter.</p>:null}
  </div></section>
  <section className="surface-olive"><div className="editorial-container grid gap-8 px-5 py-12 md:px-8 lg:grid-cols-12 lg:px-12 lg:py-16"><div className="relative min-h-[300px] lg:col-span-5"><Image src="/images/studio/materials.jpg" alt="ELÖRE atelier materials" fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover"/></div><div className="flex items-center lg:col-span-6 lg:col-start-7"><p className="serif-display text-4xl leading-[.95] text-brand-bone md:text-6xl">Every collection begins with material, hand, and form.</p></div></div></section>
 </>
}
