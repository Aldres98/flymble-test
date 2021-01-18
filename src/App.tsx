import './App.css';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Payment } from './components/Payment/Payment';
import React from 'react';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Cart} />
      <Route exact path="/payment" component={Payment} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
