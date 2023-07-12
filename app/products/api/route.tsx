const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dms56gq.mongodb.net/?retryWrites=true&w=majority`;

export const getProductQuantity = async product => {
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db('product').collection('quantity');
  const data = await collection.findOne({ product: product });
  // console.log('data----->', data);
  return data;
};

export const updateProductQuantity = async product => {
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db('product').collection('quantity');
  const data = await collection.findOne({ product: product });
  // console.log('data----->', data);
  return data;
};
