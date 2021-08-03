import "./styles/index.css";
import "./styles/custom.css";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
