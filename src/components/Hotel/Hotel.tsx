import * as React from "react";
import {ICartItem} from '../global_interfaces';
import {CartContext} from '../../CartContext'

import './style.css';
import { useContext } from "react";

export const Hotel = (props: ICartItem) => {   
    const context = useContext(CartContext)

const addToCart = () => {
    let cartItem: ICartItem = {id: props.id, price: props.price, title: props.title};
    console.log(cartItem);
}

return (
        <div>
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>
            <button onClick={addToCart}>Add to cart</button>
            <hr />
        </div>
    )
}
