import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <p>Accueil</p>
      </Link>
      <Link to="/project1">
        <p>Projet 1</p>
      </Link>
      <Link to="/project2">
        <p>Projet 2</p>
      </Link>
      <Link to="project3">
        <p>Projet 3</p>
      </Link>
    </div>
  );
}

export default Navbar;
