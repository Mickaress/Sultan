import React, { FC } from 'react';
import styles from './InformationBlock.module.scss';
import location from '../../assets/icons/location.svg';
import mail from '../../assets/icons/mail.svg';
import phone from '../../assets/icons/phone.svg';

interface InformationBlockProps {
  img?: 'location' | 'mail' | 'phone';
  h1: string;
  p: string;
  p2?: string;
}

const InformationBlock: FC<InformationBlockProps> = ({ img, h1, p, p2 }) => (
  <div className={styles.InformationBlock}>
    {img !== undefined ? (
      <img src={img === 'location' ? location : img === 'mail' ? mail : phone} alt="" />
    ) : (
      ''
    )}
    <div className={`${styles.text} ${img !== undefined ? styles.header : styles.footer}`}>
      <h2>{h1}</h2>
      <p>{p}</p>
      {p2 ? <p className={styles.p2}>{p2}</p> : ''}
    </div>
  </div>
);

export default InformationBlock;
