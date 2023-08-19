"use client";
import useBasket from "@/hooks/useBasket"
import ListGame from "@/components/listGame"

export default function Basket() {
  const { basketGamesData }: any = useBasket();
  return ( 
    <>
      <h1 className="text-6xl font-bold">Your Basket</h1>
      <ListGame
          items={basketGamesData}
       />
    </>
  )
}
