import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Games List",
  description: "Games Store",
};

const imageStyle: React.CSSProperties = {
  objectFit: "cover",
  objectPosition: "top",
};

async function getData(slug: string) {
  const res = await fetch(
    `${process.env.API_URL}/post-games?filters[url]=${slug}&populate=cover`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Game({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data } = await getData(params.slug);
  console.log(data[0].attributes.cover);
  return (
    <>
      <h1 className="mb-8 text-6xl font-bold text-center text-sky-700">
        {data[0].attributes?.title}
      </h1>
      <div className="h-96 relative my-10">
        <Image
          src={data[0].attributes.cover.data.attributes.url}
          alt={data[0].attributes.cover.data.attributes.name}
          fill
          style={imageStyle}
        />
      </div>
      <p className="text-lg ">{data[0].attributes?.content}</p>
      <div className="flex justify-end my-10">
        <Link className="px-6 py-4 transition-all bg-green-500 hover:bg-green-700" href="/blog">Back</Link>
      </div>
      
    </>
  );
}
