import { FC } from 'react';
import styles from './NavMobile.module.scss';
import InformationBlock from '../InformationBlock/InformationBlock';
import Container from '../Container/Container';
import phone from '../../assets/icons/y_phone.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

interface NavMobileProps {
  showNav: boolean;
  handleClose: () => void;
}

const NavMobile: FC<NavMobileProps> = ({ showNav, handleClose }) => {
  if (!showNav) {
    return null;
  }
  return (
    <div className={styles.NavMobile}>
      <div className={styles.main}>
        <Container>
          <div className={styles.content}>
            <InformationBlock
              img="location"
              h1="г. Кокчетав, ул. Ж. Ташенова 129Б"
              p="(Рынок Восточный)"
            />
            <InformationBlock img="mail" h1="opt.sultan@mail.ru" p="На связи в любое время" />
            <InformationBlock
              img="phone"
              h1="Отдел продаж"
              p="+7 (777) 490-00-91"
              p2="время работы: 9:00-20:00"
            />
            <div className={styles.phone}>
              <img src={phone} alt="" />
              <p>Заказать звонок</p>
            </div>
          </div>
          <div className={styles.nav}>
            <h1>Меню компании: </h1>
            <Navigation />
            <div className={styles.button}>
              <Button type="big" img="download" text="Прайс-лист" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavMobile;
