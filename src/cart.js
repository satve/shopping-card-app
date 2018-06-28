import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ItemList from './ItemList'
import PropTypes from 'prop-types'

class Cart extends Component {
  render() {
    return (
      <div> 
      
      {this.props.cart.length === 0 && <h1>your cart is empty</h1>}

      {this.props.cart.length > 0 && (
        <div>
             {this.props.cart.map((items, index) => (
              <li key={items.id}>
                
              <div class="container"> 
                <div><strong><img src={items.url} alt=""/></strong></div> 
                    <strong><div>{items.name}</div> </strong>
                   <button onClick={() => this.props.onRemoveItem(items, index)} className='item-add'>remove</button>
                  
              </div>
              </li>
            )
          )
        }
      </div>
    )}
  </div>
  )
}}

export default Cart;