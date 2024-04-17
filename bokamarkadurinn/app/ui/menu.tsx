"use client"
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
                  <button onClick={toggleAlternateMenu}>Námsgrein</button>
              </li>
              <li>
                <Link href="/profill">
                  <button onClick={closeMenu}>Profill</button>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="close-button" onClick={toggleMenu}>
            X
          </div>
        </div>
      )}
       {isAlternateMenuOpen && (
        <div className="menu-content">
          <nav className="menu-nav">
          <ul>
                <li>
                  <Link href="/namsgrein/staerdfraedi">
                    <button onClick={closeMenu}>Stærfræði</button>
                  </Link>
                </li>
                <li>
                  <Link href="/namsgrein/islenska">
                    <button onClick={closeMenu}>Íslenska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/namsgrein/enska">
                    <button onClick={closeMenu}>Enska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/namsgrein/danska">
                    <button onClick={closeMenu}>Danska</button>
                  </Link>
                </li>
                <li>
                  <Link href="/namsgrein/annad">
                    <button onClick={closeMenu}>Annað</button>
                  </Link>
                </li>
              </ul>
          </nav>
          <div className="close-button" onClick={closeMenu}>
            X
          </div>
        </div>
      )}
      <style jsx>{`
  /* Menu */
  .menu {
    position: relative;
  }

  /* Menu Toggle */
  .menu-toggle {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
  }

  /* Bar */
  .bar {
    width: 20px;
    height: 2px;
    background-color: white;
  }

  /* Menu Content */
  .menu-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(41, 41, 41);
    height: 100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Menu Navigation */
  .menu-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu-nav ul li {
    margin-bottom: 10px;
  }

  .menu-nav ul li button {
    background-color: transparent;
    border: none;
    border-radius: 20px;
    width: 200px;
    padding: 20px;
    background-color: rgba(128, 0, 128, 0.527);
    cursor: pointer;
    font-size: 16px;
  }

  .menu-nav ul li button:hover {
    padding: 20px;
    background-color: rgba(211, 0, 211, 0.801);
  }

  /* Close Button */
  .close-button {
    position: fixed;
    top: 15px;
    left: 15px;
    cursor: pointer;
    font-size: 20px;
  }

  /* Responsive Styles */
  @media screen and (max-width: 768px) {
    .menu-nav ul li button {
      width: 150px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    .menu-nav ul li button {
      width: 120px;
      font-size: 12px;
    }
  }
`}</style>

    </div>
  );
};

export default Menu;