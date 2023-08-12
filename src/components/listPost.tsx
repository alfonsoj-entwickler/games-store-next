import Image from "next/image";
import Post from "@/types/Post";
import Link from "next/link";

type Props = {
  items: [Post];
};

const imageStyle: React.CSSProperties = {
  objectFit: 'cover',
  objectPosition: 'top',
};
 

export default function ListPost({ items }: Props) {
  return (
    <>
      <div className="grid gap-x-8 gap-y-4 grid-cols-2 my-6">
        {items.length > 0 &&
          items.map((game) => (
            <div key={`game-${game.id}`} className="flex flex-col">
              <div className="h-96 relative">
                <Image 
                  src={game.attributes.cover.data.attributes.url}
                  alt={game.attributes.cover.data.attributes.name}
                  fill
                  style={imageStyle}
                />
              </div>
              <div className="h-70 flex flex-col items-start">
                <h3 className="text-4xl my-6">{game.attributes.title}</h3>
                <p className="mb-6">{`${game.attributes.content.slice(0, 200)} ...`}</p> 
                <Link className="px-6 py-4 transition-all bg-green-500 hover:bg-green-700" href={`/blog/${game.attributes.url}`}>
                  Show article
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
