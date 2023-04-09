import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import styles from './Contact.module.scss';

describe('Contact', () => {
  it('renders without an image by default', () => {
    render(<Contact />);
    expect(screen.queryByAltText('')).toBeNull();
  });

  it('renders with an image when `image` prop is set to true', () => {
    render(<Contact image />);
    expect(screen.getByAltText('Woman')).toBeInTheDocument();
  });

  it('renders footer styles when `image` prop is not set', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact').classList.contains(styles.footer)).toBe(true);
  });

  it('renders default styles when `image` prop is set to true', () => {
    render(<Contact image />);
    expect(screen.getByTestId('contact').classList.contains(styles.footer)).toBe(false);
  });

  it('renders the correct phone number', () => {
    render(<Contact />);
    expect(screen.getByText('+7 (777) 490-00-91')).toBeInTheDocument();
  });

  it('renders the correct work time', () => {
    render(<Contact />);
    expect(screen.getByText('время работы: 9:00-20:00')).toBeInTheDocument();
  });

  it('renders the correct link text', () => {
    render(<Contact />);
    expect(screen.getByText('Заказать звонок')).toBeInTheDocument();
  });
});
