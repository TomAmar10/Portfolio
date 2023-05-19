import "./Footer.scss";

function Footer(): JSX.Element {
  return (
    <div className="Footer">
      <div className="top">
        <div className="description">
          <h3>TOM AMAR</h3>
          <p>
            A fullstack web developer building both frontend and backend 
            of websites and applications
          </p>
        </div>
        <div className="links-container">
          <h3>SOCIAL</h3>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/tom-amar-b2494a25a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tom-amar-b2494a25a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tom-amar-b2494a25a/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://github.com/TomAmar10?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
      © Copyright 2023. Made by <a href="http://localhost:3000">Tom Amar</a>
      </div>
    </div>
  );
}

export default Footer;
