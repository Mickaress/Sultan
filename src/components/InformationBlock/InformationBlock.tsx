import { FC } from 'react';
import styles from './InformationBlock.module.scss';
import location from '../../assets/icons/location.svg';
import mail from '../../assets/icons/mail.svg';
import phone from '../../assets/icons/phone.svg';

interface InformationBlockProps {
  img?: 'location' | 'mail' | 'phone';
  header: string;
  mainText: string;
  additionalText?: string;
}

const icons = {
  location: location,
  mail: mail,
  phone: phone,
};

const InformationBlock: FC<InformationBlockProps> = ({ img, header, mainText, additionalText }) => (
  <div className={styles.InformationBlock}>
    {img && <img src={icons[img]} alt={img} />}
    <div
      className={`${styles.text} ${
        img ? styles.InformationBlockHeader : styles.InformationBlockFooter
      }`}
    >
      <h1>{header}</h1>
      <p>{mainText}</p>
      {additionalText && <p className={styles.additionalText}>{additionalText}</p>}
    </div>
  </div>
);

export default InformationBlock;
