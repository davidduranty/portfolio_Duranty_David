import { useEffect } from "react";

function Content() {
  useEffect(() => {
    const handleScroll = () => {
      const contentBoxesElement = document.querySelector(".title-content");
      const imgContentElement = document.querySelector(".text");

      if (window.scrollY > 700) {
        contentBoxesElement.classList.add("activeContent");
      }

      if (window.scrollY > 800) {
        imgContentElement.classList.add("visibleContainer");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container-max bg-purple">
      <div className="content-skills">
        <div className="title-content">
          <h1>Mes compétences</h1>
        </div>
        <p className="text">
          Vous trouverez ci-dessous un aperçu des principaux éléments de mon
          stack technologique :
          <br />
          CSS pour styliser et JavaScript pour ajouter des fonctionnalités
          interactives et dynamiques. <br />
          React, ma bibliothèque pour la construction d interfaces utilisateur
          réactives et modulaires. <br />
          Express, mon framework côté serveur pour Node.js. <br />
          MySQL pour la gestion des données.
          <br />
          Trello, mon tableau de gestion de projet.
          <br />
          Figma, mon outil de conception collaboratif. <br />
          GitHub est ma plateforme de gestion de code source.
        </p>
      </div>
    </div>
  );
}

export default Content;
