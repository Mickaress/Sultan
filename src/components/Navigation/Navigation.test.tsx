import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render a list of navigation items', () => {
    const navList = [
      { id: 1, name: 'О компании', url: '/' },
      { id: 2, name: 'Доставка и оплата', url: '/' },
      { id: 3, name: 'Возврат', url: '/' },
      { id: 4, name: 'Контакты', url: '/' },
    ];
    render(<Navigation />);

    const navItems = screen.getAllByRole('listitem');
    expect(navItems.length).toEqual(4);

    navItems.forEach((item, index) => {
      expect(item).toHaveTextContent(navList[index].name);
    });
  });
});
