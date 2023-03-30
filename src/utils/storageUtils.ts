const LOCAL_STORAGE_KEY = 'products';
import { ProductState } from '../types/types';
import productsJson from '../models/data.json';

export const getProductsFromLocalStorage = (): ProductState => {
  let products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  if (Object.keys(products).length !== 0) {
    return products;
  } else {
    products = JSON.parse(JSON.stringify(productsJson));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
    return products;
  }
};

export const saveProductsToLocalStorage = (products: object): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
};
