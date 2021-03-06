import "./styles/index.css";
import "./styles/custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { projects } from "../data";

function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {projects.map((project) => (
        <a
          href={project.link}
          key={project.image}
          className="sm:w-1/2 w-100 p-4"
        >
          <div className="flex relative text-black rounded-lg project-div drop-shadow-lg ">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
              src={project.image}
            />
            <div className="transition duration-500 px-8 py-10 relative z-10 w-full border-2 border-white bg-white opacity-100 md:opacity-0 md:hover:opacity-100 rounded-lg">
              <h1 className="title-font text-lg font-medium text-brand-warning mb-1">
                {project.title}
              </h1>
              <h2 className="tracking-widest text-m title-font font-medium text-black mb-3">
                {project.subtitle}
              </h2>
              <p className="leading-relaxed text black">
                {project.description}
              </p>
            </div>
          </div>
        </a>
      ))}
    </Slider>
  );
}

export default Carousel;
