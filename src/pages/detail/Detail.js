import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import DetailPage from './DetailPage';

const Detail = ({ match }) => {
  const {
    params: { productId },
  } = match;
  
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://fakestoreapi.com/products`;
    const fetchProduct = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${API_BASE_URL}/${productId}`);
        setProduct(result.data);
        console.log(result.data)
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchProduct();
  }, [productId]);

  return (
    <>
      {loading && (
        <div style={{ color: `green` }}>
          loading product detail for product ID: <strong>{productId}</strong>
        </div>
      )}
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
      {product && <DetailPage product={product} />}
    </>
  );
};

export default Detail;