import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Root.scss";
import { Suspense, lazy } from "react";
import LoadProjects from "../Projects/LoadProjects";
const Projects = lazy(() => import("../Projects/Projects"));

function Root(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Home />
        <Suspense fallback={<LoadProjects />}>
          <Projects />
        </Suspense>
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Root;
