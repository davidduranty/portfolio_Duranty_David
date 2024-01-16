import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="container-max bg-purple">
      <div className="navbar">
        <Link className="link" to="/">
          <p
            onClick={handleClick}
            style={{ color: active ? "black" : "white" }}
          >
            Accueil
          </p>
        </Link>

        <Link className="link" to="/project1">
          <p
            onClick={handleClick}
            style={{ color: active ? "black" : "white" }}
          >
            Projet 1
          </p>
        </Link>

        <Link className="link" to="/project2">
          <p
            onClick={handleClick}
            style={{ color: active ? "black" : "white" }}
          >
            Projet 2
          </p>
        </Link>

        <Link className="link" to="project3">
          <p
            onClick={handleClick}
            style={{ color: active ? "black" : "white" }}
          >
            Projet 3
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
