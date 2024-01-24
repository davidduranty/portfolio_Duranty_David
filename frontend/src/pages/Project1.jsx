import { useEffect } from "react";
import HeaderProject1 from "../components/Projects-header/HeaderProject1";
import SkillsProject1 from "../components/Projects-skills/SkillsProject1";
import TechnologyProject1 from "../components/Technology/TechnologyProject1";

function Project1() {
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
      <HeaderProject1 />
      <SkillsProject1 />
      <TechnologyProject1 />
    </>
  );
}

export default Project1;
