import Link from 'next/link';
import React from 'react';
import ProductList from './components/ProductList';
import axios from 'axios';

const getProducts = async () => {
  const response = await axios.get(
    `https://cdn.contentful.com/spaces/tktaafq3bm54/entries?access_token=${process.env.ACCESS_KEY}`,
  );
  // const json = await response.json();
  const products = await response.data;
  console.log('response---->', response);
  console.log('products---->', products);

  return products;
};

const Products = async () => {
  const products = await getProducts();
  // console.log(products);
  return (
    <>
      <h1>Products</h1>
      <ProductList products={products} />
    </>
  );
};

export default Products;

const mockData = [
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
];
