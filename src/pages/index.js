import Blog from "@/components/blog/Blog";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Blog App</title>
        <meta name="description" content="index, Welcome to the homepage of My Website. Explore our latest blog posts and updates." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Your Name or Company" />
        <meta name="keywords" content="blog, homepage, next.js, articles" />
      </Head>
      <Blog />
    </>
  );
}
