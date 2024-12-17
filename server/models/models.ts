export interface Category {
  category_id: string;
  name: string;
  created_at: string;
}

export interface Collection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface Inventory {
  product_id: string;
  sku: string;
  color: string;
  size: string;
  list_price: number;
  discount: number;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
}

export interface ProductDetail {
  product_id: string;
  title: string;
  description_item: string;
}

interface ProductReview {
  product_id: string;
  user_id: string;
  rating: number;
  content: string;
  created_at: string;
}

export interface Product {
  product_id: string;
  name: string;
  description: string;
  category: string;
  collection: string;
  created_at: string;
}

export interface User {
  user_id: string;
  name: string;
  avatar_url: string;
}
