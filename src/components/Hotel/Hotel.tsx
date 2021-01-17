import * as React from "react";
import { ICartItem } from '../global_interfaces';
import { CartContext } from '../../CartContext'
import { Types } from "../../reducers";
import './style.css';

export const Hotel = (props: ICartItem) => {
    const { state, dispatch } = React.useContext(CartContext);

    const addToCart = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        let cartItem: ICartItem = { id: props.id, price: props.price, title: props.title, imageUrl: props.imageUrl };
        console.log('clicked once');
        dispatch({
            type: Types.Add,
            payload: { cartItem: cartItem }
        });
    }

    const removeFromCart = (e: any) => {
        dispatch({
            type: Types.Subtract,
            payload: { id: props.id }
        })
    }

    let quantity = state.shoppingCart.cartItems.find(el => el.product.id == props.id)?.quantity ? state.shoppingCart.cartItems.find(el => el.product.id == props.id)!.quantity : 1;

    return (
        <div className="item">
            <div className="buttons">
                <span className="delete-btn"></span>
                <span className="like-btn"></span>
            </div>

            <div className="image">
                <img className="image-inner" src={props.imageUrl} alt="" />
            </div>

            <div className="description">
                <span>{props.title}</span>
            </div>

            <div className="quantity">
                <button disabled={quantity == 1} className="plus-btn" type="button" name="button" onClick={e => removeFromCart(e)}>
                    -
            </button>
                <input type="text" name="name" placeholder={String(quantity)} />
                <button disabled={quantity == 14} className="minus-btn" type="button" name="button" onClick={e => addToCart(e)}>
                    +
                </button>
            </div>
            <div className="total-price">${(props.price * quantity)}</div>
        </div>
    )
}

