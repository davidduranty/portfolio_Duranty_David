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
                L&#39;objectif du projet était de créer un site statique avec la
                bibliothèque React Js en faisant appel à une API pour traiter
                les réponses. <br /> L&#39;utilisation de celle-ci a permis
                d&#39;aller plus loin dans la gestion du projet et de pouvoir
                également rajouter de nouvelles fonctionnalités comme(Like,
                Dislike).
                <br /> <br />
                Ceci a montré l&#39;occasion de se rendre compte de la puissance
                de cette bibliothèque.
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
