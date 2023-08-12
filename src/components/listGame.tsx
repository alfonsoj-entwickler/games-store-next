import Image from "next/image";
import Games from "@/types/Games";
import Link from "next/link";

type Props = {
  items: [Games];
};

const imageStyle: React.CSSProperties = {
  objectFit: 'contain',
  objectPosition: 'left',
};
 

export default function ListGame({ items }: Props) {
  return (
    <>
      <div className="grid gap-x-8 gap-y-4 grid-cols-4 my-6">
        {items.length > 0 &&
          items.map((game) => (
            <div key={`game-${game.id}`} className="flex flex-col">
              <div className="h-96 relative">
                {game.attributes.cover_image && (
                  <Image 
                    src={game.attributes.cover_image.data.attributes.url}
                    alt={game.attributes.cover_image.data.attributes.name}
                    fill
                    style={imageStyle}
                  />
                )}
              </div>
              <div className="h-70 flex flex-col items-start">
                <h3 className="text-4xl my-6">{game.attributes.title}</h3>
                <p className="mb-6">{`${game.attributes.description.slice(0, 100)} ...`}</p>
                <p className="text-base mb-6">{game.attributes.price}€</p>
                {game.attributes.quantity && (
                   <p className="text-base mb-6">Quantity in basket: <span className="text-2xl font-bold ml-2">{game.attributes.quantity}</span></p>
                )}
                <Link className="px-6 py-4 transition-all bg-green-500 hover:bg-green-700" href={`/store/${game.attributes.url}`}>
                  Show game
                </Link>
              </div>
              
              
              
            </div>
          ))}
      </div>
    </>
  );
}
