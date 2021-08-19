import { InferGetStaticPropsType } from "next";

type Post = {
  project: string;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3100/");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h3>Hi</h3>
      {console.log(posts)}
    </>
  );
}

export default Blog;
