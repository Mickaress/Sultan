import { FC } from 'react';
import styles from './FooterMobile.module.scss';
import Container from '../Container/Container';
import logo from '../../assets/icons/logo_white.svg';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Contact from '../Contact/Contact';
import InformationBlock from '../InformationBlock/InformationBlock';
import master from '../../assets/icons/master.svg';
import visa from '../../assets/icons/visa.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

interface FooterMobileProps {}

const FooterMobile: FC<FooterMobileProps> = () => (
  <div className={styles.FooterMobile}>
    <Container>
      <div className={styles.block}>
        <img className={styles.logo} src={logo} alt="" />
        <Button type="small" img="download" text="Прайс-лист" />
      </div>
      <p>
        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и
        Акмолинской области
      </p>
      <p className={styles.p12}>Подпишись на скидки и акции</p>
      <Input image="arrow" text="Введите ваш E-mail" />
      <div className={styles.block}>
        <div>
          <h1>Меню сайта:</h1>
          <p>О компании</p>
          <p>Доставка и оплата</p>
          <p>Возврат</p>
          <p>Контакты</p>
        </div>
        <div>
          <h1>Категории:</h1>
          <p>Бытовая химия</p>
          <p>Косметика и гигиена</p>
          <p>Товары для дома</p>
          <p>Товары для детей и мам</p>
          <p>Посуды</p>
        </div>
      </div>
      <div>
        <h1>Контакты:</h1>
      </div>
      <div className={styles.block}>
        <div>
          <Contact />
          <InformationBlock header="opt.sultan@mail.ru " mainText="На связи в любое время" />
          <div className={styles.cards}>
            <img src={visa} alt="" />
            <img src={master} alt="" />
          </div>
        </div>
        <div>
          <p className={styles.contact}>Связь в мессенджерах:</p>
          <div className={styles.cards}>
            <img src={telegram} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default FooterMobile;
