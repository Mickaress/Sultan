import { NavLink } from 'react-router-dom';
import cart from '../../assets/icons/cart.svg';
import logo from '../../assets/icons/logo.svg';
import Button from '../Button/Button';
import Contact from '../Contact/Contact';
import Container from '../Container/Container';
import InformationBlock from '../InformationBlock/InformationBlock';
import Input from '../Input/Input';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Header = () => {
  const cartCount = useSelector((state: RootState) => state.cart.count);
  const cartPrice = useSelector((state: RootState) => state.cart.price);
  return (
    <header>
      <div className={styles.top}>
        <Container>
          <div className={styles.content}>
            <div className={styles.information}>
              <InformationBlock
                img="location"
                h1="г. Кокчетав, ул. Ж. Ташенова 129Б "
                p="(Рынок Восточный)"
              />
              <InformationBlock img="mail" h1="opt.sultan@mail.ru " p="На связи в любое время" />
            </div>
            <Navigation />
          </div>
        </Container>
      </div>
      <div className={styles.bot}>
        <Container>
          <div className={styles.content}>
            <NavLink to="/sultan/">
              <img src={logo} alt="" />
            </NavLink>
            <NavLink className={styles.link} to="/sultan/">
              <Button text="Каталог" type="big" img="blocks" />
            </NavLink>
            <Input img="search" text="Поиск..." />
            <Contact image />
            <div className={styles.price_list}>
              <Button text="Прайс-лист" type="big" img="download" />
            </div>
            <div className={styles.cart}>
              <NavLink className={styles.link} to="/sultan/Cart">
                <div className={styles.cart_img}>
                  <img src={cart} alt="" />
                  <span>{cartCount}</span>
                </div>
              </NavLink>
              <div className={styles.cart_info}>
                <h1>Корзина</h1>
                <p>{cartPrice} ₸</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
