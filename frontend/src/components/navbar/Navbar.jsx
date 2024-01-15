import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-max bg-purple">
      <div className="navbar">
        <Link className="link" to="/">
          <p>Accueil</p>
        </Link>

        <Link className="link" to="/project1">
          <p>Projet 1</p>
        </Link>

        <Link className="link" to="/project2">
          <p>Projet 2</p>
        </Link>

        <Link className="link" to="project3">
          <p>Projet 3</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
