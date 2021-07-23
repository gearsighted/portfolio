import "./styles/index.css";
import "./styles/custom.css";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
