function TechnologyProject2() {
  return (
    <div className="container-tech">
      <h1 className="title-tech">Les technologies utilisées</h1>
      <div className="tech-grid">
        <div className="project-tech">
          <p>Durée</p>
          <ul>
            <li>3 semaines</li>
          </ul>
        </div>
        <div className="project-tech">
          <p className="text-title">Front-end</p>
          <ul>
            <li>Html 5</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>Réact Js</li>
          </ul>
        </div>
        <div className="project-tech">
          <p className="text-title">Back-end</p>
          <ul>
            <li>Express Js</li>
          </ul>
        </div>
        <div className="project-tech">
          <p className="text-title">Outils</p>
          <ul>
            <li>Figma</li>
            <li>Trello</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechnologyProject2;
