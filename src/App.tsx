import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FooterMobile from './components/FooterMobile/FooterMobile';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './pages/Card/Card';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import { getDataFromLocalStorage } from './hooks/useStorage';
function App() {
  getDataFromLocalStorage();
  return (
    <BrowserRouter>
      <Header />
      <HeaderMobile />
      <Routes>
        <Route path="/sultan/" element={<Catalog />} />
        <Route path="/sultan/cart" element={<Cart />} />
        <Route path="/sultan/card/:productId" element={<Card />}></Route>
      </Routes>
      <Footer />
      <FooterMobile />
    </BrowserRouter>
  );
}

export default App;
