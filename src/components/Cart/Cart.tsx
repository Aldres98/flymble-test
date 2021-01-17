import React, { useEffect } from 'react';
import { ICartItem } from '../global_interfaces';
import { Hotel } from '../Hotel/Hotel';
import { Total } from '../Total/Total'
import { CartContext } from '../../CartContext'
import { Types } from "../../reducers";

import './style.css';

export const Cart = () => {
    const { state, dispatch } = React.useContext(CartContext);

    useEffect(() => {
        dispatch({ type: Types.Fetch_Init })
        console.log(state.products.loading)
        fetch("https://60038b62a3c5f10017913464.mockapi.io/product/products")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch({ type: Types.Fetch_Success, payload: { products: data } })
                console.log(state.products.loading)
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: Types.Fetch_Failure })
            })
    }, ["https://60038b62a3c5f10017913464.mockapi.io/product/products"])


    return (
        <div>
            {
                state.products && !state.products.loading && state.products.products.map(item => {
                    let hotelObject: ICartItem = { id: item.id, title: item.title, price: item.price };
                    return state.products.loading == false && <Hotel {...hotelObject} key={item.id} />
                })
            }
            <Total />
        </div>
    )
}

