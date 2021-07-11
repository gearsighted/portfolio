import './styles/index.css';

function Header() {
  return (
  <div className="container h-screen w-screen mx-auto bg-transparent">
    <div className="py-20 h-screen w-screen flex items-center justify-center " >
    <div className="container mx-auto px-6 flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-2 w-100">
        Jesse Woody, Web Developer
      </h1>
      <button className="bg-highlight-light hover:bg-highlight-medium hover:drop-shadow-sm font-bold rounded-full mt-2 py-4 px-8 shadow-lg uppercase tracking-wider">
        See My Work
      </button>
    </div>
  </div>
</div>
  );
}

export default Header;