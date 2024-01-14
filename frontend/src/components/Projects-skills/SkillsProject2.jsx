import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";

function SkillsProject2() {
  const filePath = "/" + `cv.pdf`;
  return (
    <div className="container">
      <div className="container-skills">
        <div className="content-about-project">
          <h1>A propos</h1>
          <p>
            Le projet avait pour but de créer un site statique avec le framework
            Réact Js en faisant appel à une API pour traiter les réponses. Cette
            exercice à permis d aller plus loin dans la gestion du projet. Tout
            ceci a donné l occasion de se rendre compte de la puissance de ce
            framework.
          </p>
          <Link to={filePath} target="_blank">
            <button id="btn">
              Télécharger mon CV
              <CV_David />
            </button>
          </Link>
        </div>
        <div className="container-img-project">
          <div className="img-about-project">
            <img
              className="img-project"
              src="studio.png"
              alt="photo site studio Gihbli"
            />
          </div>
          <div className="img-about-project-add">
            <img src="capture.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsProject2;
