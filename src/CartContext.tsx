import React, { useState } from 'react'
import { CartContextType, ICartItem } from './components/global_interfaces';

type Props = {
    children: React.ReactNode;
  };
  

const initialContext: CartContextType = {
    cart:
        [
            { id: 1, title: "1", price: 10 },
            { id: 2, title: "3", price: 50 }
        ],
    setCart: (state: ICartItem): void => {
        console.log(//item);
        //throw new Error('Override it first, pal ;)');
    },
};


export const CartContext = React.createContext<CartContextType | null>(initialContext);

export const CartProvider = ({ children }: Props) => {

    const [cart, setCart] = useState<CartContextType>(initialContext);

    return (
        <CartContext.Provider value={{ ...cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}
