import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders the input element', () => {
    render(<Input text="Search" value="Hello" image="search" />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('renders the button element', () => {
    render(<Input image="search" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
