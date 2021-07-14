import './styles/index.css';

function Header() {
  return (
  <div id="bg_image" className="container h-screen w-screen mx-auto bg-transparent">
    <div className="py-20 h-screen w-screen flex items-center justify-center " >
    <div className="container mx-auto px-6 flex flex-col items-center justify-center ">
      <h1 className="text-4xl uppercase tracking-wide font-bold mb-2 w-100 mb-6">
        Jesse Woody, Web Developer
      </h1>
      <button className="bg-highlight-red hover:bg-background-green hover:drop-shadow-sm font-bold rounded-full mt-2 py-3 px-5 shadow-lg uppercase tracking-wider">
        My Work
      </button>
    </div>
  </div>
</div>
  );
}

export default Header;