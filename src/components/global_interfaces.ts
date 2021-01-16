import { Dispatch, SetStateAction } from "react";

export interface ICartItem {
    id: number,
    title: string,
    price: number

}

export type CartContextType = {
    cart: ICartItem[],
    setCart: (item: ICartItem) => void;
}
