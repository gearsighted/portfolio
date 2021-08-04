import "./styles/index.css";

function AboutSite() {
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg hero-image"
            alt="hero"
            src="https://res.cloudinary.com/gearscloud/image/upload/c_scale,q_auto:best,w_800/v1628034961/Portfolio/PXL_20210629_002836158_srcxzz.webp"
          />
        </div>{" "}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-5 ml-5 font-medium max-w-lg">
            About This Site:
          </h1>{" "}
          <p className="ml-5 leading-relaxed mb-5 max-w-lg">
            This website isn't only my portfolio, but also a place to experiment with, or at least post content about,
            any of the cool tech I'm learning. I try to keep the important parts fully functional, but it's hard 
            to make any promises when you're hacking together something behind the scenes. If you see this and have any 
            suggestions please feel free to drop them in the contact form :D
          </p>{" "}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="ml-4 inline-flex bg-brand-warning border-0 py-2 px-4 text-black focus:outline-none hover:bg-brand-danger 
              hover:text-white rounded text-lg "
            >
              Make A Suggestion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSite;