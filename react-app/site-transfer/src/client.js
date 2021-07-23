import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "xpbtrfaf",
  dataset: "production",
  useCdn: true,
});
