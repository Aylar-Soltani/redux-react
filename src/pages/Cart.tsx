import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {RemoveCountry} from '../redux/actions/country'
import { AppState } from '../types'



export default function Cart() {

  const dispatch= useDispatch()
  const {inCart} = useSelector((state: AppState) => state.country)
  
  return (
    <div className="cart_continer">

      {inCart.length <= 0 && <div>Cart is empty!!!</div>}
      {inCart.map((country) => {
        
        return (
          <div>
            <h3>Countries For Sale:</h3>
          <ul key={country.name}>
            <li><img className="flag" src={country.flag} alt="flag" /></li>
            <li>{country.name}</li>
            <li><button className="cartbutton" onClick={() => dispatch(RemoveCountry(country))}>Not Interested </button></li>   
          </ul>
          </div>
        )
      })}
    </div>
  )
}




