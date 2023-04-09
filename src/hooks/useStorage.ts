import productsJson from '../models/data.json';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';
import { setCart } from '../store/cartSlice';

export const getDataFromLocalStorage = () => {
  const dispatch = useDispatch();
  const localProducts = localStorage.getItem('products');
  if (localProducts && localProducts?.length !== 0) {
    dispatch(setProducts(JSON.parse(String(localProducts))));
  } else {
    const products = JSON.parse(JSON.stringify(productsJson));
    localStorage.setItem('products', JSON.stringify(products));
    dispatch(setProducts(products));
  }
  const localCart = localStorage.getItem('cart');
  if (localCart) {
    dispatch(setCart(JSON.parse(localCart)));
  }
};
