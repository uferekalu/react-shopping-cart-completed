import React, { useContext } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from "react-router-dom";

const CartItem = ({product}) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
        <Container>
            <Row className="cart-items">
                <Col xs={6} md={6}>
                <Link to={`/product/${product.id}`}>
                    <img 
                        src={product.image} 
                        alt={product.title}
                        style={{maxHeight: "200px", maxWidth: "200px"}} 
                        className="img-fluid d-block cart-image"
                    />
                </Link>
                </Col>
                <Col xs={6} md={6}>
                    <h3 className="cart-items-title">{product.title}</h3>
                    <h3 className="cart-items-price">{formatNumber(product.price)}</h3>
                    {
                        product.quantity > 1 &&
                        <Button
                            onClick={() => decrease(product)}
                            className="cart-items-decrease" 
                        > - 
                        </Button> 
                    } <span className="cart-items-quantity">{product.quantity} </span>
                        <Button
                            onClick={() =>increase(product)}
                            className="cart-items-increase"
                        > + 
                        </Button>
                        {
                        product.quantity === 1 && 
                        <Button
                            onClick={() => removeProduct(product)}
                            className="thrash"
                        >
                            <i className="fas fa-trash-alt mt-1"></i>
                        </Button>      
                    }
                </Col>
               
                
            </Row>
        </Container>
    )
}

export default CartItem;