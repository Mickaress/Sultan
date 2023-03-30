import { FC } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import styles from './ProductList.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import ChangeProductsModal from '../changeProductsModal/changeProductsModal';
interface ProductListProps {}

const ProductList: FC<ProductListProps> = () => {
  let products = useSelector((state: RootState) => state.products.products);
  const checkedBrands = useSelector((state: RootState) => state.brands.brands);
  const min = useSelector((state: RootState) => state.price.min);
  const max = useSelector((state: RootState) => state.price.max);
  const sort = useSelector((state: RootState) => state.sort.value);
  const care = useSelector((state: RootState) => state.care.care);
  const [page, setPage] = useState(1);
  const pages = [];
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  products = [...products].sort((a, b) => {
    switch (sort) {
      case 'ascName':
        return a.name.localeCompare(b.name);
      case 'descName':
        return b.name.localeCompare(a.name);
      case 'ascPrice':
        return a.price - b.price;
      case 'descPrice':
        return b.price - a.price;
      default:
        return a.name.localeCompare(b.name);
    }
  });
  if (min !== 0 || max !== 0) {
    products = products.filter((product) => {
      return min !== 0 && max !== 0
        ? product.price >= min && product.price <= max
        : min !== 0
        ? product.price >= min
        : product.price <= max;
    });
  }
  if (care !== '') {
    products = products.filter((product) => product.type_care.includes(care));
  }
  const maxPage = Math.ceil(products.length / 9);
  products =
    checkedBrands.length === 0
      ? products
      : products.filter((product) => checkedBrands.includes(product.brand));
  for (let i = 1; i <= maxPage; i++) {
    pages.push(
      <button
        className={`${styles.page} ${i === page ? styles.current : ''}`}
        key={i}
        onClick={() => setPage(i)}
      >
        {i}
      </button>,
    );
  }
  products = products.slice((page - 1) * 9, (page - 1) * 9 + 9);
  return (
    <div>
      <div className={styles.ProductList}>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
      <button className={styles.add} onClick={handleShow}>
        Добавить товар
      </button>
      <div className={styles.pagination}>
        <button className={styles.prev} onClick={() => setPage(page - 1)} disabled={page === 1} />
        {pages}
        <button
          className={styles.next}
          onClick={() => setPage(page + 1)}
          disabled={page === maxPage}
        />
      </div>
      {showModal && <ChangeProductsModal showModal={showModal} handleClose={handleClose} />}
    </div>
  );
};

export default ProductList;
