import { useEffect } from "react";
import HeaderProject3 from "../components/Projects-header/HeaderProject3";
import SkillsProject3 from "../components/Projects-skills/SkillsProject3";
import TechnologyProject3 from "../components/Technology/TechnologyProject3";

function Project3() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <HeaderProject3 />
      <SkillsProject3 />
      <TechnologyProject3 />
    </>
  );
}

export default Project3;
