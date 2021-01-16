import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Cart} from './components/Cart/Cart'
import reportWebVitals from './reportWebVitals';
import { CartContext, CartProvider } from './CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <Cart></Cart>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
