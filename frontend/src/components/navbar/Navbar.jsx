import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-max bg-purple">
      <div className="navbar">
        <Link className="link" to="/">
          <p style={{ "--i": 1 }}>Accueil</p>
        </Link>

        <Link className="link" to="/project1">
          <p style={{ "--i": 2 }}>Projet 1</p>
        </Link>

        <Link className="link" to="/project2">
          <p style={{ "--i": 3 }}>Projet 2</p>
        </Link>

        <Link className="link" to="project3">
          <p style={{ "--i": 4 }}>Projet 3</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
