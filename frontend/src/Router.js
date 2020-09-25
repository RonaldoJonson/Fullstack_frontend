import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './Components/zPages/LoginPage';
import RegisterPage from './Components/zPages/RegisterPage';
import HomePage from './Components/Templates/t-Home';
import VideoPage from './Components/zPages/VideoPage';
import CreateVideo from './Components/zPages/CreateVideo';

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/Video/:id" component={VideoPage} />
          <Route exact path="/Upload" component={CreateVideo} />
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
