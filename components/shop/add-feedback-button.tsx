"use client";
import { useEffect,useState } from "react";
import { useCart } from "@/components/cart/cart-provider";
import type { Product } from "@/lib/shopify/types";
export function AddFeedbackButton({product,compact=false}:{product:Product;compact?:boolean}){
 const {addItem}=useCart();const[added,setAdded]=useState(false);
 useEffect(()=>{if(!added)return;const t=window.setTimeout(()=>setAdded(false),1200);return()=>window.clearTimeout(t)},[added]);
 const unavailable=product.availableForSale===false||!product.variantId;
 return <button type="button" disabled={unavailable} onClick={e=>{e.preventDefault();e.stopPropagation();if(unavailable)return;addItem(product);setAdded(true)}} className={`inline-flex items-center justify-center rounded-full border transition ${compact?"min-h-[36px] px-3 py-2 text-[10px] tracking-[0.16em] sm:px-4 sm:text-[11px]":"min-h-[44px] px-6 py-3 text-xs"} uppercase ${unavailable?"cursor-not-allowed border-brand-ink/30 bg-brand-ink/10":"border-brand-ink bg-brand-ink hover:border-brand-olive hover:bg-brand-olive"}`} aria-label={unavailable?"Sold out":"Add to cart"}><span style={{color:unavailable?"rgba(56,64,42,.45)":"#fff"}}>{unavailable?"Sold Out":added?"Added":"Add to Cart"}</span></button>
}