import wallets from "@/assets/cat-wallets.jpg";
import belts from "@/assets/cat-belts.jpg";
import bags from "@/assets/cat-bags.jpg";
import jackets from "@/assets/cat-jackets.jpg";
import pBelt from "@/assets/p-belt.jpg";
import pWalletTan from "@/assets/p-wallet-tan.jpg";
import pWalletBlack from "@/assets/p-wallet-black.jpg";
import pDuffle from "@/assets/p-duffle.jpg";
import pSling from "@/assets/p-sling.jpg";
import pJacket from "@/assets/p-jacket.jpg";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
};

export const categories: Category[] = [
  { slug: "wallets", name: "Wallets", tagline: "Explore Collection", image: wallets },
  { slug: "belts", name: "Belts", tagline: "Explore Collection", image: belts },
  { slug: "bags", name: "Bags", tagline: "Explore Collection", image: bags },
  { slug: "jackets", name: "Jackets", tagline: "Explore Collection", image: jackets },
];

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  color: string;
  material: string;
  badge?: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "classic-leather-belt",
    name: "Classic Leather Belt",
    slug: "classic-leather-belt",
    category: "belts",
    price: 799,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 348,
    image: pBelt,
    color: "Brown",
    material: "Full-Grain Leather",
    badge: "Bestseller",
    description:
      "A timeless full-grain leather belt with solid brass buckle. Hand-finished edges and durable stitching designed to age beautifully with everyday wear.",
  },
  {
    id: "tan-leather-wallet",
    name: "Tan Leather Wallet",
    slug: "tan-leather-wallet",
    category: "wallets",
    price: 699,
    originalPrice: 1099,
    rating: 4.5,
    reviews: 256,
    image: pWalletTan,
    color: "Tan",
    material: "Vegetable-Tanned Leather",
    description:
      "Slim bifold crafted from premium vegetable-tanned leather. Eight card slots, two cash compartments and an RFID-shield lining.",
  },
  {
    id: "premium-bifold-wallet",
    name: "Premium Bifold Wallet",
    slug: "premium-bifold-wallet",
    category: "wallets",
    price: 899,
    rating: 4.7,
    reviews: 512,
    image: pWalletBlack,
    color: "Black",
    material: "Nappa Leather",
    badge: "New",
    description:
      "Refined bifold in supple nappa leather with subtle pebble grain. Built for years of daily carry.",
  },
  {
    id: "leather-duffle-bag",
    name: "Leather Duffle Bag",
    slug: "leather-duffle-bag",
    category: "bags",
    price: 2999,
    originalPrice: 4499,
    rating: 4.5,
    reviews: 198,
    image: pDuffle,
    color: "Cognac",
    material: "Full-Grain Leather",
    description:
      "Travel-ready weekender with reinforced base, brass hardware and a detachable shoulder strap.",
  },
  {
    id: "leather-sling-bag",
    name: "Leather Sling Bag",
    slug: "leather-sling-bag",
    category: "bags",
    price: 1599,
    rating: 4.4,
    reviews: 164,
    image: pSling,
    color: "Brown",
    material: "Pebble Leather",
    description:
      "Compact crossbody with secure zip closure, adjustable strap and three interior compartments.",
  },
  {
    id: "classic-leather-jacket",
    name: "Classic Leather Jacket",
    slug: "classic-leather-jacket",
    category: "jackets",
    price: 4999,
    originalPrice: 7999,
    rating: 4.6,
    reviews: 312,
    image: pJacket,
    color: "Cognac",
    material: "Lamb Leather",
    badge: "Limited",
    description:
      "Tailored silhouette in soft lamb leather with brushed silver hardware. A modern heirloom for everyday wear.",
  },
];

export const formatINR = (v: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(v);
