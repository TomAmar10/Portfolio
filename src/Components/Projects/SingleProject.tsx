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
          {project.hotix && (
            <>
              <button
                className="link"
                onClick={() => navigateTo(project.links?.code)}
              >
                View Code
              </button>
              <button className="link" onClick={hotixClick}>
                To hear more about Hotix, click here!
              </button>
            </>
          )}
          {project.portfolio && (
            <button
              className="link"
              onClick={() => navigateTo(project.links?.front)}
            >
              View code
            </button>
          )}
          {project.dor && (
            <>
              <button
                className="link"
                onClick={() => navigateTo(project.links?.code)}
              >
                View Code
              </button>
              <button
                className="link"
                onClick={() => navigateTo(project.links?.website)}
              >
                Visit Website
              </button>
            </>
          )}
          {(project.instravel || project.shop) && (
            <>
              <div className="front-back-links">
                <button
                  className="link"
                  onClick={() => navigateTo(project.links?.front)}
                >
                  Frontend Code
                </button>
                <button
                  className="link"
                  onClick={() => navigateTo(project.links?.back)}
                >
                  Backend Code
                </button>
              </div>
              <button
                className="link"
                onClick={() => navigateTo(project.links?.website)}
              >
                Visit Website
              </button>
            </>
          )}
          <hr />
          <div className="tools">
            {project.tools.map((t, i) => (
              <span className="tool" key={i}>
                <span>#{t}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
