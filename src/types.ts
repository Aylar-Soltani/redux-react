// Action types
export const SET_COUNTRIES_LIST = 'SET_COUNTRIES_LIST '
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const ADJUST_COUNTER = 'ADJUST_COUNTER '



export type AdjustCounterAction= {
  type: typeof ADJUST_COUNTER
}


//Country
export type Country = {
  name: string
  population: number
  flag: string
  region: string
  languages: Array<{ name: string }>
  nativeName?: string
  quantity?: number
}

export type SetCountryListAction = {
  type: typeof SET_COUNTRIES_LIST
  payload: {
    country: Country[]
  }
}


export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

// Use this union in reducer


export type CountryAction = SetCountryListAction | AddCountryAction | RemoveCountryAction 

export type CounterState = {
  count: number
}

export type CountryState = {
  allCountries: Country[]
  inCart: Country[]
}


export type AppState = {

  country: CountryState
  counter: CounterState
}
