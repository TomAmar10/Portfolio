import "./slick.scss";
import "./slick-theme.scss";
import Slider from "react-slick";
import SingleProject from "./SingleProject";
import projects from "./allProjects";
import { useState } from "react";
import HotixModal from "./HotixModal";

function ProjectSlider(): JSX.Element {
  const [isHotixVisible, setIsHotixVisible] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const hotixClick = () => setIsHotixVisible(true);
  const closeModal = () => setIsHotixVisible(false);

  return (
    <>
      <Slider {...settings}>
        {projects.map((p) => (
          <SingleProject project={p} key={p.title} onHotixClick={hotixClick} />
        ))}
      </Slider>
      {isHotixVisible && <HotixModal onModalClose={closeModal} />}
    </>
  );
}

export default ProjectSlider;
