import "./styles/index.css";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/gearscloud/image/upload/c_scale,q_auto:good,w_1000/v1609691111/We%20Should%20Talk/IMG_20200311_134949_kydtdp.webp"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {/* <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm <span className="text-brand-warning">Jesse</span>.
            <br className="hidden lg:inline-block" />I love to build things!
          </h2> */}
          <p className="mb-8 leading-relaxed">
            I'm a husband, father of two, an outdoor adventurer, a craftsman, a
            gamer and a teacher. My education has come from real world
            experience, and I'm constantly looking for new and exciting things
            to learn. I'm psyched about software development because it's like
            having a cheat code to the modern world!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
