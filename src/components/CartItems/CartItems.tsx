import { FC } from 'react';
import styles from './CartItems.module.scss';
import Button from '../Button/Button';
import { CartItem } from '../../types/types';
import { addCount, lessCount, removeItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import SizeInfo from '../SizeInfo/SizeInfo';

interface CartItemProps {
  item: CartItem;
}

const CartItems: FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddCount = () => {
    dispatch(addCount(item.product));
  };
  const handleLessCount = () => {
    dispatch(lessCount(item.product));
  };
  const handleRemoveItem = () => {
    dispatch(removeItem(item.product));
  };
  return (
    <div className={styles.CartItem}>
      <div className={styles.item}>
        <div className={styles.block}>
          <img className={styles.image} src={item.product.img} alt="" />
          <div className={styles.info}>
            <SizeInfo size={item.product.size} typeSize={item.product.type_size} />
            <div className={styles.name}>
              <h1>{item.product.name}</h1>
            </div>
            <div className={styles.description}>
              <p>{item.product.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={`${styles.line} ${styles.display_none}`}></div>
          <div className={styles.counter}>
            <Button text="-" type="counter" onClick={handleLessCount} />
            <span>{item.count}</span>
            <Button text="+" type="counter" onClick={handleAddCount} />
          </div>
          <div className={styles.line}></div>
          <div className={styles.price}>
            <p>{item.product.price * item.count} ₸</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.button}>
            <Button img="delete" type="round" onClick={handleRemoveItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
