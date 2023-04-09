import { FC } from 'react';
import logo from '../../assets/icons/logo_white.svg';
import master from '../../assets/icons/master.svg';
import telegram from '../../assets/icons/telegram.svg';
import visa from '../../assets/icons/visa.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import Button from '../Button/Button';
import Contact from '../Contact/Contact';
import Container from '../Container/Container';
import InformationBlock from '../InformationBlock/InformationBlock';
import Input from '../Input/Input';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer}>
    <Container>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.flex}>
            <img src={logo} alt="" />
          </div>
          <p className={styles.p16}>
            Компания «Султан» — снабжаем <br /> розничные магазины товарами <br />
            "под ключ" в Кокчетаве и Акмолинской <br /> области
          </p>
          <p className={styles.p12}>Подпишись на скидки и акции</p>
          <Input image="arrow" text="Введите ваш E-mail" />
        </div>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <h1>Меню сайта:</h1>
            <p className={styles.p14}>О компании</p>
            <p className={styles.p14}>Доставка и оплата</p>
            <p className={styles.p14}>Возврат</p>
            <p className={styles.p14}>Контакты</p>
          </div>
          <div className={styles.block}>
            <h1>Категории:</h1>
            <p className={styles.p14}>Бытовая химия</p>
            <p className={styles.p14}>Косметика и гигиена</p>
            <p className={styles.p14}>Товары для дома</p>
            <p className={styles.p14}>Товары для детей и мам</p>
            <p className={styles.p14}>Посуда</p>
          </div>
        </div>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <h1>Скачать прайс-лист:</h1>
            <Button text="Прайс-лист" img="download" type="big" />
            <p className={`${styles.p14} ${styles.margin}`}>Связь в мессенджерах:</p>
            <div className={styles.cards}>
              <img src={whatsapp} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>
          <div className={styles.block}>
            <h1>Контакты:</h1>
            <Contact />
            <InformationBlock header="opt.sultan@mail.ru " mainText="На связи в любое время" />
            <div className={styles.cards}>
              <img src={visa} alt="" />
              <img src={master} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default Footer;
