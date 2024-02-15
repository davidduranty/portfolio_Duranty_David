// import { useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
import HeaderHackathon from "../components/Projects-header/HeaderHackathon";
import SkillsHackathon from "../components/Projects-skills/SkillsHackathon";
import TechnologyHackathon from "../components/Technology/TechnologyHackathon";

function Hackathon() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 200) {
  //       document.querySelector(".arrow-fixed").classList.add("active");
  //     } else {
  //       document.querySelector(".arrow-fixed").classList.remove("active");
  //     }
  //   });
  // }, []);
  return (
    <>
      <HeaderHackathon />
      <SkillsHackathon />
      <TechnologyHackathon />
    </>
  );
}

export default Hackathon;
