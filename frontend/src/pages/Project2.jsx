import { useEffect } from "react";
import HeaderProject2 from "../components/Projects-header/HeaderProject2";
import SkillsProject2 from "../components/Projects-skills/SkillsProject2";
import TechnologyProject2 from "../components/Technology/TechnologyProject2";

function Project2() {
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
      <HeaderProject2 />
      <SkillsProject2 />
      <TechnologyProject2 />
    </>
  );
}

export default Project2;
