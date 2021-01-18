import { useContext} from 'react'
import { CartContext } from '../../CartContext'
import { Link } from 'react-router-dom';
import './style.css'

export const Total = () => {

    const context = useContext(CartContext)
    let totalItems = 0;
    let totalPrice = 0;
    context.state.shoppingCart.cartItems.map(el => {totalItems += el.quantity; totalPrice+= el.product.price*(el.quantity)});

    return (
        <div>
            <p>Total items: {totalItems} </p>
            <p>Price: {totalPrice}$</p>
            <Link className="payment-link" to="/payment"> <button className="link-button" >Payment</button></Link>
        </div>
    )
}
