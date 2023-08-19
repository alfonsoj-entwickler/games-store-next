import Image from "next/image";
import Quantity from "@/components/quantity";

export const metadata = {
  title: "Games List",
  description: "Games Store",
};

const imageStyle: React.CSSProperties = {
  objectFit: "contain",
  objectPosition: "right",
};

async function getData(slug: string) {
  const res = await fetch(
    `${process.env.API_URL}/video-games?filters[url]=${slug}&populate=cover_image`
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
 
  return (
    <>
      <h1 className="mb-8 text-6xl font-bold text-center text-sky-700">
        {data[0].attributes?.title}
      </h1>
      <div className="flex flex-col md:flex-row md:w-4/5 md:m-auto">
        <div className="basis-1/2 relative right-10">
          <Image
            src={data[0].attributes.cover_image.data.attributes.url}
            alt={data[0].attributes.cover_image.data.attributes.name}
            fill
            style={imageStyle}
          />
        </div>
        <div className="basis-1/2">
          <p className="text-lg ">{data[0].attributes?.description}</p>
          <p className="text-5xl my-6 text-green-300 font-bold">
            {data[0].attributes?.price}€
          </p>
          <Quantity id={data[0].id} game={data[0]} /> 
        </div>
      </div>
    </>
  );
}
