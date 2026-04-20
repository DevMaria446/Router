import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import Register from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Carts from "./Components/Carts/Carts";
import Checkout from "./Components/Checkout/Checkout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail/>}/>
           <Route path="/carts" element={<Carts/>} />
            <Route path="/checkout" element={<Checkout />} />
    
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
