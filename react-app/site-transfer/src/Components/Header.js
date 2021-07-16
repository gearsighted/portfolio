import './styles/index.css';

function Header() {
  return (
  <div id="bg_image" className="container h-screen w-screen mx-auto bg-transparent">
    <div className="py-20 h-screen w-screen flex items-center justify-center " >
    <div className="container mx-auto px-6 flex flex-col items-center justify-center ">
      <h1 className="text-4xl uppercase tracking-wide font-bold mb-10 w-100 mb-6 text-brand-light">
        Jesse Woody, Web Developer
      </h1>
      <button className="bg-brand-success hover:bg-brand-warning hover:drop-shadow-sm font-bold rounded-full mt-2 py-3 px-5 shadow-lg uppercase tracking-wider text-black">
        My Work
      </button>
    </div>
  </div>
</div>
  );
}

export default Header;