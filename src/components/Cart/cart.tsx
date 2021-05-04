import React  from 'react'
import{useSelector} from 'react-redux'
import {AppState} from '../../types'

// type CartProps = {inCart: inCart[]}

export default function Cart() {
    const {inCart} = useSelector((state:AppState) => state.country)
    
    const count = useSelector((state:AppState) => state.country.inCart.length)
    console.log(inCart, "from cart")
    return (
        <div>
            <p> {count} </p>
        </div>
    )
}
