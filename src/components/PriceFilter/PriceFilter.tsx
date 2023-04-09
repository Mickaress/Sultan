import React, { FC } from 'react';
import styles from './PriceFilter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setMin, setMax } from '../../store/priceSlice';
import { RootState } from '../../store/store';

interface PriceFilterProps {}

const PriceFilter: FC<PriceFilterProps> = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state: RootState) => state.price.min);
  const maxPrice = useSelector((state: RootState) => state.price.max);
  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    dispatch(setMin(value));
  };
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    dispatch(setMax(value));
  };
  return (
    <div className={styles.PriceFilter}>
      <p>Цена ₸</p>
      <div className={styles.select}>
        <input
          type="number"
          min="0"
          placeholder="0"
          value={minPrice > 0 ? minPrice : ''}
          onChange={handleMinPriceChange}
        />
        <span>-</span>
        <input
          type="number"
          min="0"
          placeholder="10 000"
          value={maxPrice > 0 ? maxPrice : ''}
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
