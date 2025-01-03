import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => (
  <div style={styles.home}>
    <h1 style={styles.text}>Welcome to Our Store</h1>
  </div>
);
const Products = () => <h1 style={styles.text}>Products Page</h1>;
const About = () => <h1 style={styles.text}>About Page</h1>;
const Contact = () => <h1 style={styles.text}>Contact Us Page</h1>;

const styles = {
  home: {
    backgroundImage: "url('/clothing-bg.jpg')", // Ensure the path is correct
    backgroundSize: "cover", // Ensures it covers the whole screen
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents tiling
    height: "100vh", // Full height of the viewport
    width: "100vw", // Full width of the viewport
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  },
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
