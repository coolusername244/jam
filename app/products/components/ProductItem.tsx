'use client';
import React, { useState } from 'react';
import { updateProductQuantity } from '../api/route';

type Product = {
  name: string;
  description: string;
  price: number;
  quantity: string;
  imageUrl: string;
};

type ProductProps = {
  productInfo: Product;
};

const Product: React.FC<ProductProps> = ({ productInfo }) => {
  const { name, description, price, quantity, imageUrl } = productInfo;
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleQuantity = () => {};

  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>kr {price}</p>
      <button onClick={handleQuantity}>Buy Now</button>
      <p>quantity: {quantity}</p>
      <img src={imageUrl} alt={`${name}`} />
    </>
  );
};

export default Product;
