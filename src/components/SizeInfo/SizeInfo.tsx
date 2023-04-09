import { FC } from 'react';
import styles from './SizeInfo.module.scss';
import ml from '../../assets/icons/ml.svg';
import gr from '../../assets/icons/gr.svg';
const icons = {
  ml: ml,
  g: gr,
};

interface SizeInfoProps {
  typeSize?: 'g' | 'ml';
  size?: number;
}

const SizeInfo: FC<SizeInfoProps> = ({ typeSize, size }) => (
  <div className={styles.SizeInfo}>
    <img src={typeSize ? icons[typeSize] : ''} alt={typeSize} />
    <span>
      {size} {typeSize}
    </span>
  </div>
);

export default SizeInfo;
