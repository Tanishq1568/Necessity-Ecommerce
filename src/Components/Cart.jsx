import React, { useEffect, useState } from 'react';
import '../css/Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  let [cartItems, setCartItems] = useState([]);
  let [total, setTotal] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart")) || [];
    let dataWithQuantity = data.map((item) => ({ ...item, quantity: item.quantity || 1 }));
    setCartItems(dataWithQuantity);
  }, []);

  useEffect(() => {
    let calculatedTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(calculatedTotal);
  }, [cartItems]);

  let handleQuantityChange = (index, qty) => {
    let updatedCart = [...cartItems];
    updatedCart[index].quantity = parseInt(qty);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  let removeItem = (index) => {
    let updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    
    
    <div className="cart-page">
      <h2><i className="fas fa-shopping-bag"></i> My Cart</h2>
      <div className="cart-container">
        <div className="cart-left">
          
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
           
            cartItems.map((item, index) => (
             
              <div className="cart-item" key={index}>
                <img src={item.images[0]} alt={item.title} />
                <div className="cart-details">
                  
                  <h3>{item.title}</h3>
                  <p><strong>Color:</strong> Default</p>
                  <p><strong>Size:</strong> Default</p>
                  <p><strong>In Stock</strong></p>
                  <div className="actions">
                    
                    <select
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, e.target.value)}
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>{qty}</option>
                      ))}
                    </select>
                    <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
          <p><strong>{cartItems.length} Item(s)</strong></p>
        </div>

        <div className="cart-right">
          <div className="summary">
            <p><span>Shipping:</span> TBD</p>
            <p><span>Discount:</span> -$0</p>
            <p><span>Tax:</span> TBD</p>
            <hr />
            <p className="total"><span>Estimated Total:</span> ${total.toFixed(2)}</p>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
