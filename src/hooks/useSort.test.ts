import { useSort } from './useSort';
import { Product } from '../types/types';

describe('useSort', () => {
  const products: Product[] = [
    {
      id: 1,
      img: 'https://example.com/img1.jpg',
      name: 'Product A',
      type_size: 'g',
      size: 100,
      url: 123,
      maker: 'Maker A',
      brand: 'Brand A',
      description: 'Product A description',
      price: 10,
      type_care: ['care1', 'care2'],
    },
    {
      id: 2,
      img: 'https://example.com/img2.jpg',
      name: 'Product B',
      type_size: 'ml',
      size: 50,
      url: 456,
      maker: 'Maker B',
      brand: 'Brand B',
      description: 'Product B description',
      price: 20,
      type_care: ['care2', 'care3'],
    },
    {
      id: 3,
      img: 'https://example.com/img3.jpg',
      name: 'Product C',
      type_size: 'g',
      size: 200,
      url: 789,
      maker: 'Maker C',
      brand: 'Brand C',
      description: 'Product C description',
      price: 15,
      type_care: ['care3', 'care4'],
    },
  ];

  it('should sort products in ascending order by name', () => {
    const sortedProducts = useSort({ products, sort: 'ascName' });
    expect(sortedProducts).toEqual([products[0], products[1], products[2]]);
  });

  it('should sort products in descending order by name', () => {
    const sortedProducts = useSort({ products, sort: 'descName' });
    expect(sortedProducts).toEqual([products[2], products[1], products[0]]);
  });

  it('should sort products in ascending order by price', () => {
    const sortedProducts = useSort({ products, sort: 'ascPrice' });
    expect(sortedProducts).toEqual([products[0], products[2], products[1]]);
  });

  it('should sort products in descending order by price', () => {
    const sortedProducts = useSort({ products, sort: 'descPrice' });
    expect(sortedProducts).toEqual([products[1], products[2], products[0]]);
  });

  it('should sort products in ascending order by name by default', () => {
    const sortedProducts = useSort({ products, sort: '' });
    expect(sortedProducts).toEqual([products[0], products[1], products[2]]);
  });
});
