import React from 'react';
import { useRouter } from 'next/navigation';

const SingleProduct = async ({ params }) => {
  const id = params.id;

  const response = await fetch(
    `https://cdn.contentful.com/spaces/tktaafq3bm54/environments/master/entries/${id}?access_token=${process.env.ACCESS_KEY}`,
  );
  const product = await response.json();
  return (
    <div>
      <h2>{product.fields.name}</h2>
      <h2>{product.fields.description}</h2>
    </div>
  );
};

export default SingleProduct;
