import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


import ProductsContextProvider from './contexts/ProductsContext';
import Routes from './routes/routes';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </ProductsContextProvider>
  );
}

export default App;
