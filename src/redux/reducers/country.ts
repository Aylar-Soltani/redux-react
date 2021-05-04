import {CountryState, SET_COUNTRIES_LIST, CountryAction, ADD_COUNTRY, REMOVE_COUNTRY} from '../../types'


export default function country (
    state: CountryState = {
        allCountries: [], 
        inCart:[],
    },
    action: CountryAction 
): CountryState {
    switch (action.type) {


    case ADD_COUNTRY:{
        const {country} = action.payload
        if (state.inCart.find((c) => c.name === country.name)){
        
            return state
        }
        return {...state, inCart:[...state.inCart, country]}
    }


    case REMOVE_COUNTRY:{
        const {country} = action.payload
        const index = state.inCart.findIndex((c) => c.name === country.name)
        if (index>= 0) {
            state.inCart.splice(index, 1)
            return {...state, inCart:[...state.inCart]}
        }
        return state
    }


    case SET_COUNTRIES_LIST: {
        return{...state, allCountries: action.payload.country}
    }
     
    default:
        return  state
    }
} 