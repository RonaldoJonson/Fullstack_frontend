import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './Components/zPages/LoginPage';
import RegisterPage from './Components/zPages/RegisterPage';
import TestPage from './Components/zPages/TestPage';

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/test" component={TestPage} />
        </Switch>
      </BrowserRouter>
    )
}
  
export default Routes;
/*
    <Route exact path="/signup" component={SignUpPage} />
    <PrivateRoute exact path="/feed" component={FeedPage} />
    <PrivateRoute exact path="/profile" component={Profile} />
    <PrivateRoute exact path="/editProfile" component={EditProfile} />
    <PrivateRoute exact path="/editAddress" component={EditAddress} />
    <PrivateRoute exact path="/search" component={SearchPage} />
    <PrivateRoute exact path="/address" component={RegisterAddressPage} />
    <PrivateRoute exact path="/Restaurant/:id" component={RestaurantPage} />
    <PrivateRoute exact path="/cart" component={CartPage} />
*/
