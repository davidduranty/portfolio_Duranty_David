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
          Ma maîtrise des langages front-end tels que HTML et CSS, combinée à ma
          capacité à concevoir des interfaces utilisateur conviviales à l aide d
          outils comme Figma, garantit un maquettage de qualité. <br /> Sur le
          plan du développement back-end, j ai découvert Express, offrant des
          solutions performantes et extensibles pour répondre aux besoins de l
          application. MySQL assure la gestion efficace des bases de données,
          garantissant la sécurité et la rapidité des opérations. <br /> La
          gestion de projets occupe une place centrale dans ma méthodologie de
          travail. J utilise Trello pour organiser les tâches, faciliter la
          collaboration au sein de l équipe, et assurer le respect des délais.
        </p>
      </div>
    </div>
  );
}

export default Content;
