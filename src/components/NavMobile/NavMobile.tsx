import { FC } from 'react';
import styles from './NavMobile.module.scss';
import InformationBlock from '../InformationBlock/InformationBlock';
import Container from '../Container/Container';
import phone from '../../assets/icons/y_phone.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

interface NavMobileProps {
  showNav: boolean;
}

const NavMobile: FC<NavMobileProps> = ({ showNav }) => {
  if (!showNav) {
    return null;
  }
  return (
    <div className={styles.NavMobile} data-testid="nav-mobile">
      <div className={styles.main}>
        <Container>
          <div className={styles.content}>
            <InformationBlock
              img="location"
              header="г. Кокчетав, ул. Ж. Ташенова 129Б"
              mainText="(Рынок Восточный)"
            />
            <InformationBlock
              img="mail"
              header="opt.sultan@mail.ru"
              mainText="На связи в любое время"
            />
            <InformationBlock
              img="phone"
              header="Отдел продаж"
              mainText="+7 (777) 490-00-91"
              additionalText="время работы: 9:00-20:00"
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
