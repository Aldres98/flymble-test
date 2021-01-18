import React, { useEffect } from 'react';
import { Hotel } from '../Hotel/Hotel';
import { Total } from '../Total/Total'
import { CartContext } from '../../CartContext'
import { Types, ProductType } from "../../reducers";

import './style.css';

export const Cart = () => {
    const { state, dispatch } = React.useContext(CartContext);
    const url = "https://60038b62a3c5f10017913464.mockapi.io/product/products"

    useEffect(() => {
        dispatch({ type: Types.Fetch_Init })
        fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: Types.Fetch_Success, payload: { products: data } });
            })
            .catch(error => {
                console.log(error)
                alert("something went wrong, we're sorry :(")
                dispatch({ type: Types.Fetch_Failure })
            })
    }, [url])


    useEffect(() => {
        state.products.products.map(el => {
            if(!state.shoppingCart.cartItems.find(item => item.product.id == el.id)) {
            dispatch({
                type: Types.Add, payload: { cartItem: el }
            });
        }
        });
    }, [state.products.products.length])



    return (
        <div className="shopping-cart">
            <div className="shopping-cart-title">
                Cart
            </div>

            {
                state.products && !state.products.loading && state.products.products.map(item => {
                    let hotelObject: ProductType = { id: item.id, title: item.title, price: item.price, imageUrl: item.imageUrl };
                    return state.products.loading == false && <Hotel {...hotelObject} key={item.id} />
                })
            }
            <Total />
        </div>
    )
}

