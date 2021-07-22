import "./styles/index.css";
import "./styles/custom.css";
import { CodeIcon } from "@heroicons/react/solid";
import Carousel from "./Carousel";

function Projects() {
  return (
    <section id="projects" className=" body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 drop-shadow-2xl">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
            My Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed">
            Check Out a Few of My Favorite Projects
          </p>
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Projects;
