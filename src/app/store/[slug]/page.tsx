import Games from "@/types/Games";

export const metadata = {
  title: "Games List",
  description: "Games Store",
};

async function getData(slug: string) {
   const res = await fetch(`${process.env.API_URL}/video-games?filters[url]=${slug}&populate=cover_image`);
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
  const {data} = await getData(params.slug);
  
  return (
    <>
      <h1 className="mb-8 text-6xl font-bold text-center text-sky-700">{data[0].attributes?.title}</h1>
      <p className="text-lg ">{data[0].attributes?.description}</p>
    </>
  );
}
