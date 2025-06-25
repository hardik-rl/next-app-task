import HeadingLg from "@/shared/HeadingLg";
import Head from "next/head";
import Link from "next/link";


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
      <section className="bg-white h-100">
        <div className="container py-60">
          <HeadingLg>Welcome To Home</HeadingLg>
          <div className="text-center">
            <Link href={"/blog"} className="explore-more-link">Explore Our Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
