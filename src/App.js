import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import OfferSection from "./Components/OfferSection/OfferSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutSection />
      <OfferSection />
      <Footer />
    </div>
  );
}

export default App;
