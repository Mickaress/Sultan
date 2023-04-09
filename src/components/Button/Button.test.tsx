import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with text and without image', () => {
    const { getByText, queryByAltText } = render(<Button type="big" text="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
    expect(queryByAltText('')).toBeNull();
  });

  it('renders with image and without text', () => {
    render(<Button type="big" img="search" />);
    expect(screen.getByAltText('search')).toBeInTheDocument();
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });

  it('renders with both text and image', () => {
    const { getByText, getByAltText } = render(<Button type="big" text="Click me" img="search" />);
    expect(getByText('Click me')).toBeInTheDocument();
    expect(getByAltText('search')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    const { getByRole } = render(<Button type="big" text="Click me" disabled />);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });
});
