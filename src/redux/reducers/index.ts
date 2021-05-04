import { combineReducers } from 'redux'
import counter from '../reducers/counter'


import country from './country'

const createRootReducer = () =>
  combineReducers({
    country,
    counter,
  })

export default createRootReducer
