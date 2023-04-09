import { FC, useState } from 'react';
import styles from './Sidebar.module.scss';
import PriceFilter from '../PriceFilter/PriceFilter';
import BrandFilter from '../BrandFilter/BrandFilter';
import CareFilter from '../CareFilter/CareFilter';
import arrow from '../../assets/icons/black_arrow.svg';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const [showParam, setShowParam] = useState(false);
  const handleClose = () => setShowParam(false);
  const handleShow = () => setShowParam(true);
  return (
    <div className={styles.Sidebar}>
      <div className={styles.param}>
        <h1>Подбор по параметрам</h1>
        <div className={styles.arrow}>
          <input type="checkbox" onChange={showParam ? handleClose : handleShow} />
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={showParam ? '' : styles.display_none}>
        <PriceFilter />
        <BrandFilter />
      </div>
      <CareFilter sidebar />
    </div>
  );
};

export default Sidebar;
