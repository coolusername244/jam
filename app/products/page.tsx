import Link from 'next/link';
import React from 'react';

const Products = async () => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/tktaafq3bm54/entries?access_token=${process.env.ACCESS_KEY}`,
  );
  const json = await response.json();
  const products = await json.items;

  return (
    <>
      <h1>Products</h1>
      {products.map(item => {
        return (
          <article key={item.sys.id}>
            <Link
              href={{
                pathname: `/products/${item.sys.id}`,
                query: { id: item.id },
              }}
            >
              {item.fields.name}
            </Link>
          </article>
        );
      })}
    </>
  );
};

export default Products;
