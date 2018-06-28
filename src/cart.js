import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ItemList from './ItemList'
import PropTypes from 'prop-types'

class Cart extends Component {
  render() {
    return (
      <div> 
      
     {this.props.cart.length === 0 && <h2>your cart is empty</h2>}

      {this.props.cart.length > 0 && (
        <div>
             {this.props.cart.map((items, index) => (
              <ul key={items.name}>
                
              <div class="container"> 
                <div><strong><img src={items.url} alt=""/></strong></div> 
                    <strong><div>{items.name}</div> </strong>
                   <button onClick={() => this.props.onRemoveItem(items, index)} className='item-add'>remove</button>
                  
              </div>
              </ul>
            )
          )
        }
      </div>
    )}
  </div>
  )
}}

export default Cart;