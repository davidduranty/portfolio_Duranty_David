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
          Voici un aperçu des principaux éléments de mon stack technologique :{" "}
          <br />
          HTML5 est ici pour structurer mes pages web, CSS pour styliser et
          JavaScript pour ajouter des fonctionnalités interactives et
          dynamiques. <br />
          React est ma bibliothèque JavaScript préférée pour la construction d
          interfaces utilisateur réactives et modulaires. <br />
          Express est mon framework côté serveur pour Node.js. <br />
          Pour la gestion des données, j utilise MySQL, une base de données
          relationnelle. <br />
          Trello est mon tableau de gestion de projet, où j organise mes tâches,
          collabore sur mes idées et suis ma progression. C est un outil
          précieux pour la gestion de projet agile. <br />
          Figma est mon outil de conception collaboratif. Il me permet de créer
          des maquettes. <br />
          GitHub est ma plateforme de gestion de code source. j utilise Git pour
          le contrôle de versions, et GitHub facilite la collaboration entre les
          membres de l équipe, le suivi des modifications et la gestion des
          problèmes.
        </p>
      </div>
    </div>
  );
}

export default Content;
