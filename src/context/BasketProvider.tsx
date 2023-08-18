'use client'

import { useState, createContext } from "react";
import Games from "@/types/Games";

export const BasketContext = createContext({});

export default function BasketProvider({ children }: any) {
  const [basketGamesData, setBasketGamesData] = useState<Array<Games>>([]);

  const handleBasketData = (item:Games) => {
    
    setBasketGamesData(
      [
        ...basketGamesData.filter(game => game.id !== item.id),
        item
      ]
    );
  };



  return (
    <BasketContext.Provider
      value={{ basketGamesData, handleBasketData }}
    >
      {children}
    </BasketContext.Provider>
  );
};

