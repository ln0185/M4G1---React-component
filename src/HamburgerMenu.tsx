// src/HamburgerMenu.tsx
import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.hamburgerMenu}>
      <button style={styles.hamburgerIcon} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <nav style={styles.menu}>
          <ul style={styles.menuList}>
            <li style={styles.menuItem}>
              <a href="#home" style={styles.menuLink}>
                Home
              </a>
            </li>
            <li style={styles.menuItem}>
              <a href="#about" style={styles.menuLink}>
                About
              </a>
            </li>
            <li style={styles.menuItem}>
              <a href="#contact" style={styles.menuLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;

const styles: { [key: string]: React.CSSProperties } = {
  hamburgerMenu: {
    position: "relative",
  },
  hamburgerIcon: {
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  menu: {
    position: "absolute",
    top: "40px",
    right: "0",
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    borderRadius: "4px",
    zIndex: 1,
  },
  menuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  menuItem: {
    margin: "8px 0",
  },
  menuLink: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
};
