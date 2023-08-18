"use client";
import { ChangeEvent, useState } from "react"
import useBasket from "@/hooks/useBasket"
import Games from "@/types/Games";

type Props = {
    id: number | null;
    game: Games;
};

export default function Quantity({ id = null, game }: Props) {
    
    const [quantity, setQuantity] = useState<number>(0);
    const [errorQuantity, setErrorQuantity] = useState<Boolean>(false);
    const { basketGamesData, handleBasketData }: any = useBasket();

    const handleSubmit = (e: { preventDefault: () => void, target: any }) => {
        e.preventDefault();

        if (quantity < 1) {
            setErrorQuantity(true);
            game.attributes.quantity = 0;
            return
        }
        setQuantity(e.target.value);
        console.log(e,quantity );
        game.attributes.quantity = quantity
        handleBasketData(game);
        //addBasket(selectGame);
    }

    const handleSelectQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
        setQuantity(Number(e.target.value));
        setErrorQuantity(false);
    }

    return (
        <form className="flex flex-col w-[8rem]" onSubmit={handleSubmit}>
            <p>Game: {id}</p>
            <label htmlFor="quantity">Quantity:</label>
            <select
                id="quantity"
                className="p-2  text-blue-900 text-center my-4"
                onChange={(e) => handleSelectQuantity(e)}
            >
                <option value="0">-- X --</option>
                <option value="1">-- 1 --</option>
                <option value="2">-- 2 --</option>
                <option value="3">-- 3 --</option>
                <option value="4">-- 4 --</option>
                <option value="5">-- 5 --</option>
            </select>
            <p className={`mb-2 text-rose-600 dark:text-rose-500 text-sm ${!errorQuantity && 'invisible opacity-0'}`}>This field is required</p>
            <input
                type="submit"
                value="Add game"
                className="px-6 py-4 transition-all bg-sky-500 hover:bg-sky-700 cursor-pointer"
            />
        </form>
    )
}

