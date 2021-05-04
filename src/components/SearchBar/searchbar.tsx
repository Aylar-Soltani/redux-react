import React from 'react'
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md"
import { useSelector} from 'react-redux'
import {AppState} from '../../types'
import '../SearchBar/style.css'

type searchKeyword = {
    searchTerm: string
    handleChange: (event : React.ChangeEvent<HTMLInputElement> ) => void
}
export default function SearchBar({searchTerm , handleChange}: searchKeyword ) {
  const count = useSelector((state: AppState ) => state.counter.count)
  
   
    return ( 
      <div className = "search-container" >   
        <header>
           <nav>
              <input className="input-field"
                     value = {searchTerm}
                     type = 'text' 
                     name =' Search' 
                     placeholder = 'Search country ... ' 
                     onChange = {handleChange}   
             />
              <ul>
                
                <li><button className="navbutton"><Link to="/">Home</Link></button></li>
                <li><button className="navbutton"><Link  to={"/cart"}> {count}<span><MdShoppingCart/></span></Link></button></li>
                
              </ul>
            </nav>
        </header> 
      </div>  
    );
}