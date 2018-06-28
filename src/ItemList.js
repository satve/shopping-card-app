import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Cart from './cart.js'

class ItemList extends Component {
  render() {
  return (
  <div>
      <div class="cart">

  <Link to="/cart"
    className="cartLink">CART
  </Link>
  <div className="numbers">You have {this.props.cart.length}item in your card</div> 
      </div>

    <ul className='list'>
      {this.props.items.map((items, index) => (
        <li key={items.name}>
          
        <div class="container"> 
          <div><strong><img src={items.url} alt=""/></strong>
            </div> 
              <strong><div>{items.name}</div> </strong>
              <strong><div>{items.price}</div></strong>
              <strong><div>{items.description}</div></strong>
              <button onClick={() => this.props.onAddItem(items)} className='item-add'>ADD TO CART</button>
              
            </div>
          </li> 
        )
      )}
    </ul>
    </div>
  )
}
}


export default ItemList;