import About from "./Components/About";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Footer /> 
      {/*
      <Contact />
      */}
    </div>
  );
}

export default App;
