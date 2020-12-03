import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return (
        <Col xs={6} md={4} lg={3} className="product-list">
            <Col xs={12} md={12} className="product-img">
            <Link to={`/product/${product.id}`}>
                <img 
                    src={product.image} 
                    alt={product.category} 
                    className="img-fluid prod-img d-block"
                    style={{margin: "0 auto"}} 
                    width="150px"
                    height="150px"
                />
            </Link>
            </Col>
            <Row className="other-product-detail">
                <Col xs={6} md={6}>
                    <h3>{product.category}</h3>
                </Col>
                <Col xs={6} md={6}>
                    <h3><Badge color="success">PRICE:</Badge> {formatNumber(product.price)}</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={6}>
                    {/* <Button className="detail-button">SEE DETAIL</Button> */}
                    {/* <Link to={`/product/${product.id}`}><Button className="detail-button">SEE DETAIL</Button></Link> */}
                </Col>
                <Col xs={12} md={12}>
                    {
                        isInCart(product) &&
                        <Link to={`/cart`}>
                            <Button 
                                onClick={() => increase(product)}
                                className="cart-button">ADD MORE
                            </Button>
                        </Link>
                    }
                </Col>
                <Col xs={12} md={12}>
                    {
                        !isInCart(product) &&
                        <Link to={`/cart`}>
                            <Button 
                                onClick={() => addProduct(product)}
                                className="cart-button">ADD TO CART
                            </Button>
                        </Link>
                    }
                </Col>
            </Row>
        </Col>
    )
}

export default ProductItem;