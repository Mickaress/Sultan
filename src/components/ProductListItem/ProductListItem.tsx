import { FC } from 'react';
import Button from '../Button/Button';
import styles from './ProductListItem.module.scss';
import { Product } from '../../types/types';
import { useDispatch } from 'react-redux';
import { addCount } from '../../store/cartSlice';
import { NavLink } from 'react-router-dom';
import { deleteProduct } from '../../store/productsSlice';
import { useState } from 'react';
import ChangeProductsModal from '../changeProductsModal/changeProductsModal';
import SizeInfo from '../SizeInfo/SizeInfo';

interface ProductListItemProps {
  product: Product;
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
        <img className={styles.image} src={product.img} />
        <SizeInfo size={product.size} typeSize={product.type_size} />
        <NavLink className={styles.link} to={'/sultan/card/' + String(product.url)}>
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
        <Button text="В КОРЗИНУ" img="cart" type="small" onClick={handleAddCount} />
      </div>
      {showModal && (
        <ChangeProductsModal showModal={showModal} handleClose={handleClose} product={product} />
      )}
    </div>
  );
};

export default ProductListItem;
