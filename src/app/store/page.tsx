import ListGame from "@/components/listGame"


export const metadata = {
  title: "Games List",
  description: "Games Store",
};

async function getData() {
  const res = await fetch(`${process.env.API_URL}/video-games/?populate=*`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Store({}) {
  const  {data: listGames, meta} = await getData();
  
  return ( 
    <>
      <h1 className="text-6xl font-bold text-center text-sky-700">Store</h1>
      <h2 className="mb-6 text-4xl font-bold text-left text-sky-700" >Our games</h2>
       <ListGame
          items={listGames}
       />
    </>
  )
}
