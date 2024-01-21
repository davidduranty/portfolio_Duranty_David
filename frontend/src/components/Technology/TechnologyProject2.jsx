import { useEffect } from "react";

function TechnologyProject2() {
  useEffect(() => {
    const handleScroll = () => {
      const skillsBoxesElement = document.querySelector(".title");
      const imgProjectElement = document.querySelector(".tech-grid");

      if (window.scrollY > 500) {
        skillsBoxesElement.classList.add("visible");
      }

      if (window.scrollY > 600) {
        imgProjectElement.classList.add("visibleImg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <div className="title">
        <h1 className="title-tech">Les technologies utilisées</h1>
      </div>
      <div className="tech-grid">
        <div className="container-boxes">
          <div className="project-tech">
            <p className="text-title">Durée</p>
            <div className="ul">
              <li>
                3 semaines <br /> por réaliser ce projets <br /> avec 3 autres
                collaborateurs.
              </li>
            </div>
          </div>
        </div>
        <div className="container-boxes">
          <div className="project-tech">
            <p className="text-title">Front-end</p>
            <div className="ul">
              <li>Sass</li>
              <li>Réact Js</li>
            </div>
          </div>
        </div>
        <div className="container-boxes">
          <div className="project-tech">
            <p className="text-title">Back-end</p>
            <div className="ul">
              <li>Express Js</li>
            </div>
          </div>
        </div>
        <div className="container-boxes">
          <div className="project-tech">
            <p className="text-title">Outils</p>
            <div className="ul">
              <li>Figma</li>
              <li>Trello</li>
              <li>Github</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyProject2;
