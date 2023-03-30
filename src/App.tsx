import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FooterMobile from './components/FooterMobile/FooterMobile';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './pages/Card/Card';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/productsSlice';
import { setCart } from './store/cartSlice';
import productsJson from './models/data.json';
// TODO: адаптив
// TODO: форма добавления, удаления и редактирования (придумать как вводить несколько тегов)
function App() {
  const dispatch = useDispatch();
  const localProducts = localStorage.getItem('products');
  if (localProducts && localProducts?.length !== 0) {
    dispatch(setProducts(JSON.parse(String(localProducts))));
  } else {
    const productsJSON = JSON.parse(JSON.stringify(productsJson));
    localStorage.setItem('products', JSON.stringify(productsJSON));
    dispatch(setProducts(productsJSON));
  }
  const localCart = localStorage.getItem('cart');
  if (localCart) {
    dispatch(setCart(JSON.parse(localCart)));
  }
  return (
    <BrowserRouter>
      <Header />
      <HeaderMobile />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/card/:productId" element={<Card />}></Route>
      </Routes>
      <Footer />
      <FooterMobile />
    </BrowserRouter>
  );
}

export default App;
