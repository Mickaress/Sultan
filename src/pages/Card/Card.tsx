import { FC } from 'react';
import Container from '../../components/Container/Container';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Card.module.scss';
import { NavLink } from 'react-router-dom';
import ml from '../../assets/icons/ml.svg';
import gr from '../../assets/icons/gr.svg';
import Button from '../../components/Button/Button';
import { addCount, lessCount } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
interface CardProps {}

const Card: FC<CardProps> = () => {
  const [showDescription, setShowDescription] = useState(false);
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.url === Number(productId)),
  );
  const item = useSelector((state: RootState) =>
    state.cart.items.find((p) => p.product.id === product?.id),
  );
  const count = item?.count || 0;
  function image(type_size: string | undefined) {
    switch (type_size) {
      case 'g':
        return <img src={gr} alt="" />;
      case 'ml':
        return <img src={ml} alt="" />;
    }
  }
  const dispatch = useDispatch();
  const handleAddCount = () => {
    if (product) dispatch(addCount(product));
  };
  const handleLessCount = () => {
    if (product) dispatch(lessCount(product));
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
          <div className={styles.size}>
            {image(product?.type_size)}
            <span>
              {product?.size} {product?.type_size}
            </span>
          </div>
          <div className={styles.cart}>
            <p className={styles.price}>{product?.price} ₸</p>
            <div className={styles.counter}>
              <button onClick={handleLessCount}>-</button>
              <span>{count}</span>
              <button onClick={handleAddCount}>+</button>
            </div>
            <div onClick={handleAddCount} className={styles.display}>
              <Button text="В корзину" img="cart" type="small" />
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.adaptiv}>
              <div onClick={handleAddCount} className={styles.display_none}>
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
