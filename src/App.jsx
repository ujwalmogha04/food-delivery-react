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
import {Provider} from 'react-redux';
import Store from './store/Store';



function App() {
  return (
    <div>
      <Provider store = {Store}>
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
      </Provider>
    </div>
  );
}


  

export default App;



