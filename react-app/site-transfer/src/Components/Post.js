import "./styles/index.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

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
    <section>
      <h1>Hello</h1>
      <div className="container mx-5 flex px-10 py-20 md:flex-row flex-col flex-wrap">
        <div>
          <img
            className="w-1/3"
            src={urlFor(postData.mainImage).url()}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-4xl">{postData.title}</h1>
        </div>
        <div>
          <BlockContent
            className="w-2/3"
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
        <div className="">
          <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author is Jesse"
          />
          <h4>{postData.name}</h4>
        </div>
      </div>
    </section>
  );
}

export default Post;
