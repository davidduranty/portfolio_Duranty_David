import { useEffect } from "react";
import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";

function About() {
  const filePath = "/" + `cv.pdf`;

  useEffect(() => {
    const handleScrollAbout = () => {
      const aboutBoxes = document.querySelector(".content-about");
      const imgBoxes = document.querySelector(".img-about-profil");

      if (window.scrollY > 80) {
        aboutBoxes.classList.add("active");
      }

      if (window.scrollY > 120) {
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
              Actuellement en formation développeur web fullstack à la Wild Code
              School, j ai développé de l autonomie notamment grâce à la méthode
              de cours inversés pratiquée. Effectivement, salarié dans la
              fonction publique territoriale Bordeaux Métropole, j ai fait le
              choix d une reconversion professionnelle en mars 2023. <br />
              <br /> Après les démarches administratives nécessaires, j ai
              intégré la Wild Code School en septembre 2023. Cette formation me
              permet d acquérir les connaissances nécessaires au métier de
              développeur.
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
