/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { getProductQuantity } from '../api/route';
import ProductItem from '../components/ProductItem';

type Product = {
  name: string;
  description: string;
  price: number;
  quantity: string;
  imageUrl: string;
};

type SingleProductProps = {
  params: { id: string };
};

const SingleProduct: React.FC<SingleProductProps> = async ({ params }) => {
  console.log(params);
  const id = params.id;

  const response = await fetch(
    `https://cdn.contentful.com/spaces/tktaafq3bm54/environments/master/entries/${id}?access_token=${process.env.ACCESS_KEY}`,
  );
  const product = await response.json();
  // console.log(product);
  const imageId = product.fields.featuredProductImage.sys.id;
  const imageResponse = await fetch(
    `https://cdn.contentful.com/spaces/tktaafq3bm54/environments/master/assets/${imageId}?access_token=${process.env.ACCESS_KEY}`,
  );
  const imageJson = await imageResponse.json();
  const imageUrl = imageJson.fields.file.url;

  const quantity = await getProductQuantity(product.fields.slug);
  // console.log('quantity------>', quantity.quantity);

  const productInfo: Product = {
    name: product.fields.name,
    description: product.fields.description,
    price: product.fields.price,
    quantity: quantity.quantity,
    imageUrl,
  };

  console.log(productInfo);

  return <ProductItem productInfo={productInfo} />;
};

export default SingleProduct;
