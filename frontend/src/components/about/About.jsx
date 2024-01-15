import { useEffect } from "react";
import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";

function About() {
  const filePath = "/" + `cv.pdf`;

  useEffect(() => {
    const handleScrollAbout = () => {
      const aboutBoxes = document.querySelector(".content-about");
      const imgBoxes = document.querySelector(".img-about-profil");

      if (window.scrollY > 200) {
        aboutBoxes.classList.add("active");
      }

      if (window.scrollY > 300) {
        imgBoxes.classList.add("activeImg");
      }
    };

    window.addEventListener("scroll", handleScrollAbout);

    return () => {
      window.removeEventListener("scroll", handleScrollAbout);
    };
  }, []);

  return (
    <div className="container-max bg-purple">
      <div className="container">
        <div className="container-about">
          <div className="content-about">
            <h1>A propos</h1>
            <p>
              Après une formation développeur fullstack à la Wild Code School,
              Je me lance dans le monde de la Tech pour intégrer une entreprise.
              Je recherche une alternance en Réact Js / Node Js à partir de
              février 2024.
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
    </div>
  );
}

export default About;
