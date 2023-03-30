import { FC } from 'react';
import styles from './CartItems.module.scss';
import Button from '../Button/Button';
import ml from '../../assets/icons/ml.svg';
import gr from '../../assets/icons/gr.svg';
import { CartItem } from '../../types/types';
import { addCount, lessCount, removeItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

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
            <div className={styles.size}>
              <img src={item.product.type_size === 'g' ? gr : ml} alt="" />
              <span>
                {item.product.size} {item.product.type_size}
              </span>
            </div>
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
            <button onClick={handleLessCount}>-</button>
            <span>{item.count}</span>
            <button onClick={handleAddCount}>+</button>
          </div>
          <div className={styles.line}></div>
          <div className={styles.price}>
            <p>{item.product.price * item.count} ₸</p>
          </div>
          <div className={styles.line}></div>
          <div onClick={handleRemoveItem} className={styles.button}>
            <Button img="delete" type="round" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
