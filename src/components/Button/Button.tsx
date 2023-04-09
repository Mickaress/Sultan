import { FC, MouseEventHandler } from 'react';
import blocks from '../../assets/icons/blocks.svg';
import del from '../../assets/icons/delete.svg';
import download from '../../assets/icons/download.svg';
import cart from '../../assets/icons/mini-cart.svg';
import search from '../../assets/icons/search.svg';
import arrow from '../../assets/icons/arrow.svg';
import change from '../../assets/icons/change.svg';
import link from '../../assets/icons/link.svg';
import styles from './Button.module.scss';
import blackDownload from '../../assets/icons/black_download.svg';
import clsx from 'clsx';
const images = {
  blocks: blocks,
  delete: del,
  download: download,
  cart: cart,
  search: search,
  arrow: arrow,
  change: change,
  link: link,
  blackDownload: blackDownload,
};
interface ButtonProps {
  type: 'big' | 'small' | 'input' | 'round' | 'white' | 'counter';
  img?:
    | 'blocks'
    | 'download'
    | 'cart'
    | 'delete'
    | 'arrow'
    | 'search'
    | 'change'
    | 'link'
    | 'blackDownload';
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ type, text, img, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(styles.Button, {
        [styles.small]: type === 'small',
        [styles.round]: type === 'round',
        [styles.white]: type === 'white',
        [styles.input]: type === 'input',
        [styles.big]: type === 'big',
        [styles.counter]: type === 'counter',
      })}
    >
      {text && <p>{text}</p>}
      {img && <img src={images[img]} alt={img} />}
    </button>
  );
};

export default Button;
