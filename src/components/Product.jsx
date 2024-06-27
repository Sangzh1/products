import React from 'react';
import { Link } from 'react-router-dom';

function Product({ id, title, description, thumbnail, price, category }) {
  return (
    <div className='card card-compact bg-base-100 w-96 shadow-xl'>
      <figure>
        <img src={thumbnail} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <p>{category}</p>
        <div className='card-actions justify-end'>
          <Link to={`/about/${id}`}>
            <button className='btn btn-primary'>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
