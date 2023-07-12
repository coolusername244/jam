'use client';

import React from 'react';
import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <section data-testid="product-section">
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
    </section>
  );
};

export default ProductList;
