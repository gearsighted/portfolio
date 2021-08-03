import "./styles/index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlogNav from "./BlogNav";

function Blog() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);
  return (
    <section id="blog">
      <BlogNav />
      {/* <div className="container mx-auto flex  md:flex-row flex-col h-">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            My Latest Blog Post
          </h1>
          <h2 className="title-font text-2xl font-medium mb-2">
            Post Title Here{" "}
          </h2>
          <p className="mb-8 leading-relaxed">Post Excerpt Here</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-4">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80"
          />
        </div>
      </div> */}
      <div className="container mx-auto flex px-10 py-5 md:flex-row flex-wrap flex-col justify-center items-center">
        <div className="mx-auto w-screen flex justify-center items-center">
          <h2 className="title-font text-2xl font-medium mb-10">
            All Blog Posts
          </h2>
        </div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link
              to={"/blog/" + post.slug.current}
              key={post.slug.current}
              className="sm:w-full md:w-1/4 mx-2"
            >
              <span key={index}>
                <span className="flex items-center justify-center">
                  <h3 className="title-font text-xl font-medium mb-2">
                    {post.title}
                  </h3>
                </span>
                <img src={post.mainImage.asset.url} alt="" />
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Blog;
