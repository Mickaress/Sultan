import { FC, useState } from 'react';
import styles from './HeaderMobile.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import blocks from '../../assets/icons/blocks_black.svg';
import search from '../../assets/icons/search_black.svg';
import NavMobile from '../NavMobile/NavMobile';
import HeaderCart from '../HeaderCart/HeaderCart';

interface HeaderMobileProps {}

const HeaderMobile: FC<HeaderMobileProps> = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClose = () => setShowNav(false);
  const handleShow = () => setShowNav(true);
  return (
    <div className={styles.HeaderMobile}>
      {showNav && <NavMobile showNav={showNav} />}
      <div className={styles.top}>
        <Container>
          <div className={styles.flex}>
            <div className={styles.nav}>
              <input type="checkbox" onClick={showNav ? handleClose : handleShow} />
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img className={styles.logo} src={logo} alt="" />
            <HeaderCart mobile />
          </div>
        </Container>
      </div>
      <div className={styles.bot}>
        <Container>
          <div className={styles.flex}>
            <NavLink className={styles.button} to="/sultan/">
              <img src={blocks} alt="" />
              <p>Каталог</p>
            </NavLink>
            <div className={styles.half}></div>
            <NavLink className={styles.button} to="/sultan/">
              <img src={search} alt="" />
              <p>Поиск</p>
            </NavLink>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeaderMobile;
