import './App.css';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Checkout } from './components/Checkout/Checkout';
import React from 'react';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
