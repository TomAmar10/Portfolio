import { Project } from "./allProjects";
import { lazy, Suspense } from "react";
import "./SingleProject.scss";

interface props {
  project: Project;
  onHotixClick: Function;
}

function SingleProject(props: props): JSX.Element {
  const project = props.project;

  const hotixClick = () => props.onHotixClick();

  const navigateTo = (url: string | undefined) => {
    window.open(url, "_blank");
  };

  const LazyVideo = lazy(() => import("./LazyVideo"));
  return (
    <div className="SingleProject">
      <div className="project-video">
        <Suspense fallback={<div>Loading video...</div>}>
          <LazyVideo video={project.videoPath} />
        </Suspense>
      </div>
      <div className="project-details">
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div>
          <button
            className="link"
            onClick={() => navigateTo(project.links?.code)}
          >
            <i className="fa-brands fa-github"></i>
            <span>View Code</span>
          </button>
          {project.hotix ? (
            <button className="link-first link" onClick={hotixClick}>
              To hear more about Hotix, click here!
            </button>
          ) : (
            <button
              className="link-first link"
              onClick={() => navigateTo(project.links?.website)}
            >
              <i className="fa-solid fa-globe"></i>
              <span>Visit Website</span>
            </button>
          )}
          <hr />
          <div className="tools">
            {project.tools.map((t, i) => (
              <span className="tool" key={i}>
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
