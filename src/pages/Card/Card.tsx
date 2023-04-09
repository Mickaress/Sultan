import { FC } from 'react';
import Container from '../../components/Container/Container';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Card.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { addAny } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import SizeInfo from '../../components/SizeInfo/SizeInfo';
interface CardProps {}

const Card: FC<CardProps> = () => {
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);
  const [count, setCount] = useState(0);
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.url === Number(productId)),
  );
  const handleAddToCart = () => {
    if (product && count > 0) {
      dispatch(
        addAny({
          product: product,
          num: count,
        }),
      );
      setCount(0);
    }
  };
  return (
    <Container>
      <div className={styles.links}>
        <NavLink to="/sultan/">
          <p className={styles.catalog}>Каталог</p>
        </NavLink>
        <p className={styles.name}>{product?.name}</p>
      </div>
      <div className={styles.main}>
        <div className={styles.image}>
          <img src={product?.img} alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.green}>В наличии</p>
          <h1>{product?.name}</h1>
          <SizeInfo size={product?.size} typeSize={product?.type_size} />
          <div className={styles.cart}>
            <p className={styles.price}>{product?.price} ₸</p>
            <div className={styles.counter}>
              <Button
                disabled={count === 0 ? true : false}
                text="-"
                type="counter"
                onClick={() => setCount(count - 1)}
              />
              <span>{count}</span>
              <Button text="+" type="counter" onClick={() => setCount(count + 1)} />
            </div>
            <div onClick={handleAddToCart} className={styles.display}>
              <Button text="В корзину" img="cart" type="small" />
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.adaptiv}>
              <div onClick={handleAddToCart} className={styles.display_none}>
                <Button text="В корзину" img="cart" type="small" />
              </div>
              <Button type="white" img="link" />
            </div>
            <div className={styles.buttons}>
              <Button
                type="white"
                text="При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области"
              />
              <Button type="white" text="Прайс-лист" img="blackDownload" />
            </div>
          </div>
          <div className={styles.text}>
            <p>
              Произоводитель: <span>{product?.maker}</span>
            </p>
            <p>
              Бренд: <span>{product?.brand}</span>
            </p>
            <div className={styles.tags}>
              <p>Тип: </p>
              {product?.type_care.map((tag, index) => {
                return <span key={index}>{tag}</span>;
              })}
            </div>
          </div>
          <div className={styles.description}>
            {showDescription ? (
              <button onClick={() => setShowDescription(false)}>Описание &#9650;</button>
            ) : (
              <button onClick={() => setShowDescription(true)}>Описание &#9660;</button>
            )}
            {showDescription ? <p>{product?.description}</p> : ''}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
