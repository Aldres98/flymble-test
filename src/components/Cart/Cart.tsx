import React from 'react';
import {ICartItem} from '../global_interfaces';
import {Hotel} from '../Hotel/Hotel';
import {Total} from '../Total/Total'
import './style.css';

const database: ICartItem[] = 
[
    {id: 1, title: "Hotel Grand Resort", price: 250},
    {id: 2, title: "Hotel Grand Resort 2 ", price: 350},
    {id: 3, title: "Hotel Grand Resort 3", price: 150},
    {id: 4, title: "Hotel Grand Resort ulta", price: 125.50},
    {id: 5, title: "Hotel Grand Resort plus plus", price: 115},
]

export const Cart = () => {

    return(
        <div>
            {
                database.map( item => {
                    let hotelObject: ICartItem = {id: item.id, title: item.title, price: item.price};
                   return <Hotel {...hotelObject} key={item.id} />
                })
            }
            <Total/>
        </div>
    )
}

