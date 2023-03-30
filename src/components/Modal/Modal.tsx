import { FC } from 'react';
import close from '../../assets/icons/close.svg';
import styles from './Modal.module.scss';
import ticks from '../../assets/icons/ticks.svg';

interface ModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ showModal, handleClose }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className={styles.Modal}>
      <div className={styles.main}>
        <img className={styles.close} src={close} onClick={handleClose} />
        <div className={styles.content}>
          <div className={styles.ticks}>
            <img src={ticks} alt="" />
          </div>
          <h1>Спасибо за заказ</h1>
          <p>Наш менеджер свяжется с вами в ближайшее время</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
