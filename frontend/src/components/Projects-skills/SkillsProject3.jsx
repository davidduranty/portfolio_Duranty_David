import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";

function SkillsProject3() {
  const filePath = "/" + `cv.pdf`;
  return (
    <div className="container">
      <div className="container-skills">
        <div className="content-about-project">
          <h1>A propos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            architecto, ea ex nobis quam labore nemo. Tenetur, quo sit optio
            totam iusto eius. Ad vero voluptate corporis repudiandae laudantium
            dolore nemo, magnam enim cum mollitia, id alias delectus deleniti
            soluta sed
          </p>
        </div>
        <div className="btn-project">
          <Link to={filePath} target="_blank">
            <button id="btn">
              Télécharger mon CV
              <CV_David />
            </button>
          </Link>
        </div>
        <div className="container-img-project">
          <div className="img-about-project">
            <img
              className="img-project"
              src="birdies.png"
              alt="photo site recette cuisine"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsProject3;
