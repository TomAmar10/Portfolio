import { CircularProgress, Stack } from "@mui/material";
import "./LoadProjects.scss";

function LoadProjects(): JSX.Element {
  return (
    <div className="Projects" id="Projects">
      <div className="header-area">
        <h1 className="header">PROJECTS</h1>
        <span className="header-border"></span>
      </div>
      <div className="projects-container">
        <Stack spacing={2} direction="row">
          <CircularProgress className="spinner" />
        </Stack>
      </div>
    </div>
  );
}

export default LoadProjects;
