import { FC } from 'react';
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
interface ButtonProps {
  type: 'big' | 'small' | 'input' | 'round' | 'white';
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
}
function getImage(
  img:
    | 'blocks'
    | 'download'
    | 'cart'
    | 'delete'
    | 'arrow'
    | 'search'
    | 'change'
    | 'link'
    | 'blackDownload'
    | undefined,
) {
  switch (img) {
    case 'blocks':
      return blocks;
    case 'download':
      return download;
    case 'cart':
      return cart;
    case 'delete':
      return del;
    case 'arrow':
      return arrow;
    case 'search':
      return search;
    case 'change':
      return change;
    case 'link':
      return link;
    case 'blackDownload':
      return blackDownload;
  }
}
function getButton(
  type: 'big' | 'small' | 'input' | 'round' | 'white',
  text: string | undefined,
  img:
    | 'blocks'
    | 'download'
    | 'cart'
    | 'delete'
    | 'arrow'
    | 'search'
    | 'change'
    | 'link'
    | 'blackDownload'
    | undefined,
) {
  switch (type) {
    case 'big':
      return (
        <div className={`${styles.big} ${styles.Button}`}>
          <p>{text}</p>
          {img ? <img src={getImage(img)}></img> : ''}
        </div>
      );
    case 'small':
      return (
        <div className={`${styles.small} ${styles.Button}`}>
          <p>{text}</p>
          <img src={getImage(img)}></img>
        </div>
      );
    case 'input':
      return (
        <div className={`${styles.input} ${styles.Button}`}>
          <img src={getImage(img)}></img>
        </div>
      );
    case 'round':
      return (
        <div className={`${styles.round} ${styles.Button}`}>
          <img src={getImage(img)}></img>
        </div>
      );
    case 'white':
      return (
        <div className={`${styles.Button} ${styles.white}`}>
          {text ? <p>{text}</p> : ''}
          {img ? <img src={getImage(img)}></img> : ''}
        </div>
      );
  }
}

const Button: FC<ButtonProps> = ({ type, text, img }) => <>{getButton(type, text, img)}</>;

export default Button;
