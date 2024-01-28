import { Link } from "react-router-dom";

function HeaderHackathon() {
  return (
    <div className="project-info-container">
      <img className="img-info" src="fleur.jpg" alt="" />
      <div className="project-title-container">
        <h1 className="title-wild">Fragrance de l&#39;Oréal</h1>
        <p>Site de choix de parfums</p>
      </div>
      <Link
        to="https://github.com/WildCodeSchool/tech-care/tree/dev"
        target="_blank"
      >
        <p className="btn-project">Fragrance</p>
      </Link>
    </div>
  );
}

export default HeaderHackathon;
