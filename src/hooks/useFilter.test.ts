import { useFilter } from './useFilter';
import { Product } from '../types/types';
describe('useFilter', () => {
  const products: Product[] = [
    {
      id: 1,
      img: 'product-1.jpg',
      name: 'Product 1',
      type_size: 'g',
      size: 100,
      url: 1,
      maker: 'Maker 1',
      brand: 'Brand 1',
      description: 'Description 1',
      price: 10,
      type_care: ['care1', 'care2'],
    },
    {
      id: 2,
      img: 'product-2.jpg',
      name: 'Product 2',
      type_size: 'ml',
      size: 50,
      url: 2,
      maker: 'Maker 2',
      brand: 'Brand 2',
      description: 'Description 2',
      price: 20,
      type_care: ['care2', 'care3'],
    },
    {
      id: 3,
      img: 'product-3.jpg',
      name: 'Product 3',
      type_size: 'g',
      size: 200,
      url: 3,
      maker: 'Maker 3',
      brand: 'Brand 1',
      description: 'Description 3',
      price: 30,
      type_care: ['care3', 'care4'],
    },
  ];

  it('should return all products when no filter is applied', () => {
    const filtered = useFilter({ products, min: 0, max: 0, care: '', checkedBrands: [] });
    expect(filtered).toEqual(products);
  });

  it('should filter products by price', () => {
    const filtered = useFilter({ products, min: 15, max: 25, care: '', checkedBrands: [] });
    expect(filtered).toEqual([products[1]]);
  });

  it('should filter products by care type', () => {
    const filtered = useFilter({ products, min: 0, max: 0, care: 'care2', checkedBrands: [] });
    expect(filtered).toEqual([products[0], products[1]]);
  });

  it('should filter products by brand', () => {
    const filtered = useFilter({ products, min: 0, max: 0, care: '', checkedBrands: ['Brand 1'] });
    expect(filtered).toEqual([products[0], products[2]]);
  });

  it('should filter products by price, care type, and brand', () => {
    const filtered = useFilter({
      products,
      min: 10,
      max: 30,
      care: 'care3',
      checkedBrands: ['Brand 1'],
    });
    expect(filtered).toEqual([products[2]]);
  });
});
