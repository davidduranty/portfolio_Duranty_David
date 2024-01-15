import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";
import { useEffect } from "react";

function SkillsProject1() {
  const filePath = "/" + `cv.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      const skillsBoxesElement = document.querySelector(
        ".container-skills-boxes"
      );
      const imgProjectElement = document.querySelector(
        ".container-img-project"
      );

      if (window.scrollY > 200) {
        skillsBoxesElement.classList.add("visible");
      }

      if (window.scrollY > 300) {
        imgProjectElement.classList.add("visibleImg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container-max bg-purple">
      <div className="container">
        <div className="container-skills">
          <div className="container-skills-boxes">
            <div className="content-about-project">
              <h1>A propos</h1>
              <p>
                Ce projet d un réseau social permet de pouvoir se créer un
                profil utilisateur afin de pouvoir accéder à l application. Le
                HTML et CSS ont permi de créer un style de qualité. Grâce au
                Javascript, on a la possibilité de liker ou desliker un post.
                Egalement de pouvoir laisser un commentaire sur une actualité.
                La consultaion des derniers messages sont accessibles. Cette
                application est très fonctionnelle pour l utilisateur.
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
          </div>
          <div className="container-img-project">
            <div className="img-about-project">
              <img
                className="img-project"
                src="acceuil.png"
                alt="photo site wild social"
              />
            </div>
            <div className="img-about-project-add">
              <img src="wildsocial.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsProject1;
