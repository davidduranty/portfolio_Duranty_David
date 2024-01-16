import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";
import { useEffect } from "react";

function SkillsProject3() {
  const filePath = "/" + `cv.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      const skillsBoxesElement = document.querySelector(
        ".container-skills-boxes"
      );
      const imgProjectElement = document.querySelector(
        ".container-img-project"
      );

      if (window.scrollY > 200) {
        skillsBoxesElement.classList.add("visible");
      }

      if (window.scrollY > 300) {
        imgProjectElement.classList.add("visibleImg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container-max bg-purple">
      <div className="container">
        <div className="container-skills">
          <div className="container-skills-boxes">
            <div className="content-about-project">
              <h1>A propos</h1>
              <p>
                Ce projet est en cours de production. L objectif est de créer
                une application fonctionnelle de rectte de cuisine. La
                bibliothèque React est utilisée côté Front-end. Du point de vue
                Back-end, le framework Express est indispensable pour l
                utilisation de la base de données avec Mysql. <br /> Ce projet
                nécessite l emploi d une gestion de projet ici Trello. La
                méthode agile est déployée avec l intégration de sprint qui
                peuvent être reconduite chaque semaine.
              </p>
            </div>
            <div className="btn-project">
              <Link to={filePath} target="_blank">
                <button id="btn">
                  Télécharger mon CV
                  <CV_David />
                </button>
              </Link>
            </div>
          </div>
          <div className="container-img-project">
            <div className="img-about-project">
              <img
                className="img-project"
                src="acces.png"
                alt="photo site recette cuisine"
              />
            </div>
            <div className="img-about-project-add">
              <img src="login.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsProject3;
