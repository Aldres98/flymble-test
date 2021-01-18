

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    Create = "CREATE_PRODUCT",
    Delete = "DELETE_PRODUCT",
    Add = "ADD_PRODUCT",
    Subtract = "SUBTRACT_PRODUCT",
    DeleteFromCart = "DELETE_FROM_CART",
    Fetch_Init = "FETCH_INIT",
    Fetch_Success = "FETCH_SUCCESS",
    Fetch_Failure = "FETCh_FAILURE"
}

export type ProductType = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
};

type ProductPayload = {
    [Types.Create]: {
        id: number;
        title: string;
        price: number;
    };
    [Types.Delete]: {
        id: number;
    };
    [Types.Fetch_Init]: undefined,
    [Types.Fetch_Success]: {
        products: ProductType[]
    };
    [Types.Fetch_Failure]: undefined

};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
    ProductPayload
>];

export const productReducer = (
    state: { products: ProductType[], loading: boolean, error: boolean },
    action: ProductActions | ShoppingCartActions
) => {
    switch (action.type) {
        case Types.Fetch_Init:
            return {
                ...state,
                loading: true,
            }

        case Types.Fetch_Success:
            return {
                products: action.payload.products,
                loading: false,
                error: false
            }

        case Types.Delete: {
            let newState = state.products.filter(el => el.id !== action.payload.id);
            return {...state, products: newState }
        }
        default:
            return { ...state }

    }

};

type CartItem = {
    quantity: number,
    product: ProductType
}

type ShoppingCartPayload = {
    [Types.Add]: { cartItem: ProductType };
    [Types.Subtract]: { id: number };
    [Types.DeleteFromCart]: { id: number };
};

export type ShoppingCartActions = ActionMap<
    ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];


export const shoppingCartReducer = (
    state: { cartItems: CartItem[] },
    action: ProductActions | ShoppingCartActions
) => {
    switch (action.type) {
        case Types.Add: {
            const updatedCart = state.cartItems;
            const updatedItemIndex = updatedCart.findIndex(
                item => item.product.id === action.payload.cartItem.id
            );
            if (updatedItemIndex < 0) {
                updatedCart.push({ product: action.payload.cartItem, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return { ...state, cart: updatedCart };
        }
        case Types.Subtract: {
            let cartItems = state.cartItems;
            --cartItems.find(item => item.product.id === action.payload.id)!
                .quantity;
            return { ...state, cartItems }
        }

        case Types.DeleteFromCart: {
            let cartItems = state.cartItems.filter(el => el.product.id != action.payload.id);
            return {...state, cartItems: cartItems};
        }
        default:
            return state;
    }
};



