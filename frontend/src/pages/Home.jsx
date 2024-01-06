import About from "../components/about/About";
import Header from "../components/header/Header";
import Projects from "../components/projects-files/Projects";
import Skills from "../components/skills/Skills";

function Home() {
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
