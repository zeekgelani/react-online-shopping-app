import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "#282c34",
      position: "fixed", // Keeps it at the top
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000, // Ensures it stays on top
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    },
    logo: {
      color: "white",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "2rem", // Adds space between buttons
      margin: 0,
      padding: 0,
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#61dafb", // Optional hover effect
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>My Website</div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/products" style={styles.link}>Products</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
