import { FC, ChangeEvent } from 'react';
import Button from '../Button/Button';
import styles from './Input.module.scss';

interface InputProps {
  text?: string;
  value?: string;
  setValue?: (value: string) => void;
  img: 'blocks' | 'download' | 'cart' | 'delete' | 'arrow' | 'search';
}

const Input: FC<InputProps> = ({ text, value, img, setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) setValue(event.target.value);
  };
  return (
    <div className={styles.Input}>
      <input type="text" placeholder={text} value={value} onChange={handleChange} />
      <div className={styles.button}>
        <Button type="input" img={img} />
      </div>
    </div>
  );
};

export default Input;
