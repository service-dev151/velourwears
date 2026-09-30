export type Size = 'Small' | 'Large';

export type Category = 'stitched' | 'unstitched' | 'girls';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  description: string;
  fabric: string;
  color: string;
  colorHex: string;
  sizes: Size[];
  frontImage: string;
  backImage?: string; // Matching back view for stitched kurtis
  isFeatured?: boolean;
  badge?: string;
  details: string[];
  fabricLength?: string; // For unstitched kurtis
  careInstructions: string;
  sku: string;
}

export interface CartItem {
  product: Product;
  selectedSize: Size;
  quantity: number;
}
