import { Product } from '../types/types';

interface useFilterProps {
  products: Product[];
  min: number;
  max: number;
  care: string;
  checkedBrands: string[];
}

export const useFilter = ({ products, min, max, care, checkedBrands }: useFilterProps) => {
  let filtered = [...products];
  // фильтр по цене
  if (min !== 0 || max !== 0) {
    filtered = filtered.filter((product) => {
      return min !== 0 && max !== 0
        ? product.price >= min && product.price <= max
        : min !== 0
        ? product.price >= min
        : product.price <= max;
    });
  }

  // фильтр по уходу
  if (care !== '') {
    filtered = filtered.filter((product) => product.type_care.includes(care));
  }

  // фильтр по брендам
  if (checkedBrands.length > 0) {
    filtered = filtered.filter((product) => checkedBrands.includes(product.brand));
  }

  return filtered;
};
