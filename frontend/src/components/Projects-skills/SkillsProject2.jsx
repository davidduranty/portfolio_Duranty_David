import { useEffect } from "react";

function SkillsProject2() {
  useEffect(() => {
    const handleScroll = () => {
      const skillsBoxesElement = document.querySelector(
        ".container-skills-boxes"
      );
      const imgProjectElement = document.querySelector(
        ".container-img-project"
      );

      if (window.scrollY > 100) {
        skillsBoxesElement.classList.add("visible");
      }

      if (window.scrollY > 150) {
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
                framework React Js en faisant appel à une API pour traiter les
                réponses. Cette exercice à permis d aller plus loin dans la
                gestion du projet. <br /> <br /> Tout ceci a donné
                l&#39;occasion de se rendre compte de la puissance de ce
                framework.
              </p>
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
