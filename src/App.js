import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList'
import Cart from './cart.js'
import { Route } from "react-router-dom";

class App extends Component {
  state = {
  items :
   [{
    name: 'pen',
    price: 0.03,
    description: "blue pen",
    url: "https://www.colido.com/wp-content/uploads/2016/01/CoLiDo-3D-Pen.jpg",
},
{
    name: 'book',
    price: 10,
    description: "colored pages",
    url: "http://beenandgoing.com/wp-content/uploads/2015/04/LFTTVPBookImage.png",
},
{
    name: 'bag',
    price: 15,
    description: "more pockets",
    url: "https://ae01.alicdn.com/kf/HTB1FBEsJpXXXXcWXVXXq6xXFXXXf/New-2016-Fashion-Mini-Bags-PU-Leather-College-Bag-Rivet-Backpacks-Knitting-Leather-Backpack-Women-Free.jpg_640x640.jpg",
  },
{
    name: 'coke',
    price: 0.99,
    description: "diet coke",
    url: "http://www.lastratapizza.com/wp-content/uploads/2017/08/Diet-coke.jpg",
  }],
  cart: [],
};

  addItem = (cart) => {
    this.setState(state => ({
    cart: state.cart.concat(cart)
   })
)};


removeItem = (item, index) => {                            
  const cart1 = [...this.state.cart];
    cart1[index].quantity = 1;
    cart1.splice(index, 1);
    this.setState(state => ({
      cart: cart1
    }));
  };

  

     render() {
    return (
      <div>
      <div className="App">
      <Route exact path='/' render={() => (
        <ItemList  onAddItem={this.addItem} cart={this.state.cart} items={this.state.items}/>
      )}/>
<Route path='/cart' render={() => (
<Cart onRemoveItem={this.removeItem}  cart={this.state.cart}/>
)}/>
      </div>
      </div>
    );
  }
}

export default App;
