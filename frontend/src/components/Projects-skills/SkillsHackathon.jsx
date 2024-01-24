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
                développeurs a créé une application web innovante en seulement
                trois jours. <br /> Nous avons utilisé CSS et Figma pour le
                design, React.js pour le développement front-end, et Express
                (Node.js) pour le back-end. <br /> La collaboration étroite a
                été essentielle pour relever les défis techniques. <br /> Grâce
                à des itérations fréquentes et des démonstrations, nous avons
                ajusté rapidement notre travail. <br /> Notre engagement
                collectif nous a permis de livrer une application fonctionnelle.{" "}
                <br /> L&#39;objectif de cette application était de, à travers
                des questions sur le genre de la personne concernée (Homme,
                Femme, Non-binaire) et des questions sur des senteurs, générer
                des propositions de parfums.
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
