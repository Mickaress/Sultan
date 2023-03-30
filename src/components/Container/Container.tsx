import styles from './Container.module.scss';

import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container = ({children}: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;