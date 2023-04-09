import { FC } from 'react';
import styles from './Contact.module.scss';
import img from '../../assets/images/woman.svg';

interface ContactProps {
  image?: boolean;
}

const Contact: FC<ContactProps> = ({ image }) => (
  <div className={`${styles.Contact} ${image ? '' : styles.footer}`} data-testid="contact">
    <div className={styles.text}>
      <p className={styles.phone}>+7 (777) 490-00-91</p>
      <p className={styles.time}>время работы: 9:00-20:00</p>
      <p className={styles.link}>Заказать звонок</p>
    </div>
    {image ? <img src={img} alt="Woman" /> : ''}
  </div>
);

export default Contact;
