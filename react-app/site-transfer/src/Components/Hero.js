import "./styles/index.css";

function Hero() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm <span className="text-brand-warning">Jesse</span>.
            <br className="hidden lg:inline-block" />I love to build things!
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a freelance web developer, trail builder, bike mechanic, and
            general tinkerer currently residing in Charlottesville, VA. I love
            building solutions for my friends and clients, whether that's a
            beautiful website for their small business or a custom backyard pump
            track for their bike addiction!
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex bg-brand-warning border-0 py-2 px-6 text-black  hover:bg-brand-danger hover:text-white rounded text-lg"
            >
              My Work
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex bg-brand-warning border-0 py-2 px-6 text-black focus:outline-none hover:bg-brand-danger 
              hover:text-white rounded text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/gearscloud/image/upload/c_scale,q_auto,w_800/v1626296396/Portfolio/jw4_truywy.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
