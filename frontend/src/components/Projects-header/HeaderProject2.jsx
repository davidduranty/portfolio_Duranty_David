import { Link } from "react-router-dom";

function HeaderProject2() {
  return (
    <div className="project-info-container">
      <img className="img-info" src="ai.jpg" alt="image studio Ghibli" />
      <div className="project-title-container">
        <h1 className="title-wild">Studio Ghibli</h1>
        <p>Site de films du studio Gihbli</p>
      </div>
      <Link to="" target="_blank">
        <p className="btn-project">Studio Ghibli</p>
      </Link>
    </div>
  );
}

export default HeaderProject2;
