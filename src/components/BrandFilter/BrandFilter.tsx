import { FC, useState } from 'react';
import styles from './BrandFilter.module.scss';
import Input from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setBrands } from '../../store/brandSlice';

interface BrandFilterProps {}

const BrandFilter: FC<BrandFilterProps> = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [searchBrand, setSearchBrand] = useState('');
  const [checkedBrands, setCheckedBrands] = useState<string[]>([]);
  const brands = [...new Set(products.map((product) => product.brand))]
    .filter((brand) => brand.toLowerCase().startsWith(searchBrand.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));
  const handleBrandChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let newCheckedBrands;
    if (event.target.checked) {
      newCheckedBrands = [...checkedBrands, value];
    } else {
      newCheckedBrands = checkedBrands.filter((brand) => brand !== value);
    }
    await setCheckedBrands(newCheckedBrands);
    dispatch(setBrands(newCheckedBrands));
  };
  function getBrand() {
    const brandsToShow = showAllBrands ? brands : brands.slice(0, 5);
    return brandsToShow.map((brand, index) => (
      <label key={index}>
        <input
          type="checkbox"
          value={brand}
          checked={checkedBrands.includes(brand)}
          onChange={handleBrandChange}
        />
        <span>{brand}</span>
      </label>
    ));
  }
  return (
    <div className={styles.BrandFilter}>
      <h2>Бренд</h2>
      <Input image="search" text="Поиск..." value={searchBrand} setValue={setSearchBrand} />
      <div className={styles.checkbox}>{getBrand()}</div>
      <button className={styles.button} onClick={() => setShowAllBrands(!showAllBrands)}>
        {showAllBrands ? 'Скрыть \u25B2' : 'Показать все \u25BC'}
      </button>
    </div>
  );
};

export default BrandFilter;
