import React from "react";
import "./reset.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import OfferSection from "./Components/OfferSection/OfferSection";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <OfferSection />
      <Footer />
    </>
  );
}

export default App;
