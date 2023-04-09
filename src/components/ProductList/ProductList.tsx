import { FC, useEffect, useMemo } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import styles from './ProductList.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import ChangeProductsModal from '../changeProductsModal/changeProductsModal';
import { useFilter } from '../../hooks/useFilter';
import { useSort } from '../../hooks/useSort';
import { Product } from '../../types/types';
import Button from '../Button/Button';
interface ProductListProps {}

const ProductList: FC<ProductListProps> = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const checkedBrands = useSelector((state: RootState) => state.brands.brands);
  const min = useSelector((state: RootState) => state.price.min);
  const max = useSelector((state: RootState) => state.price.max);
  const sort = useSelector((state: RootState) => state.sort.value);
  const care = useSelector((state: RootState) => state.care.care);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const filteredProducts: Product[] = useMemo(() => {
    return useFilter({ products, min, max, care, checkedBrands });
  }, [products, min, max, care, checkedBrands]);

  const sortedProducts = useMemo(() => {
    return useSort({ products: filteredProducts, sort });
  }, [filteredProducts, sort]);

  const [pagination, maxPage, pageProducts] = useMemo(() => {
    const pagination = [];
    const maxPage = Math.ceil(sortedProducts.length / 9);
    const pageProducts = sortedProducts.slice((page - 1) * 9, (page - 1) * 9 + 9);
    for (let i = 1; i <= maxPage; i++) {
      pagination.push(
        <button
          className={`${styles.page} ${i === page ? styles.current : ''}`}
          key={i}
          onClick={() => setPage(i)}
        >
          {i}
        </button>,
      );
    }
    return [pagination, maxPage, pageProducts];
  }, [sortedProducts, page]);

  useEffect(() => {
    setPage(1);
  }, [sortedProducts]);
  return (
    <div>
      <div className={styles.ProductList}>
        {pageProducts.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.add}>
        <Button type="big" text="Добавить товар" onClick={handleShow} />
      </div>
      <div className={styles.pagination}>
        <button className={styles.prev} onClick={() => setPage(page - 1)} disabled={page === 1} />
        {pagination}
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
