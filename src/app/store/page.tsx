import ListGame from "@/components/listGame"


export const metadata = {
  title: "Games List",
  description: "Games Store",
};

export default function Store({}) {

  return ( 
    <>
      <h1 className="text-6xl font-bold text-center text-sky-700">Store</h1> 
      <ListGame />
    </>
  )
}
