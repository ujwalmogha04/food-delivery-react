import { useState } from "react";
import { LOGO_URL, MOON_IMG_URL, SUN_IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [entryPoint, setEntryPoint] = useState("Login");
  const [isSunVisible, setIsSunVisible] = useState(true);
  const [theme, setTheme] = useState("light");



  return (
    <div className="flex justify-between bg-pink-50 border-b-2 border-gray-300 shadow-md">
      <div>
        <img className="h-20 w-30 ml-16 pt-2  " src={LOGO_URL} alt="swiggy-logo"></img>
      </div>
      <div>
        <ul className='flex'>
          <li><img className={"h-14 w-12"} src={theme === "light" ? SUN_IMG_URL : MOON_IMG_URL} alt={theme === "light" ? "sun" : "moon"}
            onClick={() => {
              setIsSunVisible(!isSunVisible)
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}></img></li>
          {console.log(theme)}
          <li className="pt-3 m-3"><Link to="/about">About</Link></li>
          <li className="pt-3 m-3"><Link to="/contact">Contact Us</Link></li>
          <li className="pt-3 m-3">Cart</li>
          <button className="pt-2 mr-16 ml-3" onClick={() => {
            setEntryPoint(entryPoint === "Login" ? "Logout" : "Login")
          }}>{entryPoint}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;

