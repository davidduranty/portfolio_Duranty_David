import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    const handleScroll = () => {
      const skillsBoxesElement = document.querySelector(".title-skills");
      const imgSkillsElement = document.querySelector(".skills-container");

      if (window.scrollY > 500) {
        skillsBoxesElement.classList.add("activeSkills");
      }

      if (window.scrollY > 600) {
        imgSkillsElement.classList.add("activeContainer");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <div className="title-skills">
        <h1>Langages et Outils</h1>
      </div>
      <div className="skills-container">
        <div className="front-skills-container">
          <p>Front-end</p>
          <li>Html 5</li>
          <li>Css / Sass</li>
          <li>React Js</li>
        </div>
        <div className="back-skills-container">
          <p>Back-end</p>
          <li>Express</li>
          <li>Sql</li>
          <li>Node Js</li>
        </div>
        <div className="tool-skills-container">
          <p>Outils</p>
          <li>Figma</li>
          <li>Trello</li>
          <li>Scrum</li>
          <li>Dbeaver</li>
          <li>Github</li>
        </div>
        <div className="more-skills-container">
          <p>Soft Skills</p>
          <li>Sens du collectif</li>
          <li>Autonomie</li>
          <li>Goût de l effort</li>
          <li>Apprentissage actif</li>
        </div>
      </div>
    </div>
  );
}

export default Skills;
