import React, { Dispatch, useReducer } from 'react'
import {
    productReducer,
    shoppingCartReducer,
    ProductActions,
    ShoppingCartActions
} from "./reducers";


type ProductType = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
};

type CartItem = {
    quantity: number, 
    product: ProductType
}

type InitialStateType = {
    products: { products: ProductType[], loading: boolean, error: boolean },
    shoppingCart: {cartItems: CartItem[]};
};


const initialState: InitialStateType = {
    products: { products: [], loading: false, error: false },
    shoppingCart: {cartItems: []}
};


export const CartContext = React.createContext<{
    state: InitialStateType;
    dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
    state: initialState,
    dispatch: () => null
});


const mainReducer = (
    { products, shoppingCart }: InitialStateType,
    action: ProductActions | ShoppingCartActions
) => ({
    products: productReducer(products, action),
    shoppingCart: shoppingCartReducer(shoppingCart, action),

});


const CartProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider };
