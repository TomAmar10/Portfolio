import logo from "../../assets/tom-logo.png";
import { Link } from "react-scroll";
import { useState } from "react";
import "./Navbar.scss";

function Navbar(): JSX.Element {
  const pages = ["Home", "Projects", "About Me", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <Link to="Home" className="navbar-brand" spy={true} offset={-100}>
          <div className="logo">
            <img src={logo} className="logo-img" alt="Logo" />
          </div>
          <span className="logo-name">TOM AMAR</span>
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`menu ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            {pages.map((p) => (
              <li className="nav-item" key={p}>
                <Link
                  onClick={closeMenu}
                  className="nav-link"
                  activeClass="active"
                  to={p}
                  spy={true}
                  offset={-100}
                >
                  {p.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {pages.map((p) => (
              <li className="nav-item" key={p}>
                <Link
                  className="nav-link"
                  activeClass="active"
                  to={p}
                  spy={true}
                  offset={-100}
                >
                  {p.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
