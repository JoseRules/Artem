import React from 'react';
import TopNavBar from './TopNavBar.js';
import HomeScreen from './HomeScreen.js';
import BottomNavBar from './BottomNavBar.js';
import PatientProfile from '../patient/PatientProfile.js';
import RegistrationForm from './RegistrationForm.js';
import SearchDoctor from '../patient/SearchDoctor.js';
import DoctorProfile from '../doctor/DoctorProfile.js';
import Calendar from '../doctor/Calendar/Calendar.js';
import LoginScreen from '../general/LoginScreen.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Display extends React.Component {
    render() {
        return (
            <div>
                <TopNavBar />
                <Router>
                    <Switch>
                        <Route path="/register">
                            <RegistrationForm/>
                        </Route>
                        <Route path="/login">
                            <LoginScreen/>
                        </Route>
                        <Route path="/patient/searchdoctor">
                            <SearchDoctor/>
                        </Route>
                        <Route path="/patient/profile">
                            <PatientProfile />
                        </Route>
                        <Route path="/doctor/profile">
                            <DoctorProfile />
                        </Route>
                        <Route path="/doctor/calendar">
                            <Calendar />
                        </Route>
                        <Route path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                </Router>
                <BottomNavBar />
            </div>
        );
    }
}

export default Display;