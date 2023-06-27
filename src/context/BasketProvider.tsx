'use client'

import { useState, createContext } from "react";
import Games from "@/types/Games";

export const BasketContext = createContext({});

export default function BasketProvider({ children }: any) {
  const [basketGamesData, setBasketGamesData] = useState<Array<Games> | undefined>([]);

  const handleBasketData = () => {
    console.log("Provider Basket ...");
  };



  return (
    <BasketContext.Provider
      value={{ basketGamesData, handleBasketData }}
    >
      {children}
    </BasketContext.Provider>
  );
};

