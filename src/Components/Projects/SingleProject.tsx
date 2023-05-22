import computerBg from "../../assets/computer.png";
import { Project } from "./allProjects";
import React from "react";
import "./SingleProject.scss";

interface props {
  project: Project;
  onHotixClick: Function;
}

function SingleProject(props: props): JSX.Element {
  const project = props.project;

  const hotixClick = () => props.onHotixClick();

  return (
    <div className="SingleProject">
      <div className="project-info">
        <h3 className="project-name">{project.title}</h3>
        <p className="description">{project.description}</p>
        <h5 className="built-with">Built with: </h5>
        <p className="tools">
          {project.tools.map((t, i) => (
            <React.Fragment key={i}>
              <span>{t}</span>
              {i + 1 < project.tools.length && "-"}
            </React.Fragment>
          ))}
        </p>
        <div className="project-links">
          {project.links && Object.keys(project.links).length > 1 && (
            <>
              <h5>Visit here:</h5>
              <div className="links">
                {project.links.back && (
                  <a href={project.links.back} target="_blank" rel="noreferrer">
                    Backend code
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                )}
                {project.links.front && (
                  <a
                    href={project.links.front}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frontend code
                  </a>
                )}
              </div>
            </>
          )}
          {project.hotix && (
            <div className="hotix-button" onClick={hotixClick}>
              <button>To hear more about Hotix, click here!</button>
            </div>
          )}
          {project.dor && (
            <>
              <a href={project.links?.website} target="_blank" rel="noreferrer">
                Visit Website
              </a>
              <span className="code-msg">
                * Code for this website is private
              </span>
            </>
          )}
          {project.portfolio && (
            <>
              <a href={project.links?.front} target="_blank" rel="noreferrer">
                View code
              </a>
              <span className="code-msg">
                Website is the current website you are on.
              </span>
            </>
          )}
        </div>
      </div>
      <div className="project-video">
        <img className="computer-bg" src={computerBg} alt="InsTravel" />
        <video controls={true} muted preload="auto" autoPlay>
          <source
            src={require(`../../${project.videoPath}`)}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default SingleProject;
