import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './general.css';

class BottomNavBar extends React.Component {
    render() {
        return (
            <div>
                
            <Navbar fixed="bottom" className="bottomNavBar" bg="dark" variant="light">
                <Nav.Link href="/">How to make an appointment</Nav.Link>
                <Nav.Link href="/">About us</Nav.Link>
                <Nav.Link href="/">Privacy Policies</Nav.Link>
                <Nav.Link href="/">Contact us</Nav.Link>
                <Nav.Link href="/">Did you find an error?</Nav.Link>
            </Navbar>
            </div>
        );
    }
}

export default BottomNavBar;