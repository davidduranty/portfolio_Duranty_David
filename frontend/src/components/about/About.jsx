import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";
import { useEffect } from "react";

function About() {
  const filePath = "/" + `cv.pdf`;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        document.querySelector(".content-about").classList.add("visible");
      }
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        document.querySelector(".img-about-profil").classList.add("visibleImg");
      }
    });
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
