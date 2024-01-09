import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";

function SkillsProject2() {
  const filePath = "/" + `cv.pdf`;
  return (
    <div className="container-about">
      <div className="content-about">
        <h1>A propos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          architecto, ea ex nobis quam labore nemo. Tenetur, quo sit optio totam
          iusto eius. Ad vero voluptate corporis repudiandae laudantium dolore
          nemo, magnam enim cum mollitia, id alias delectus deleniti soluta sed{" "}
          <br />
          <br />
          <br />
          nihil optio dolor nostrum similique iusto asperiores. Sunt, at.
        </p>
        <Link to={filePath} target="_blank">
          <button>
            Télécharger mon CV
            <CV_David />
          </button>
        </Link>
      </div>
      <div className="img-about">
        <img className="img" src="studio.png" alt="photo site studio Gihbli" />
      </div>
    </div>
  );
}

export default SkillsProject2;
