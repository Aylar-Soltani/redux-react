import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CountryDetails from './pages/CountriyDetails'
import Cart from './pages/Cart'
import Home from './pages/Home'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/countries/:name" component={CountryDetails} />
    <Route  path="/cart" component={Cart} />
  </Switch>
)

export default Routes
