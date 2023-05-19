import ProjectSlider from "./ProjectSlider";
import "./Projects.scss";

function Projects(): JSX.Element {
  return (
    <div className="Projects" id="Projects">
      <div className="header-area">
        <h1 className="header">PROJECTS</h1>
        <span className="header-border"></span>
      </div>
      <ProjectSlider />
    </div>
  );
}

export default Projects;
