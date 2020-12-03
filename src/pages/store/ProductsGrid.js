import React, { useContext } from 'react';
import ProductItem from './ProductItem';

import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { ProductsContext } from '../../contexts/ProductsContext';

const ProductsGrid = () => {

    const { products } = useContext(ProductsContext)

    return (
        <Container>
            <h3 className="product-list-caption">Product List</h3>
            <h4 className="product-list-text">There are {products.length} Products</h4>
            <Row className="product-detail">
                {products.map(product => (
                    <ProductItem 
                    key={product.id}
                    product={product}
                    />
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductsGrid;