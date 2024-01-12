import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="container">
      <h1>Mes Projets</h1>
      <div className="projects-container">
        <div className="project-1 project-df">
          <img className="project" src="wild-social.png" alt="Projet 1" />
          <Link to="/project1">
            <button className="btn">Wild social</button>
          </Link>
        </div>
        <div
          className="project-2 project-df
         "
        >
          <img className="project" src="studio.png" alt="Projet 2" />
          <Link to="/project2">
            <button className="btn">Studio Gihbli</button>
          </Link>
        </div>
        <div
          className="project-3 project-df
         "
        >
          <img className="project" src="birdies.png" alt="Projet-3" />
          <Link to="/project3">
            <button className="btn">Birdies</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
