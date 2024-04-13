import { useState } from "react";
import { LOGO_URL , MOON_IMG_URL , SUN_IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [entryPoint, setEntryPoint] = useState("Login");
  const [isSunVisible, setIsSunVisible] = useState(true);
  const [theme , setTheme] = useState("light");

  
  const toggleImage = () => {
    setIsSunVisible(prevState => !prevState);
    setTheme(theme ==="light" ? "dark" : "light")
  };  
  return (
    <div className={`header ${theme}`}>
      <div>
        <img className='swiggy-logo' src={LOGO_URL} alt="swiggy-logo"></img>
      </div>
      <div className='nav-item'>
        <ul>
          <li><img className= {isSunVisible? "sun-img" : "moon-img"} src = { isSunVisible ? SUN_IMG_URL : MOON_IMG_URL} alt = "sun"
          onClick={toggleImage}>
            </img></li>
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

  