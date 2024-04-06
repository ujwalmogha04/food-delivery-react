import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [entryPoint, setEntryPoint] = useState("Login");
  
  return (
    <div className='header'>
      <div>
        <img className='swiggy-logo' src={LOGO_URL} alt="swiggy-logo"></img>
      </div>
      <div className='nav-item'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button onClick={() => {
            setEntryPoint(entryPoint === "Login" ? "Logout" : "Login")
          }}>{entryPoint}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;

  