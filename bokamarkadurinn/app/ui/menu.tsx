"use client"
import './menu.css';
import React, { useState } from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);//setIsopen = toggle state
  const [isAlternateMenuOpen, setIsAlternateMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Toggle the isOpen state
    setIsAlternateMenuOpen(false); // Close alternate menu when main menu is toggled

  };
  
  const toggleAlternateMenu = () => {
    setIsAlternateMenuOpen(prevState => !prevState);
  };
  
  const closeMenu = () => {
    setIsOpen(false); // Close the menu
    setIsAlternateMenuOpen(false);
  };
  

  return (
    <div className="menu">
      <div className={`menu-toggle ${isOpen ? 'open' : 'closed'}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="menu-content">
          <nav className="menu-nav">
            <ul>
            <li>
                <Link href="/">
                  <button onClick={closeMenu}>Heim</button>
                </Link>
              </li>
              <li>
                <Link href="/innskraning">
                  <button onClick={closeMenu}>Innskráning</button>
                </Link>
              </li>
              <li>
                <Link href="/profill">
                  <button onClick={closeMenu}>Profill</button>
                </Link>
              </li>
              <li>
                <Link href="/um_okkur">
                  <button onClick={closeMenu}>Um Okkur</button>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="close-button" onClick={toggleMenu}>
            X
          </div>
        </div>
      )}
        </div>
  );
};

export default Menu;