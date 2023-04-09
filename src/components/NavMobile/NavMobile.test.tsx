import { render, screen } from '@testing-library/react';
import NavMobile from './NavMobile';

describe('NavMobile', () => {
  it('should render nothing when showNav is false', () => {
    render(<NavMobile showNav={false} />);
    expect(screen.queryByTestId('nav-mobile')).toBeNull();
  });

  it('should render the mobile navigation when showNav is true', () => {
    render(<NavMobile showNav={true} />);
    expect(screen.getByTestId('nav-mobile')).toBeInTheDocument();
  });
});
