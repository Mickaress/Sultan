import { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cart from '../../assets/icons/cart.svg';
import { RootState } from '../../store/store';
import styles from './HeaderCart.module.scss';

interface HeaderCartProps {
  mobile?: boolean;
}

const HeaderCart: FC<HeaderCartProps> = ({ mobile }) => {
  const cartCount = useSelector((state: RootState) => state.cart.count);
  const cartPrice = useSelector((state: RootState) => state.cart.price);
  return (
    <div className={styles.HeaderCart}>
      <NavLink className={styles.link} to="/sultan/Cart">
        <div className={`${styles.img} ${mobile ? styles.mobile : ''}`}>
          <img src={cart} alt="cart" />
          <span>{cartCount}</span>
        </div>
      </NavLink>
      {!mobile && (
        <div className={styles.info}>
          <h1>Корзина</h1>
          <p>{cartPrice} ₸</p>
        </div>
      )}
    </div>
  );
};

export default HeaderCart;
