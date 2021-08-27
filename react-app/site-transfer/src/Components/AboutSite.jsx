import "./styles/index.css";

function AboutSite() {
  return (
    <section className="w-screen">
      <div className="mx-auto flex px-5 md:py-20 md:flex-row flex-col justify-center items-center w-screen">
        <div className="lg:flex-grow w-screen md:w-3/5  lg:pr-24 md:pr-16 flex flex-col items-center justify-center mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-5 md:ml-10 font-medium">
            About This Site:
          </h1>{" "}
          <p className="md:ml-10 leading-relaxed mb-5 w-11/12 md:w-3/5">
            This website isn't only my portfolio, but also a place to experiment with, or at least post content about,
            any of the cool tech I'm learning. I try to keep the important parts fully functional, but it's hard 
            to make any promises when you're hacking together something behind the scenes. If you see this and have any 
            suggestions please feel free to drop them in the contact form :D
          </p>{" "}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="md:ml-10 inline-flex bg-brand-warning border-0 py-2 px-4 text-black focus:outline-none hover:bg-brand-danger 
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