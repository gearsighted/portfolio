import "./styles/index.css";

function Post() {
  return (
    <section id="blog">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-4">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            My Latest Blog Post
          </h1>
          <p className="mb-8 leading-relaxed">
            Now that I've made the switch to a single page React app, I'm
            working on wiring up sanity for some content management. My first
            blog post will be published soon!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Post;
