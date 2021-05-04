import { CountryAction, Country, SET_COUNTRIES_LIST, ADD_COUNTRY, REMOVE_COUNTRY } from "../../types";
import { Dispatch } from 'redux'



export function AddCountry (country: Country) : CountryAction {
    return{
        type: ADD_COUNTRY,
        payload:{
            country
        }
    }
}
export function RemoveCountry (country: Country) : CountryAction {
    return{
        type: REMOVE_COUNTRY,
        payload:{
            country
        }
    }
}

export function setCountriesList(country: Country[]): CountryAction {
    return{
        type: SET_COUNTRIES_LIST,
        payload:{
            country
        }
    }
}
export function fetchCountry() {
    return async (dispatch: Dispatch) => {
      const resp = await fetch(`https://restcountries.eu/rest/v2/all`)
      const country = await resp.json(); 
      dispatch(setCountriesList(country))
    }
  }