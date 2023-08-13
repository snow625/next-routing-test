import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Blog",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60, // get new data for cash every 60s
    },
  });
  return res.json();
}

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
