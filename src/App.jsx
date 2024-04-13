import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './routes/About';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Body from "./components/Body";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './Entry/Login';

function App() {

  

  return (
    <div >
    <BrowserRouter>
    <Header />
    <Body />
    <Footer />
    <Routes>
      <Route path="/about" exact  element={<About />} />
      <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



