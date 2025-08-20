import "./App.css";
import { Review } from "./Components/Review";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Login } from "./Components/Login";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import Cart from "./Components/Cart";
import image from "../src/images/icon.jpg"
import ProductDetails from "./Components/ProductDetails";

function App() {
  let details = {
    name: "Tanishq Garg",
    city: "Jaipur",
    email: "tanishqgarg57@gmail.com",
    phone: "1234567890",
    img: image
  }
  return (
    <>
      <BrowserRouter>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to={"/Products"} className='text'>Products</Link></li>
            <li><Link to={"/Review"} className='text'>Review</Link></li>
          </ul>

<ul className="login">
            <li><Link to={"/"}>Signup</Link></li>
            <li><Link to={"/Login"}>Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Review" element={<Review />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductDetails" element={<ProductDetails/>} /> {/* ✅ fixed usage */}
          <Route path="/" element={<Signup />} />
           <Route path="/Cart" element={<Cart />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
