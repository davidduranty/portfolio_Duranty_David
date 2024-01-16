import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";
import { useEffect } from "react";

function SkillsProject2() {
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
                Le projet avait pour but de créer un site statique avec le
                framework Réact Js en faisant appel à une API pour traiter les
                réponses. Cette exercice à permis d aller plus loin dans la
                gestion du projet. Tout ceci a donné l occasion de se rendre
                compte de la puissance de ce framework.
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
                src="ghibli-cap.png"
                alt="photo site studio Gihbli"
              />
            </div>
            <div className="img-about-project-add">
              <img src="quizz.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsProject2;
