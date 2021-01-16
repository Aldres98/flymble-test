import { useContext } from 'react'
import {CartContext} from '../../CartContext'

export const Total = () => {

    const context = useContext(CartContext)
    console.log(context);
    context?.setCart({id:32, title: "123", price: 123});

    return (
        <div>
        <p>Total items: {context?.cart.length} </p>
        <p>For price: 0</p>
        </div>
    )
}