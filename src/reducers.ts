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
    Fetch_Init = "FETCH_INIT",
    Fetch_Success = "FETCH_SUCCESS",
    Fetch_Failure = "FETCh_FAILURE"
}

type ProductType = {
    id: number;
    title: string;
    price: number;
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
        default:
            return { ...state }

    }

};


type ShoppingCartPayload = {
    [Types.Add]: undefined;
};

export type ShoppingCartActions = ActionMap<
    ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
    state: number,
    action: ProductActions | ShoppingCartActions
) => {
    switch (action.type) {
        case Types.Add:
            return state + 1;
        default:
            return state;
    }
};
