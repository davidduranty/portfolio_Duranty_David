import { Link } from "react-router-dom";

function HeaderMovie() {
  return (
    <div className="project-info-container">
      <img className="img-info" src="movie.jpg" alt="" />
      <div className="project-title-container">
        <h1 className="title-wild">Movie Project</h1>
        <p>Pour Travailler Angular et Nest Js</p>
      </div>
      <Link to="https://github.com/davidduranty/movie-projet" target="_blank">
        <p className="btn-project">Movie Project</p>
      </Link>
    </div>
  );
}
export default HeaderMovie;
