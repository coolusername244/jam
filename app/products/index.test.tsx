import { render, screen, act } from '@testing-library/react';
import React from 'react';
import Home from '../page';
import Products from './page';
import ProductList from './components/ProductList';
import getProducts from './page';
import axios from 'axios';

// jest.mock(getProducts);

describe('page layout', () => {
  it('has heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Product Page/i);
    expect(heading.textContent).toEqual('Product Page');
  });
  it('nav has 4 children', () => {
    render(<Home />);
    const navbar = screen.getByTestId('navbar');
    expect(navbar.childElementCount).toEqual(4);
  });
});

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockData),
//   }),
// ) as jest.Mock;

// console.log(global.fetch);

// describe('product page', () => {
//   it('has 6 articles', () => {
//     render(<Products />);
//     // const section = screen.getByTestId('product-section');
//     // expect(section.childElementCount).toEqual(6);
//   });
// });

// describe('product list', () => {
//   it('has 6 items', () => {
//     render(<ProductList products={mockData} />);
//     const section = screen.getByTestId('product-section');
//     expect(section.childElementCount).toEqual(6);
//   });
// });

jest.mock('axios');

describe('fetch the products', () => {
  it('fetching the mock data', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          fields: {
            name: 'product 1',
          },
        },
        {
          fields: {
            name: 'product 2',
          },
        },
        {
          fields: {
            name: 'product 3',
          },
        },
        {
          fields: {
            name: 'product 4',
          },
        },
        {
          fields: {
            name: 'product 5',
          },
        },
        {
          fields: {
            name: 'product 6',
          },
        },
      ],
    });

    const res = await getProducts();
    console.log('res----->', res.props.children.products);
  });
});
