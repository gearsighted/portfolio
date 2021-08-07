import "./styles/index.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
// import imageUrlBuilder from "@sanity/image-url";
import PostNav from "./PostNav";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

function Post() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <section className="">
      <PostNav />
      <div className="container flex px-5 py-10 justify-center items-center">
        {/* <div className="ml-1 mr-5">
          <img
            className="w-full max-w-xs"
            src={urlFor(postData.mainImage).url()}
            alt=""
          />
        </div> */}
        <div className="w-3/5 lg:w-1/2">
          <h1 className="text-4xl mb-5">{postData.title}</h1>
          <div>
            <BlockContent
              className="px-2"
              blocks={postData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
