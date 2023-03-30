import React, { FC } from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

interface NavigationProps {}
const navList = [
  {id: 1, name: 'О компании', url: '/'},
  {id: 2, name: 'Доставка и оплата', url: '/'},
  {id: 3, name: 'Возврат', url: '/'},
  {id: 4, name: 'Контакты', url: '/'},
]

const Navigation: FC<NavigationProps> = () => (
  <div>
    <ul className={styles.Navigation}>
    {navList.map((navItem, index) => {
        return (
          <li key={index}>
            {navItem.name}
          </li>
        );
      })}
    </ul>
  </div>
);

export default Navigation;
