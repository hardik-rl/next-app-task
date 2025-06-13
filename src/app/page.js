import HeadingLg from "@/components/HeadingLg";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-white h-100">
      <div className="container py-60">
        <HeadingLg>Welcome To Home</HeadingLg>
        <div className="text-center"><Link href={"/blog"}>Navigation To Blog Page</Link></div>
      </div>
    </section>
  );
}
