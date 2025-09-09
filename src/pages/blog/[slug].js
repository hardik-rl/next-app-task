import { useRouter } from "next/router";
import MyFirstPost from "@/components/blog/MyFirstPost";
import HeadingLg from "@/shared/HeadingLg";
import ArticlesCard from "@/shared/ArticlesCard";
import HeadingMd from "@/shared/HeadingMd";
import Comments from "@/components/blog/Comments";
import blogs from "@/data/blogs.json";

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <h1 className="text-center text-xl mt-10">404 | Blog not found</h1>;
  }

  return (
    <>
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
