import React from 'react';
import { Link } from "react-router-dom";
import Flag from '../Flag/Flag';
import { Country} from '../../types'
import {AddCountry} from '../../redux/actions/country'
import {useDispatch} from 'react-redux'
import {AdjustCounter} from '../../redux/actions/counter'
import '../../App.css'


type TableRowProps ={country:Country}
const TableRow = ({country} : TableRowProps) => {
// const count = useSelector((state: AppState ) => state.counter.count)
    const dispatch = useDispatch()
    // console.log(count)
    
    
    return (
        <tr>
            <td><Flag flagUrl= {country.flag}/></td>
            <td>{country.name} </td>
            <td>{country.population} </td>
            <td>{country.languages.map(lang => (lang.name)).join(", ") } </td>
            <td>{country.region} </td>
            <td><button className="CountryButton" onClick= {() => {dispatch(AddCountry(country));dispatch(AdjustCounter())} }>Add</button> </td>
            <td>
                <Link  to={`/countries/${country.name}`}> <button className="CountryButton"> More Details</button></Link>
     
            </td>
        </tr>
    );
}
export default React.memo(TableRow) 

