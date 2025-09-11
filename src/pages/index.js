import Blog from "@/components/blog/Blog";
import Head from "next/head";

export default function Home() {
  return (
    <>
       <Head>
        <title>Home | Blog App</title>
        <meta
          name="description"
          content="Welcome to the homepage of My Website. Explore our latest blog posts and updates."
        />
        {/* <link rel="canonical" href="https://v0-new-project-sccvwp1p3kv-git-uichanges-hardik-rls-projects.vercel.app" /> */}
      </Head>
      <Blog />
    </>
  );
}
