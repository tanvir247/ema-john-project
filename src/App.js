import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/">
                  <Product>
                    <div className="shop"></div>
                    <div className="cart"></div>
                  </Product>      
            </Route>
            <Route path="/product">
              <Product></Product>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>            
            </Route>
            <Route path="*">
              <NotFound></NotFound>            
            </Route>

          </Switch>
        </Router>
        
    </div>
  );
}

export default App;
