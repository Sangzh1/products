import React, { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList';

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((data) => data.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='container'>
      {products && <ProductsList products={products} />}
    </div>
  );
}

export default Home;
