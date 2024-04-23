import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './routes/About';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Body from "./components/Body";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import ErrorPage from './components/ErrorPage';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "/" element ={<Body/>} />
          <Route path = "/" element ={<Home/>} />
          <Route path="/menu/:restaurantName" element={<MenuPage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path = "/*" element = {<ErrorPage/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


  

export default App;



