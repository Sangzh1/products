import React from 'react';
import Product from '../components/Product';
function ProductsList({ products }) {
  return (
    <div className='grid grid-cols-2 gap-10'>
      {products.products.map((product) => {
        const { title, id, description, thumbnail } = product;
        return (
          <Product
            key={id}
            title={title}
            thumbnail={thumbnail}
            description={description}
            id={id}
          />
        );
      })}
    </div>
  );
}

export default ProductsList;
