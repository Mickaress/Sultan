import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import HeaderCart from './HeaderCart';

describe('HeaderCart', () => {
  const mockStore = configureStore([]);
  const initialState = {
    cart: {
      count: 2,
      price: 500,
    },
  };

  it('should render cart count and price', () => {
    const store = mockStore(initialState);

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <HeaderCart />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText('cart')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('500 ₸')).toBeInTheDocument();
    expect(screen.getByText('Корзина')).toBeInTheDocument();
  });

  it('should render mobile version', () => {
    const store = mockStore(initialState);

    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <HeaderCart mobile />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText('cart')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.queryByText('500 ₸')).not.toBeInTheDocument();
    expect(screen.queryByText('Корзина')).not.toBeInTheDocument();
  });
});
