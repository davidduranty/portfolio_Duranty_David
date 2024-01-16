import { Link } from "react-router-dom";

function HeaderProject2() {
  return (
    <div className="project-info-container">
      <img className="img-info" src="ai.jpg" alt="image studio Ghibli" />
      <div className="project-title-container">
        <h1 className="title-wild">Studio Ghibli</h1>
        <p>Site de films du studio Ghibli</p>
      </div>
      <Link
        to="https://2023-09-js-bdx-p2-croissants.vercel.app"
        target="_blank"
      >
        <p className="btn-project">Studio Ghibli</p>
      </Link>
    </div>
  );
}

export default HeaderProject2;
