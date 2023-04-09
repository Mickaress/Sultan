import { FC, useState } from 'react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import styles from './Cart.module.scss';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/cartSlice';
import CartItems from '../../components/CartItems/CartItems';
import { RootState } from '../../store/store';

interface CartProps {}

const Cart: FC<CartProps> = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const price = useSelector((state: RootState) => state.cart.price);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const order = () => {
    handleShow();
    dispatch(clearCart());
  };
  return (
    <>
      <Container>
        <div className={styles.title}>
          <h1>Корзина</h1>
        </div>
        {items.length === 0 ? (
          <h1 className={styles.empty}>Корзина пуста!</h1>
        ) : (
          <>
            <div className={styles.main}>
              {items.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </div>
            <div className={styles.order}>
              <p className={`${styles.price} ${styles.adaptiv}`}>{price} ₸</p>
              <div className={styles.order_button} onClick={order}>
                <Button type="big" text="Оформить заказ" />
              </div>
              <p className={`${styles.price} ${styles.adaptiv_none}`}>{price} ₸</p>
            </div>
          </>
        )}
      </Container>
      {showModal && <Modal showModal={showModal} handleClose={handleClose} />}
    </>
  );
};

export default Cart;
