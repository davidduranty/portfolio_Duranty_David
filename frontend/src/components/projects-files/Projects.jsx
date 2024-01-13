import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="container">
      <h1>Mes Projets</h1>
      <div className="projects-container">
        <div className="project-1 project-df">
          <img className="project" src="wild-social.png" alt="Projet 1" />
        </div>
        <div className="btn-link">
          <Link to="/project1">
            <button className="btn">Wild social</button>
          </Link>
        </div>
        <div className="project-2 project-df">
          <img className="project" src="studio.png" alt="Projet 2" />
        </div>
        <div className="btn-link">
          <Link className="btn" to="/project2">
            <button>Studio Gihbli</button>
          </Link>
        </div>
        <div
          className="project-3 project-df
         "
        >
          <img className="project" src="birdies.png" alt="Projet-3" />
        </div>
        <div className="btn-link">
          <Link to="/project3">
            <button>Birdies</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
