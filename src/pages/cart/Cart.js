import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { formatNumber } from '../../helpers/utils';

import CheckoutForm from '../../components/CheckoutForm'

import { Elements, StripeProvider } from 'react-stripe-elements';

// const stripePromise = loadStripe("pk_test_51GyLKTD8bKf8QQtz5VPgmCbpvqrXJgAUMNIXkz41l8iqnYymMCPo9ePEDhMiFRcMXpoQzXIjw7F8WKjq7XhYVwtY00skOdOq55");

const Cart = () => {

    const { total, cartItems, clearCart, checkout, handleCheckout } = useContext(CartContext);

    return (
        <Layout title="Cart" description="This is the Cart page">
            <Row>
                {
                    cartItems.length > 0 ?
                    <CartProducts /> :
                    <Col xs={12} md={12} className="p-3 text-center text-muted">
                        Your cart is empty
                        <br />
                        <Link to={`/`}>Go back to product list</Link>
                    </Col>
                }
                { checkout && 
                    <Col className="p-3 text-center text-success">
                        <StripeProvider apiKey="pk_test_51GyLKTD8bKf8QQtz5VPgmCbpvqrXJgAUMNIXkz41l8iqnYymMCPo9ePEDhMiFRcMXpoQzXIjw7F8WKjq7XhYVwtY00skOdOq55">
                            <Elements>
                                <CheckoutForm totalCost={total} />
                            </Elements>
                        </StripeProvider>
                    </Col>
                }
            </Row>
                {
                    cartItems.length > 0 && 
                    <Row className="cart-total-row">
                        <Col xs={6} md={6}>
                            <h3 className="cart-total">TOTAL</h3>
                        </Col>
                        <Col xs={6} md={6}>
                            <h3 className="cart-total">{formatNumber(total)}</h3>
                        </Col>
                        <Col xs={6} md={6}>
                            <button type="button" className="btn btn-danger mb-2 mt-2 btn-sm clear" onClick={clearCart}>CLEAR</button>
                        </Col>
                        <Col xs={6} md={6}>
                            <button type="button" className="btn btn-primary mb-2 mt-2 checkout" onClick={handleCheckout}>CHECKOUT</button>
                        </Col>
                        
                    </Row>
                    
                }
        </Layout>
    )
}

export default Cart;