import { useEffect } from "react";

function SkillsMovie() {
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
                Pour ce projet personnel, l'idée était de travailler de
                nouvelles notions pour monter en compétences. Le framework
                utilisé est Angular côté Frontend et Nest js côté Backend. Ceci
                a permis l'acquisition de nouvelles fonctionnalités qui ouvrent
                la relation client, serveur. En plus de ces langages, je me suis
                servi Mikro Orm pour créer la relation bas de données.
                L'utilisation de dBeaver pour la créattion de mes différentes
                tables en PostgresSql. Et aussi, le support de Postman pour
                tester mes différentes requêtes. Et pour finir, la mise en place
                de test unitaires avec Jest.
              </p>
            </div>
          </div>
          <div className="container-img-project">
            <div className="img-about-project">
              <img
                className="img-project"
                src="productor.png"
                alt="photo site wild social"
              />
            </div>
            <div className="img-about-project-add">
              <img src="arrayMovie.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsMovie;
