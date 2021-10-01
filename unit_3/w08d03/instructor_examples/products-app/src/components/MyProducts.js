import React, { Component } from 'react';

class MyProducts extends Component {
    render() {
        return(
            <div className='my-products'>
                My Products
                {
                    this.props.products.map((product, index) => {
                        return(
                            <div onClick={() => this.props.addToCart(product)} className='product' key={index}>
                                <h1>{product.name}</h1>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                            </div>
                            )
                    })
                }
            </div>
        )
    }
}

export default MyProducts