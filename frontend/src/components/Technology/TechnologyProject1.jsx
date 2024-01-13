function TechnologyProject1() {
  return (
    <div className="container">
      <h1 className="title-tech">Les technologies utilisées</h1>
      <div className="tech-grid">
        <div className="container-boxes">
          <div className="project-tech">
            <p className="text-title">Durée</p>
          </div>
          <div className="ul">
            <li>2 semaines</li>
          </div>
        </div>
        <div className="container-boxes">
          <div className="project-tech">
            <p className="text-title">Front-end</p>
          </div>
          <div className="ul">
            <li>Html 5</li>
            <li>Css / Sass</li>
            <li>Javascript</li>
            <li>Github</li>
          </div>
        </div>
        <div className="container-boxes">
          <div className="project-tech">
            <p className="text-title">Outils</p>
          </div>
          <div className="ul">
            <li>Figma</li>
            <li>Trello</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyProject1;
