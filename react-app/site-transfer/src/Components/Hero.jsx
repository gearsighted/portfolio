import "./styles/index.css";

function Hero() {
  return (
    <section id="home">
      <div className="container mx-auto flex px-5 py-10 md:px-10 md:py-20 md:flex-row flex-col justify-center items-center">
        <div className="lg:flex-grow w-screen md:w-1/2 mx-10 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left md:mb-16  items-center text-center max-w-xl order-last md:order-first">
          <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium max-w-lg">
            Hi, I'm <span className="text-brand-warning">Jesse</span>.{" "}
            <br className="hidden lg:inline-block max-w-lg" />I Love to Build Interesting Things.{" "}
          </h1>{" "}
          <p className="mb-5 leading-relaxed max-w-lg">
            I'm a self taught JavaScript developer, trail builder, and general tinkerer, currently residing in Charlottesville, VA. I
            love building useful and interesting solutions for my friends and
            clients, whether that 's a beautiful website for their small
            business or a custom backyard pump track for their bike addiction!
          </p>{" "}
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex bg-brand-warning border-0 py-2 px-6 text-black  hover:bg-brand-danger hover:text-white rounded text-lg"
            >
              My Work{" "}
            </a>{" "}
            <a
              href="#contact"
              className="ml-4 inline-flex bg-brand-warning border-0 py-2 px-6 text-black focus:outline-none hover:bg-brand-danger 
              hover:text-white rounded text-lg "
            >
              Contact Me{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mb-5 md:mb-0 w-11/12 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg hero-image"
            alt="hero"
            src="https://res.cloudinary.com/gearscloud/image/upload/c_scale,q_auto,w_800/v1626296396/Portfolio/jw4_truywy.webp"
          />
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Hero;

// export default function About() {
//   return (
//     <section id="about">
//       <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//             Hi, I'm Reed.
//             <br className="hidden lg:inline-block" />I love to build amazing
//             apps.
//           </h1>
//           <p className="mb-8 leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
//             laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
//             Laborum, voluptas natus?
//           </p>
//           <div className="flex justify-center">
//             <a
//               href="#contact"
//               className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
//               Work With Me
//             </a>
//             <a
//               href="#projects"
//               className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
//               See My Past Work
//             </a>
//           </div>
//         </div>
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//           <img
//             className="object-cover object-center rounded"
//             alt="hero"
//             src="./coding.svg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
