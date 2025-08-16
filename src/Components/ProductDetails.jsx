import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/ProductDetails.css'
import icon from '../images/icon.jpg';


function ProductDetails() {
  let { state } = useLocation();
  let navigate = useNavigate();
  let navigatetoCart = useNavigate();

  if (!state) return <p>⚠️ No product data available.</p>;

  let addtoCart = (id) => {
    let alreadyCart = JSON.parse(localStorage.getItem("cart")) || [];
    let check = alreadyCart.find((data) => data.id === state.id);
    if (check) {
      alert("Product already in cart");
    } else {
      alreadyCart.push(state);
      localStorage.setItem("cart", JSON.stringify(alreadyCart));
      alert("Product Added Successfully");
    }
  };

  return (
<>
     <div className="header-bar">
      <h1></h1>
      <button className="button" onClick={() => navigatetoCart("/Cart")}>
       <img src={icon} alt="Cart" className="cart-icon" />
      Cart</button>
    </div>
    <div className="product-page">
      <div className="image-section">
        <div className="thumbnail-column">
          {state.images.map((img, index) => (
            <img key={index} src={img} alt="thumb" className="thumbnail" />
          ))}
        </div>
        <div className="main-image">
          <img src={state.images[0]} alt={state.title} />
        </div>
      </div>

      <div className="info-section">
        <h2 className="product-title">{state.title}</h2>
        <p className="price"><del>${state.price + 20}</del> ${state.price}</p>

        <p><strong>Brand:</strong> {state.brand}</p>
        <p><strong>Category:</strong> {state.category}</p>
        <p><strong>Stock:</strong> {state.stock}</p>
        <p><strong>Availability:</strong> {state.availabilityStatus}</p>
        <p><strong>Description:</strong> {state.description}</p>

        <div className="action-buttons">
          <button className="back-btn" onClick={() => navigate('/products')}>Back to Products</button>
          {/* <button className="cart-btn" onClick={() => {
            addtoCart(state.id)}\> Add to Cart</button> */}
              <button  className="cart-btn"  onClick={() => addtoCart(state.id)}>Add to Cart</button>

        </div>
      </div>
    </div></>
  );
}


export {ProductDetails};
