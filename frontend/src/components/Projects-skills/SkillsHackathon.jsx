import { useEffect } from "react";

function SkillsHackathon() {
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
                Au cours de ce hackathon technologique, notre équipe de cinq
                développeurs a créé une application web innovante en trois jours
                . Nous avons utilisé CSS et Figma pour le design, React.js pour
                le développement front-end, et Express (Node.js) pour le
                back-end. La collaboration étroite a été essentielle pour
                relever les défis techniques. Avec des itérations fréquentes et
                des démonstrations, nous avons ajusté rapidement notre travail.
                Grâce à notre engagement collectif, nous avons réussi à livrer
                une application fonctionnelle, le but cette application été à
                travers des questions sur le genre de personne concerné (Homme,
                Femme, No binary) et des questions sur des senteurs, d&#39;en
                ressortir des propositions de parfums.
              </p>
            </div>
          </div>
          <div className="container-img-project">
            <div className="img-about-project">
              <img
                className="img-project"
                src="fragrance1.png"
                alt="photo site wild social"
              />
            </div>
            <div className="img-about-project-add">
              <img src="selection.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsHackathon;
