import { useEffect, useState } from "react";
// import { CSSTransition } from "react-transition-group";
import HeaderHackathon from "../components/Projects-header/HeaderHackathon";
import SkillsHackathon from "../components/Projects-skills/SkillsHackathon";
import TechnologyHackathon from "../components/Technology/TechnologyHackathon";

function Hackathon() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fakeLoadDelay = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(fakeLoadDelay);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        document.querySelector(".arrow-fixed").classList.add("active");
      } else {
        document.querySelector(".arrow-fixed").classList.remove("active");
      }
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <HeaderHackathon />
          <SkillsHackathon />
          <TechnologyHackathon />
        </>
      )}
    </>
  );
}

export default Hackathon;
