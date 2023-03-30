import { FC } from 'react';
import ml from '../../assets/icons/ml.svg';
import gr from '../../assets/icons/gr.svg';
import Button from '../Button/Button';
import styles from './ProductListItem.module.scss';
import { Product } from '../../types/types';
import { useDispatch } from 'react-redux';
import { addCount } from '../../store/cartSlice';
import { NavLink } from 'react-router-dom';
import { deleteProduct } from '../../store/productsSlice';
import { useState } from 'react';
import ChangeProductsModal from '../changeProductsModal/changeProductsModal';

interface ProductListItemProps {
  product: Product;
}

function image(type_size: string) {
  switch (type_size) {
    case 'g':
      return <img src={gr} alt="" />;
    case 'ml':
      return <img src={ml} alt="" />;
  }
}

const ProductListItem: FC<ProductListItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleAddCount = () => {
    dispatch(addCount(product));
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(product));
  };
  return (
    <div className={styles.ProductListItem}>
      <div className={styles.action}>
        <div onClick={handleShow}>
          <Button img="change" type="round" />
        </div>
        <div onClick={handleDeleteProduct}>
          <Button img="delete" type="round" />
        </div>
      </div>
      <div>
        <img className={styles.image} src={product.img}></img>
        <div className={styles.size}>
          {image(product.type_size)}
          <span>
            {product.size} {product.type_size}
          </span>
        </div>
        <NavLink to={'/card/' + String(product.url)}>
          <h1>{product.name}</h1>
        </NavLink>
        <div className={styles.info}>
          <p>
            Штрихкод: <span>{product.url}</span>
          </p>
          <p>
            Произоводитель: <span>{product.maker}</span>
          </p>
          <p>
            Бренд: <span>{product.brand}</span>
          </p>
        </div>
      </div>
      <div className={styles.price}>
        <p className={styles.count}>{product.price} ₸</p>
        <div className={styles.button} onClick={handleAddCount}>
          <Button text="В КОРЗИНУ" img="cart" type="small" />
        </div>
      </div>
      {showModal && (
        <ChangeProductsModal showModal={showModal} handleClose={handleClose} product={product} />
      )}
    </div>
  );
};

export default ProductListItem;
