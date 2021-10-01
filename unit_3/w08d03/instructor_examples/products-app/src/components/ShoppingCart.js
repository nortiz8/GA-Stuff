import React, { Component } from 'react';

class ShoppingCart extends Component {
    render() {
        return(
            <div className='shopping-cart'>
                Shopping Cart
                {
                    this.props.cart.map((cartItem, index) => {
                        return (
                            <div onClick={() => this.props.deleteFromCart(cartItem.name)} key={index} className='cart-item'>
                                <h1>{cartItem.name}</h1>
                                <p>{cartItem.price}</p>
                                <p>{cartItem.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ShoppingCart