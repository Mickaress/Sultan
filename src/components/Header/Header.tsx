import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import Contact from '../Contact/Contact';
import Container from '../Container/Container';
import InformationBlock from '../InformationBlock/InformationBlock';
import Input from '../Input/Input';
import Navigation from '../Navigation/Navigation';
import HeaderCart from '../HeaderCart/HeaderCart';
import logo from '../../assets/icons/logo.svg';
import styles from './Header.module.scss';

interface HeaderCartProps {}

const Header: FC<HeaderCartProps> = () => {
  return (
    <header>
      <div className={styles.top}>
        <Container>
          <div className={styles.content}>
            <div className={styles.information}>
              <InformationBlock
                img="location"
                header="г. Кокчетав, ул. Ж. Ташенова 129Б "
                mainText="(Рынок Восточный)"
              />
              <InformationBlock
                img="mail"
                header="opt.sultan@mail.ru "
                mainText="На связи в любое время"
              />
            </div>
            <Navigation />
          </div>
        </Container>
      </div>
      <div className={styles.bot}>
        <Container>
          <div className={styles.content}>
            <NavLink to="/sultan/">
              <img src={logo} alt="" />
            </NavLink>
            <NavLink className={styles.link} to="/sultan/">
              <Button text="Каталог" type="big" img="blocks" />
            </NavLink>
            <Input image="search" text="Поиск..." />
            <Contact image />
            <div className={styles.price_list}>
              <Button text="Прайс-лист" type="big" img="download" />
            </div>
            <HeaderCart />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
