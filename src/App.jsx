import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './routes/About';
import Contact from "./routes/Contact";
import Body from "./components/Body";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Cart from './components/Cart';
import { Suspense, lazy } from 'react';
import Shimmer from './components/Shimmer';


const MenuPage = lazy(() => import('./components/MenuPage'));

function App() {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/body" element={<Body />} />
            <Route path="/menu/:restaurantName" element={<Suspense fallback={<Shimmer />}><MenuPage /></Suspense>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
