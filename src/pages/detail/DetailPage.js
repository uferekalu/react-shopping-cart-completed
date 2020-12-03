import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';

const DetailPage = ({ product }) => {

    const { addProduct, cartItems } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    
    return (
        <Container className="product">
            <Link to={`/`}>Go back to product list</Link>
            <div className="Home">
                <div className="lander">
                <p className="detail-title">{product.title}</p>
                <img 
                    src={product.image} 
                    className="img-fluid" 
                    alt={product.category} 
                    width="300px"
                    height="300px"
                    className="detail-img"
                />
                <hr />
                
                <p className="detail-desc">{product.description}</p>
                <div>
                    <p><button className="price">PRICE:</button> ${product.price}</p>
                </div>
                <div>
                {
                        isInCart(product) &&
                            <Link to="/cart">
                                <button 
                                onClick={() => addProduct(product)}
                                className="cart-button-detail">
                                    ADD MORE
                                </button>
                            </Link>
                }
                {
                        !isInCart(product) &&
                            <Link to="/cart">
                                <button 
                                onClick={() => addProduct(product)}
                                className="cart-button-detail">
                                    ADD TO CART
                                </button>
                            </Link>
                }
                </div>
                </div>
            </div>
        </Container>
    )

};

export default DetailPage;

