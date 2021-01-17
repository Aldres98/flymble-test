import { useContext } from 'react'
import { CartContext } from '../../CartContext'

export const Total = () => {

    const context = useContext(CartContext)
    console.log(context);
    console.log(context.state.products)

    return (
        <div>
            <p>Total items: {context?.state.shoppingCart} </p>
            <p>For price: 0</p>
        </div>
    )
}