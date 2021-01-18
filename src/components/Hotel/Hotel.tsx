import * as React from "react";
import { CartContext } from '../../CartContext'
import { Types, ProductType } from "../../reducers";
import './style.css';
import  cartDelete from "../../assets/cartDelete.png";

export const Hotel = (props: ProductType) => {
    const { state, dispatch } = React.useContext(CartContext);
    let quantity = state.shoppingCart.cartItems.find(el => el.product.id == props.id)?.quantity ? state.shoppingCart.cartItems.find(el => el.product.id == props.id)!.quantity : 1;

    const addToCart = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        let cartItem: ProductType = { id: props.id, price: props.price, title: props.title, imageUrl: props.imageUrl };
        dispatch({
            type: Types.Add,
            payload: { cartItem: cartItem }
        });
    }
    const subtractFromCart = (e: any) => {
        dispatch({
            type: Types.Subtract,
            payload: { id: props.id }
        })
    }

    const deleteFromCart = (e: any) => {
        dispatch({type: Types.Delete, payload: {id: props.id}});
        dispatch({type: Types.DeleteFromCart, payload: {id:props.id}})
    }

    React.useEffect(() => {
        quantity = state.shoppingCart.cartItems.find(el => el.product.id == props.id)?.quantity ? state.shoppingCart.cartItems.find(el => el.product.id == props.id)!.quantity : 1;
    }, [state.shoppingCart.cartItems.length])

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
                <button disabled={quantity == 1} className="plus-btn" type="button" name="button" onClick={e => subtractFromCart(e)}>
                    -
            </button>
                <input type="text" name="name" placeholder={String(quantity)} />
                <button disabled={quantity == 14} className="minus-btn" type="button" name="button" onClick={e => addToCart(e)}>
                    +
                </button>
            </div>
            <div className="total-price">${(props.price * quantity)}</div>
            <div className="cart-item-trash" onClick={e => deleteFromCart(e)}>
                <img className="item-trash-ic" src={cartDelete}></img>
            </div>
        </div>
    )
}

