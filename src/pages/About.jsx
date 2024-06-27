import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/' + id)
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {product && (
        <div className='container'>
          <div className='mt-5'>
            <Link className='underline' to='/'>
              <button className='btn btn-outline btn-secondary'>Go Back</button>
            </Link>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <img src={product.thumbnail} className='w-[600px]' alt='' />
            </div>
            <div className='mt-10'>
              <h1 className='text-3xl mb-3 font-bold'>{product.title}</h1>
              <span className='uppercase font-bold tracking-[3px] text-green-400'>
                {product.category}
              </span>
              <p className='font-bold tracking-[2px] mb-3 text-green-700'>
                {product.brand}
              </p>
              <p>
                <strong>Rating:</strong> {product.rating}
              </p>
              <p className='w-[400px] mt-8 '>{product.description}</p>
              <p className='font-bold text-2xl mt-5 mb-5'>${product.price}</p>
              <h3>Other informations:</h3>
              <p>
                <strong>Shipping:</strong> {product.shippingInformation}
              </p>
              <p>
                <strong>Warranty Information:</strong>{' '}
                {product.warrantyInformation}
              </p>
              <p>
                <strong>Availability Status:</strong>{' '}
                {product.availabilityStatus}
              </p>
              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
