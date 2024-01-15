import { useEffect } from "react";
import { Link } from "react-router-dom";

function Projects() {
  useEffect(() => {
    const handleScroll = () => {
      const projectBoxesElement = document.querySelector(".title-h1");
      const imgProjectElement = document.querySelector(".projects-container");

      if (window.scrollY > 900) {
        projectBoxesElement.classList.add("activeProject");
      }

      if (window.scrollY > 1000) {
        imgProjectElement.classList.add("visibleProject");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <h1 className="title-h1">Mes Projets</h1>
      <div className="projects-container">
        <div className="projects-ccontainer-cards">
          <div className="project-1 project-df">
            <img className="project" src="wildsocial.png" alt="Projet 1" />
          </div>
          <div className="btn-link">
            <Link to="/project1">
              <button className="btn">Wild social</button>
            </Link>
          </div>
        </div>
        <div className="projects-ccontainer-cards">
          <div className="project-2 project-df">
            <img className="project" src="ghibli-cap.png" alt="Projet 2" />
          </div>
          <div className="btn-link">
            <Link className="btn" to="/project2">
              <button>Studio Gihbli</button>
            </Link>
          </div>
        </div>
        <div className="projects-ccontainer-cards">
          <div
            className="project-3 project-df
         "
          >
            <img className="project" src="birdies-cap.png" alt="Projet-3" />
          </div>
          <div className="btn-link">
            <Link to="/project3">
              <button>Birdies</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
