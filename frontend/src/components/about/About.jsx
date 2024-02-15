import { useEffect } from "react";
import { Link } from "react-router-dom";
import CV_David from "../../pages/CV_David";

function About() {
  const filePath = "/" + `CV___DURANTY_David.pdf`;

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
              Actuellement en formation de développeur web fullstack à la Wild
              Code School, j&#39;ai acquis de l&#39;autonomie, notamment grâce à
              la méthode de cours inversés pratiquée. <br /> En effet, en tant
              que salarié dans la fonction publique territoriale de Bordeaux
              Métropole, j&#39;ai fait le choix d&#39;une reconversion
              professionnelle en mars 2023. <br /> Après avoir accompli les
              démarches administratives nécessaires, j&#39;ai intégré la Wild
              Code School en septembre 2023. <br /> Cette formation me permet
              d&#39;acquérir les connaissances nécessaires au métier de
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
