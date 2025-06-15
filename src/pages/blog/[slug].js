import { useRouter } from "next/router";
import { blogPosts } from "../data/blogData";
import { StarFillIcon } from "@/shared/Icon";
import MyFirstPost from "@/components/blog/MyFirstPost";
import HeadingLg from "@/shared/HeadingLg";
import ArticlesCard from "@/shared/ArticlesCard";
import Comments from "@/components/blog/Comments";
import HeadingMd from "@/shared/HeadingMd";

const BlogPage = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) return <p>Loading...</p>;
    if (!post) return <p>Post not found</p>;

    return (
        <>
            <MyFirstPost />
            <section className="bg-white">
                <div className="comments container">
                  <HeadingMd>Comments</HeadingMd> 
                    {post.comments.length > 0 ? (
                        post.comments.map((comment) => (
                            <div key={comment.id} className="comments-card">
                                <img src="https://i.pravatar.cc/40?img=1" alt="user" />
                                <div className="w-100">
                                    <div className="comments-card__content">
                                        <span>{comment.name}</span>
                                        <div className="tour-guide__card-rating">
                                            <StarFillIcon />
                                            <StarFillIcon />
                                            <StarFillIcon />
                                            <StarFillIcon />
                                            <StarFillIcon />
                                            <span>(5.0)</span>
                                        </div>
                                        <span>{comment.date}</span>
                                    </div>
                                    <p className="comments-card__content-text">{comment.text}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>
                <div className='container'>
                    <Comments />
                </div>
            </section>
            <section className='related-articles'>
                <HeadingLg>Related Articles</HeadingLg>
                <div className='container px-0'>
                    <ArticlesCard />
                </div>
            </section>
        </>
    );
};

export async function getStaticPaths() {
    const paths = blogPosts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const post = blogPosts.find((item) => item.slug === params.slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
}

export default BlogPage;
