import React, { Component } from 'react';
import './App.css';
import MyProducts from './components/MyProducts';
import ShoppingCart from './components/ShoppingCart';
import products from './products';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
      cart: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  addToCart(product) {
    this.setState({
      cart: [...this.state.cart, product]
    });
  }
  deleteFromCart(name) {
    const filteredCart = this.state.cart.filter(product => {
      return product.name !== name;
    });
    this.setState({ cart: filteredCart });
  }

  render() {
    return (
      <div className='App'>
        App
        <main>
          <MyProducts
            products={this.state.products}
            addToCart={this.addToCart}
          />
          <ShoppingCart
            cart={this.state.cart}
            deleteFromCart={this.deleteFromCart}
          />
        </main>
      </div>
    );
  }
}

export default App;
