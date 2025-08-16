import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import '../css/Cartbutton.css';
import icon from '../images/icon.jpg';

function Products() {
  // let [count, setcount] = useState("0")
  let [name, setname] = useState([])

  let navigate = useNavigate();

  let navigatetoCart = useNavigate();


  // console.log(name)
  // let update = () => {
  //   setcount(++count)
  // }

  let groot = async () => {
    let a = await fetch("https://dummyjson.com/products")
    let b = await a.json()
    setname(b.products)
    setfilterdataapi(b.products)
  }


  useEffect(() => {
    groot()
  }, [])

  let [filterdataapi, setfilterdataapi] = useState([])
  let filterapi = (c) => {
    let filtereddata = name.filter(data => data.category == c)
    setfilterdataapi(filtereddata)

  }
  let AllProducts = () => {
    setfilterdataapi(name)
  }

  let addtoCart = (id) => {
    let alreadyCart = JSON.parse(localStorage.getItem("cart")) || [];
    let productToAdd = name.filter((item) => item.id === id)[0];
    let check = alreadyCart.filter((data) => data.id === id)[0];

    if (check) {
      alert("Product already in cart")
      // navigatetoCart("/Cart")
    }
    else {
      alert("Product Added Successfully")
      alreadyCart.push(productToAdd);
      localStorage.setItem("cart", JSON.stringify(alreadyCart));
      // navigatetoCart("/Cart")

    }
  }



  return (
    <div>
      <div className='button'>
        <button onClick={AllProducts}>All Products</button>
        <button onClick={() => filterapi("beauty")}>beauty</button>
        <button onClick={() => filterapi("fragrances")}>fragrances</button>
        <button onClick={() => filterapi("furniture")}>furniture</button>
        <button onClick={() => filterapi("groceries")}>groceries</button>
        
      </div> 
     <div className="header-bar">
  <h1>My Products</h1>
  <button className="button" onClick={() => navigatetoCart("/Cart")}>
   <img src={icon} alt="Cart" className="cart-icon" />
  Cart</button>
</div>




      {filterdataapi.map((item) => {
        return (
          <>

            <div className='product-items'>
              <img src={item.images[0]} onClick={() => navigate("/ProductDetails", { state: item })} />
              <p>{item.category}</p>
              <h3>{item.title}</h3>
              <h2> ${item.price}</h2>
              <button onClick={() => addtoCart(item.id)}>Add to Cart</button>
            </div>


          </>
        )
      })}




    </div>
  )
}

export default Products
