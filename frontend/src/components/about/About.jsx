import { useEffect } from "react";
import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";

function About() {
  const filePath = "/" + `cv.pdf`;

  useEffect(() => {
    const handleScrollAbout = () => {
      const skillsBoxes = document.querySelector(".content-about");
      const imgProject = document.querySelector(".img-about-profil");

      if (window.scrollY > 200) {
        skillsBoxes.classList.add("visible1");
      }

      if (window.scrollY > 300) {
        imgProject.classList.add("visibleImg1");
      }
    };

    window.addEventListener("scroll", handleScrollAbout);

    return () => {
      window.removeEventListener("scroll", handleScrollAbout);
    };
  }, []);

  return (
    <div className="container">
      <div className="container-about">
        <div className="content-about">
          <h1>A propos</h1>
          <p>
            Après une formation développeur fullstack à la Wild Code School, Je
            me lance dans le monde de la Tech pour intégrer une entreprise. Je
            recherche une alternance en Réact Js / Node Js à partir de février
            2024.
          </p>
          <Link className="link-btn" to={filePath} target="_blank">
            <button id="btn">
              Télécharger mon CV
              <CV_David />
            </button>
          </Link>
        </div>
        <div className="img-about-profil">
          <img
            className="profile-img"
            src="moi.jpg"
            alt="photo david duranty"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
