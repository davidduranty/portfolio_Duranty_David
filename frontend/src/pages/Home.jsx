import { useEffect } from "react";
import About from "../components/about/About";
import Header from "../components/header/Header";
import Projects from "../components/projects-files/Projects";
import Skills from "../components/skills/Skills";

function Home() {
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
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
export default Home;
