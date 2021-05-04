import React from 'react'
import{ useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AppState, Country } from '../types'
      
type Id = {
  name:string
}       
export default function CountryDetails() {
    const {name}  = useParams<Id>();
    const {allCountries} = useSelector((state:AppState) => state.country)
    let filteredCountry= allCountries.filter((country) => {
      return (
          country.name.includes(name)  
      )
  })
    return (
      <div className="countryDetails">
      {filteredCountry.map((country: Country) => (
        <div key ={country.name}>
          <img className="flagEach" src={country.flag} alt="Flag" />
          <p>Country Name:{country.name}</p>
          <p>Population: {country.population} </p>
          <p>Region: {country.region}</p>
          <p>Languages:{country.languages.map(lang => (lang.name)).join(", ") }</p>

        </div>
      ))}
        
      </div>
    )
  }

