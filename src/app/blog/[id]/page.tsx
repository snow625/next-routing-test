import { Metadata } from "next";
type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
    description: post.body,
  };
}

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60, // get new data for cash every 60s
    },
  });
  if (!res.ok) throw Error("bad request");
  return res.json();
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
