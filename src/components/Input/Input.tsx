import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './Input.module.scss';

interface InputProps {
  text?: string;
  value?: string;
  setValue?: (value: string) => void;
  image: 'arrow' | 'search';
}

const Input: FC<InputProps> = ({ text = '', value = '', image, setValue }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (setValue) setValue(event.target.value);
  };

  return (
    <div className={styles.Input}>
      <input type="text" placeholder={text} value={value} onChange={handleChange} />
      <div className={styles.button}>
        <Button type="input" img={image} />
      </div>
    </div>
  );
};

export default Input;
