import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import "./Root.scss";
import Footer from "../Footer/Footer";

function Root(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Root;
