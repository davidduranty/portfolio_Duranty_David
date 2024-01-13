import { Link } from "react-router-dom";

function HeaderProject1() {
  return (
    <div className="container">
      <div className="project-info-container">
        <img className="img-info" src="baniere1.jpg" alt="" />
        <div className="project-title-container">
          <h1>WILD SOCIAL</h1>
          <p>Site d un réseau social</p>
        </div>
        <Link to="https://davidduranty.github.io/Wild-social/" target="_blank">
          <p className="btn-project">Wild Social</p>
        </Link>
      </div>
    </div>
  );
}

export default HeaderProject1;
