import { useEffect } from "react";

function SkillsProject3() {
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
                Ce projet est en cours de production. L&#39;objectif est de
                créer une application fonctionnelle de recettes de cuisine.
                <br />
                <br />
                La bibliothèque React est utilisée côté Front-end. <br /> Du
                point de vue Back-end, le framework Express est indispensable{" "}
                pour l&#39;utilisation de la base de données avec Mysql. <br />{" "}
                <br />
                Ce projet nécessite l&#39;emploi d&#39;une gestion de projet ici
                Trello. La méthode agile est déployée avec l&#39;intégration de
                sprint qui peut être reconduit chaque semaine.
              </p>
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
