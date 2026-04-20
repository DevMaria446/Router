import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const Header = () => {
    const nav= useNavigate()
    const {state}= useContext(CartContext)
  return (
    <>
      <div className="all-header">
        <div className="header-wrapper">
          <header className="header">
            <div className="header-left">
              <img className="logo" src="/src/assets/curve.png" alt="" />
            </div>
            <div className="header-right">
              <p onClick={()=>nav('/')}>Home</p>
              <p onClick={()=>nav('/about')}>About</p>
              <p onClick={()=>nav('/contact')}>Contact</p>
              <p onClick={()=>nav('/gallery')}>Gallery</p>
              <div onClick={() => nav('/carts')} style={{ cursor: "pointer" }}>
  <RiShoppingCartLine />
  <span>{state.length}</span>
</div>
              

              <button onClick={()=>nav('/register')}>Register For free!</button>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
