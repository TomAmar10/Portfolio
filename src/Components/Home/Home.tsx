import "./Home.scss";
import logo from "../../assets/tomlogo3.png";
import { Link } from "react-scroll";
import { getWhatsappTom } from "../Projects/HotixMembers";

function Home(): JSX.Element {
  const whatsApp = getWhatsappTom();
  return (
    <div className="Home" id="Home">
      <div className="details-container">
        <h1 className="home-header">HEY, I'M TOM AMAR</h1>
        <img src={logo} alt="tom" />
        <p className="main-paragraph">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
        <Link to="Projects" offset={-100} className="btn my-projects-btn">
          <span>PROJECTS</span>
        </Link>
      </div>
      <div className="profile-container">
        <img src={logo} alt="tom" />
      </div>
      <div className="links-container">
        <a
          href="https://www.linkedin.com/in/tom-amar-b2494a25a/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/TomAmar10?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={whatsApp} target="_blank" rel="noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="tel:+972525416514" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
