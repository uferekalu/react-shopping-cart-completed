import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Container, Row, Col } from 'react-bootstrap';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartProducts = () => {

    const { cartItems, itemCount } = useContext(CartContext);

    return (
        <Container>
            <Link to={`/`}>Go back to product list</Link>
            <Row className="cart-heading-row">
                <Col xs={6} md={6} className="cart-heading">
                    <h3 className="cart-heading-text">My Bag</h3>
                </Col>
                <Col xs={6} md={6} className="cart-heading">
                    <h3 className="cart-heading-text">Total:  {itemCount} items</h3>
                </Col>
            </Row>
            
            {
                cartItems.map(product => <CartItem key={product.id} product={product}/>)
            }
        </Container>
    );
}

export default CartProducts;