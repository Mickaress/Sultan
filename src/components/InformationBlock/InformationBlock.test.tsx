import { render, screen } from '@testing-library/react';
import InformationBlock from './InformationBlock';

describe('InformationBlock', () => {
  it('should render the component with location icon', () => {
    render(<InformationBlock img="location" header="Location" mainText="123 Main St, New York" />);
    expect(screen.getByAltText('location')).toBeInTheDocument();
  });

  it('should render the component without additional text', () => {
    render(<InformationBlock header="Phone" mainText="+1 (555) 555-1234" />);
    expect(screen.queryByTestId('additional-text')).toBeNull();
  });

  it('should render the component with additional text', () => {
    render(
      <InformationBlock
        img="mail"
        header="Email"
        mainText="info@example.com"
        additionalText="Please allow up to 24 hours for a response."
      />,
    );
    expect(screen.queryByText('Please allow up to 24 hours for a response.')).toBeInTheDocument();
  });
});
