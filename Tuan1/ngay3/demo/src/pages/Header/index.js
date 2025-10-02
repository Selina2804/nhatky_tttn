import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="demo" />
          </Link>
        </div>

        {/* Navigation desktop */}
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/list">List</Link>
          <Link to="/detail/1">Detail</Link>
        </nav>

        {/* Nút menu khi thu nhỏ */}
        <div className="header-menu-icon" onClick={() => setMenuOpen(true)}>
          <IoMdMenu size={28} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)}></div>
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button className="close-btn" onClick={() => setMenuOpen(false)}>
                ✕
              </button>
            </div>
            <nav className="mobile-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/list">List</Link>
              <Link to="/detail/1">Detail</Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
