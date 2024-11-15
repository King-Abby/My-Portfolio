import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="page">
        <Header />
        <Skills />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
