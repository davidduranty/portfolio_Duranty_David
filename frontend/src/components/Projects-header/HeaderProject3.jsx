import { Link } from "react-router-dom";

function HeaderProject3() {
  return (
    <div className="project-info-container">
      <img className="img-info" src="kitchen.jpg" alt="Image projet 3" />
      <div className="project-title-container">
        <h1>BIRDIES</h1>
        <p>Site de recettes de cuisine</p>
      </div>
      <Link to="https://davidduranty.github.io/Wild-social/" target="_blank">
        <p className="btn-project">Birdies</p>
      </Link>
    </div>
  );
}

export default HeaderProject3;
