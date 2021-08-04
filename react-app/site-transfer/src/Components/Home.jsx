import "./styles/index.css";
import "./styles/custom.css";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import AboutSite from "./AboutSite";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSite />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
