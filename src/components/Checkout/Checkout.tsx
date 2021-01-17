import { useContext } from 'react'
import { CartContext } from '../../CartContext'
import { Link } from 'react-router-dom';

export const Checkout = () => {

    const context = useContext(CartContext)
    let totalItems = 0;
    let totalPrice = 0;
    console.log(context.state.shoppingCart)
    context.state.shoppingCart.cartItems.map(el => {totalItems += el.quantity; totalPrice+= el.product.price*(el.quantity)});

    return (
        <div>
            <p>Total items: {totalItems} </p>
            <p>Price: {totalPrice}$</p>
            <Link to="/">Cart</Link>
        </div>
    )
}

export {}