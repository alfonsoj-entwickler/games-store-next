
export const metadata = {
  title: "Blog Game",
  description: "Blog about video games",
};

async function getData() {
  const res = await fetch(`${process.env.API_URL}/post-games/?populate=*`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Blog() {
  const  {data} = await getData();

  return ( 
    <>
      <h1 className="text-6xl font-bold text-center text-sky-700">Blog</h1> 
    </>
  )
}
