import { WishlistPageContent } from "@/components/wishlist/wishlist-page-content";
import { getProducts } from "@/lib/shopify/storefront";

export default async function WishlistPage() {
  const products = await getProducts();

  return <WishlistPageContent products={products} />;
}
