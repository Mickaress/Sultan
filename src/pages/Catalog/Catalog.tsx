import { FC } from 'react';
import Container from '../../components/Container/Container';
import ProductList from '../../components/ProductList/ProductList';
import styles from './Catalog.module.scss';
import { setSortValue } from '../../store/sortSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import { setBrands } from '../../store/brandSlice';
import { setMin, setMax } from '../../store/priceSlice';
import { setCare } from '../../store/careSlice';
import arrow from '../../assets/icons/black_arrow.svg';
// TODO: подумать надо ли const [checkedBrands, setCheckedBrands] = useState<string[]>([]);
// TODO: разбить на компоненты
interface CatalogProps {}

const Catalog: FC<CatalogProps> = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.sort.value);
  const products = useSelector((state: RootState) => state.products.products);
  const careValue = useSelector((state: RootState) => state.care.care);
  const cares = [
    'Уход за телом',
    'Уход за руками',
    'Уход за ногами',
    'Уход за лицом',
    'Уход за волосами',
    'Средства для загара',
    'Средства для бритья',
    'Подарочные наборы',
    'Гигиеническая продукция',
    'Гигиена полости рта',
    'Бумажная продукция',
  ];
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [searchBrand, setSearchBrand] = useState('');
  const [showParam, setShowParam] = useState(false);
  const handleClose = () => setShowParam(false);
  const handleShow = () => setShowParam(true);
  const [checkedBrands, setCheckedBrands] = useState<string[]>([]);
  const brands = [...new Set(products.map((product) => product.brand))]
    .filter((brand) => brand.toLowerCase().startsWith(searchBrand.toLowerCase()))
    .sort((a, b) => a.localeCompare(b));
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
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortValue(event.target.value));
  };
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
  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    dispatch(setMin(value));
  };
  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    dispatch(setMax(value));
  };
  const handleCareChange = (care: string) => {
    if (careValue === care) {
      dispatch(setCare(''));
    } else {
      dispatch(setCare(care));
    }
  };
  return (
    <Container>
      <div className={styles.title}>
        <h1>Каталог</h1>
        <div className={styles.sort}>
          <p>Сортировка:</p>
          <select value={sort} onChange={handleSortChange}>
            <option value="ascName">Название &#9660;</option>
            <option value="descName">Название &#9650;</option>
            <option value="ascPrice">Цена &#9660;</option>
            <option value="descPrice">Цена &#9650;</option>
          </select>
        </div>
      </div>
      <div className={styles.category}>
        {cares.map((care, index) => (
          <div
            onClick={() => handleCareChange(care)}
            key={index}
            className={`${styles.category_item} ${
              care === careValue ? styles.category_item_active : ''
            }`}
          >
            <p>{care}</p>
          </div>
        ))}
      </div>
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.param}>
            <h1>Подбор по параметрам</h1>
            <div className={styles.arrow}>
              <input type="checkbox" onChange={showParam ? handleClose : handleShow} />
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className={showParam ? '' : styles.display_none}>
            <div className={styles.price}>
              <p>Цена ₸</p>
              <div className={styles.select}>
                <input type="number" min="0" placeholder="0" onChange={handleMinPriceChange} />
                <span>-</span>
                <input type="number" min="0" placeholder="10 000" onChange={handleMaxPriceChange} />
              </div>
            </div>
            <div className={styles.brand}>
              <h2>Бренд</h2>
              <Input img="search" text="Поиск..." value={searchBrand} setValue={setSearchBrand} />
              <div className={styles.brand_checkbox}>{getBrand()}</div>
              {showAllBrands ? (
                <button onClick={() => setShowAllBrands(false)}>Скрыть &#9650;</button>
              ) : (
                <button onClick={() => setShowAllBrands(true)}>Показать все &#9660;</button>
              )}
            </div>
          </div>
          <div className={styles.type}>
            <h2>Тип</h2>
            {cares.map((care) => (
              <p
                onClick={() => handleCareChange(care)}
                key={care}
                className={care === careValue ? styles.active : ''}
              >
                {care}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.sort}>
            <p>Сортировка:</p>
            <select value={sort} onChange={handleSortChange}>
              <option value="ascName">Название &#9660;</option>
              <option value="descName">Название &#9650;</option>
              <option value="ascPrice">Цена &#9660;</option>
              <option value="descPrice">Цена &#9650;</option>
            </select>
          </div>
          <ProductList />
        </div>
      </div>
    </Container>
  );
};

export default Catalog;
