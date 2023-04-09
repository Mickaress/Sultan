import { Product } from '../types/types';

interface useSortProps {
  products: Product[];
  sort: string;
}

export const useSort = ({ products, sort }: useSortProps) => {
  let sorted = [...products];
  switch (sort) {
    case 'ascName':
      sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'descName':
      sorted = sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'ascPrice':
      sorted = sorted.sort((a, b) => a.price - b.price);
      break;
    case 'descPrice':
      sorted = sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  return sorted;
};
