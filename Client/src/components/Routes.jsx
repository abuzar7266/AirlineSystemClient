import React from 'react'

import { Route, Switch } from 'react-router-dom'
import AdminLogin from '../pages/AdminLogin';
import BookingFlight from '../pages/BookedFlights';
import Booking from '../pages/Booking';
import BookingHistory from '../pages/BookingHistory';
import CustomerLogin from '../pages/CustomerLogin';
import Flight_Detail from '../pages/flightDetail';
import Home from '../pages/Home';
import Logout from '../pages/Logout';
import Search from '../pages/SearchedFlight';
import CustomerSignup from '../pages/SignupCustomer';
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/customerLogin' exact component={CustomerLogin}/>
            <Route path='/adminLogin' exact component={AdminLogin}/>
            <Route path='/logout' exact component={Logout}/>
            <Route path='/booking' exact component={Booking}/>
            <Route path='/flight' exact component={Search}/>
            <Route path='/history' exact component={BookingHistory} />
            <Route path="/signup" exact component={CustomerSignup} />
            <Route path="/booked" exact component={BookingFlight} />
            <Route path="/detail" exact component={Flight_Detail} />
        </Switch>
    );
}

export default Routes;