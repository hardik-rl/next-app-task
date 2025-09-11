// import MyFirstPost from "@/components/blog/MyFirstPost";
// import HeadingLg from "@/shared/HeadingLg";
// import ArticlesCard from "@/shared/ArticlesCard";
// import HeadingMd from "@/shared/HeadingMd";
// import dynamic from "next/dynamic";
// import blogs from "@/data/blogs.json";
// import Head from "next/head";

// const Comments = dynamic(() => import("@/components/blog/Comments"), {
//   ssr: false,
// });

// export default function BlogDetailPage({ blog }) {
//   if (!blog) {
//     return <h1 className="text-center text-xl mt-10">404 | Blog not found</h1>;
//   }

//   return (
//     <>
//       <Head>
//         <title>Blog App | {blog.slug}</title>
//         <meta
//           name="description"
//           content="Welcome to the blog of My Website. Explore our latest blog posts and updates."
//         />
//         <link rel="canonical" href="https://v0-new-project-sccvwp1p3kv-git-uichanges-hardik-rls-projects.vercel.app" />
//       </Head>

//       <MyFirstPost blog={blog} />

//       <section className="bg-white">
//         <div className="comments container">
//           <HeadingMd>Comments</HeadingMd>
//           <Comments />
//         </div>
//       </section>

//       <section className="related-articles">
//         <HeadingLg>Related Articles</HeadingLg>
//         <div className="container px-0">
//           <ArticlesCard />
//         </div>
//       </section>
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//   const { slug } = context.params;
//   const blog = blogs.find((b) => b.slug === slug) || null;

//   return { props: { blog } };
// }


import MyFirstPost from "@/components/blog/MyFirstPost";
import HeadingLg from "@/shared/HeadingLg";
import ArticlesCard from "@/shared/ArticlesCard";
import HeadingMd from "@/shared/HeadingMd";
import dynamic from "next/dynamic";
import blogs from "@/data/blogs.json";
import Head from "next/head";

const Comments = dynamic(() => import("@/components/blog/Comments"), {
  ssr: false,
});

export default function BlogDetailPage({ blog, canonicalUrl }) {
  if (!blog) {
    return <h1 className="text-center text-xl mt-10">404 | Blog not found</h1>;
  }

  return (
    <>
      <Head>
        <title>Blog App | {blog.slug}</title>
        <meta
          name="description"
          content="Welcome to the blog of My Website. Explore our latest blog posts and updates."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <MyFirstPost blog={blog} />

      <section className="bg-white">
        <div className="comments container">
          <HeadingMd>Comments</HeadingMd>
          <Comments />
        </div>
      </section>

      <section className="related-articles">
        <HeadingLg>Related Articles</HeadingLg>
        <div className="container px-0">
          <ArticlesCard />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const blog = blogs.find((b) => b.slug === slug) || null;

  // Build canonical URL dynamically
  const baseUrl = "https://v0-new-project-sccvwp1p3kv-git-uichanges-hardik-rls-projects.vercel.app";
  const canonicalUrl = `${baseUrl}/blog/${slug}`;

  return { props: { blog, canonicalUrl } };
}
