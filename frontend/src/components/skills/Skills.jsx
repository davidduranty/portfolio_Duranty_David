function Skills() {
  return (
    <div className="container-max bg-purple">
      <div className="container">
        <div className="skills-container">
          <div className="front-skills-container">
            <p>Front-end</p>
            <li>Html 5</li>
            <li>Css / Sass</li>
            <li>React Js</li>
            <li>Node Js</li>
            <li>Github</li>
          </div>
          <div className="back-skills-container">
            <p>Back-end</p>
            <li>Express</li>
            <li>Sql</li>
            <li>Dbeaver</li>
          </div>
          <div className="tool-skills-container">
            <p>Outils</p>
            <li>Figma</li>
            <li>Trello</li>
            <li>Scrum</li>
          </div>
          <div className="more-skills-container">
            <p>Soft Skills</p>
            <li>Sens du collectif</li>
            <li>Autonomie</li>
            <li>Goût de l effort</li>
            <li>Apprentissage actif</li>
          </div>
        </div>
        <div className="content-skills">
          <h1>Mes compétences</h1>
          <p>
            Ma maîtrise des langages front-end tels que HTML et CSS, combinée à
            ma capacité à concevoir des interfaces utilisateur conviviales à l
            aide d outils comme Figma, garantit un maquettage de qualité. <br />{" "}
            Sur le plan du développement back-end, j ai découvert Express,
            offrant des solutions performantes et extensibles pour répondre aux
            besoins de l application. MySQL assure la gestion efficace des bases
            de données, garantissant la sécurité et la rapidité des opérations.{" "}
            <br /> La gestion de projets occupe une place centrale dans ma
            méthodologie de travail. J utilise Trello pour organiser les tâches,
            faciliter la collaboration au sein de l équipe, et assurer le
            respect des délais.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
