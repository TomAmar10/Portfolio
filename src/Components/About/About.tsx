import { Link } from "react-scroll";
import "./About.scss";

function About(): JSX.Element {
  return (
    <div className="About" id="About">
      <h1 className="header">ABOUT ME</h1>
      <span className="header-border"></span>
      <div className="details">
        <div className="about-me">
          <h5>Get to know me!</h5>
          <p>
            Hello! I'm Tom Amar, a 26-year-old full-stack web developer.
            Throughout my journey, I have honed my skills by building a variety
            of projects. <br />
            Currently, I am thrilled to be a key developer in a collaborative
            team working on an exciting app (you can find it in{" "}
            <Link to="Projects" spy={true} offset={-100}>
              Project
            </Link>{" "}
            section).
          </p>
          <p>
            What sets me apart is my ability to thrive in a group setting, <br />
            leveraging my teamwork skills.
            As a quick learner, I relish challenges and consistently push myself
            to new heights. <br />
            To ensure clean and efficient development, I write my code in
            TypeScript. I am confident that my expertise and dedication will
            make a great impact on any project I undertake.
          </p>
          <p>
            I'm open for job opportunities where i can contribute, grow and
            learn. If you have a good opportunity that matches my skills, don't
            hesitate to{" "}
            <Link to="Contact" spy={true} offset={-100}>
              contact
            </Link>{" "}
            me :)
          </p>
        </div>
        <div className="skills-area">
          <h5>My Skills</h5>
          <h6>Client side:</h6>
          <div className="my-skills">
            <span className="skill">React</span>
            <span className="skill">Redux-toolkit</span>
            <span className="skill">Angular</span>
            <span className="skill">Rxjs</span>
            <span className="skill">Next.js</span>
            <span className="skill">SASS</span>
            <span className="skill">Bootstrap</span>
          </div>
          <h6>Server side:</h6>
          <div className="my-skills">
            <span className="skill">NodeJS</span>
            <span className="skill">Express</span>
            <span className="skill">Typescript</span>
            <span className="skill">MongoDB</span>
            <span className="skill">Mongoose</span>
            <span className="skill">MySql</span>
            <span className="skill">Firebase</span>
            <span className="skill">MicroServices</span>
            <span className="skill">Socket</span>
          </div>
          <h6>Others:</h6>
          <div className="my-skills">
            <span className="skill">Git</span>
            <span className="skill">Docker</span>
            <span className="skill">AWS</span>
            <span className="skill">Heroku</span>
            <span className="skill">Netlify</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
