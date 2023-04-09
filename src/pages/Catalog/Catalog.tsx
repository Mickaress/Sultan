import { FC } from 'react';
import Container from '../../components/Container/Container';
import ProductList from '../../components/ProductList/ProductList';
import styles from './Catalog.module.scss';
import SortList from '../../components/SortSelect/SortSelect';
import CareFilter from '../../components/CareFilter/CareFilter';
import Sidebar from '../../components/Sidebar/Sidebar';
interface CatalogProps {}

const Catalog: FC<CatalogProps> = () => {
  return (
    <Container>
      <div className={styles.title}>
        <h1>Каталог</h1>
        <SortList />
      </div>
      <CareFilter />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <SortList mobile />
          <ProductList />
        </div>
      </div>
    </Container>
  );
};

export default Catalog;
