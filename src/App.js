import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/home';
import Cart from './pages/cart';
import Payment from './pages/payment';
import Invoice from './pages/invoice';

library.add(fas)


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/invoice" component={Invoice} />
        </div>
      </Router>
    )
  }
}

export default App;
