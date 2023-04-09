import { render, screen } from '@testing-library/react';
import SizeInfo from './SizeInfo';

describe('SizeInfo', () => {
  it('should render the component with "ml" icon', () => {
    render(<SizeInfo typeSize="ml" size={50} />);
    expect(screen.getByAltText('ml')).toBeInTheDocument();
  });

  it('should render the component with "g" icon', () => {
    render(<SizeInfo typeSize="g" size={50} />);
    expect(screen.getByAltText('g')).toBeInTheDocument();
  });

  it('should render the component with the correct size and type', () => {
    render(<SizeInfo typeSize="g" size={250} />);
    expect(screen.getByText('250 g')).toBeInTheDocument();
  });
});
