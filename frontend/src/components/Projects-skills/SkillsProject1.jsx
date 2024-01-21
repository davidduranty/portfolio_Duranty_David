import { useEffect } from "react";

function SkillsProject1() {
  useEffect(() => {
    const handleScroll = () => {
      const skillsBoxesElement = document.querySelector(
        ".container-skills-boxes"
      );
      const imgProjectElement = document.querySelector(
        ".container-img-project"
      );

      if (window.scrollY > 100) {
        skillsBoxesElement.classList.add("visible");
      }

      if (window.scrollY > 150) {
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
                Ce projet d&#39;un réseau social permet de créer un profil
                utilisateur pour accéder à l&#39;application. <br /> <br /> Le
                HTML et le CSS ont permis de créer un style de qualité. Grâce au
                JavaScript, on a la possibilité de liker ou disliker un post,
                ainsi que de laisser un commentaire sur une actualité. <br />{" "}
                <br /> La consultation des derniers messages est également
                accessible. Cette application est très fonctionnelle pour
                l&#39;utilisateur.
              </p>
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
