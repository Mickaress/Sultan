export interface Product {
  id: number;
  img: string;
  name: string;
  type_size: 'g' | 'ml';
  size: number;
  url: number;
  maker: string;
  brand: string;
  description: string;
  price: number;
  type_care: string[];
}

export interface ProductState {
  products: Product[];
}

export interface SortState {
  value: string;
}

export interface CartItem {
  id: number;
  product: Product;
  count: number;
}

export interface CartState {
  items: CartItem[];
  count: number;
  price: number;
}

export interface BrandState {
  brands: string[];
}

export interface PriceState {
  min: number;
  max: number;
}

export interface CareState {
  care: string;
}
