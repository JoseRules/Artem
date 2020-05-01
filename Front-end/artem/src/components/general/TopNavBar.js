import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Artem from "../../images/Artem.png";
import './general.css';

class TopNavBar extends React.Component {
    render() {
        return (
            <div className="navBarContainer">
                <Router>
                    <div>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand id="navbarBrand" href="/home">
                                <img alt="" src={Artem} width="70" height="70" />{' '} Artem
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Switch>
                                    <Route path="/doctor">
                                        <Nav className="mr-auto">
                                            <Nav.Link href="/doctorprofile">Profile</Nav.Link>
                                            <Nav.Link href="/doctorappt">Agenda</Nav.Link>
                                            <Nav.Link href="/calendar">Calendar</Nav.Link>
                                        </Nav>
                                        <Navbar.Brand inline >Welcome Dr. Naysha Chire!!</Navbar.Brand>
                                    </Route>
                                    <Route path="/patient">
                                        <Nav className="mr-auto">
                                            <Nav.Link href="/patient/profile">Profile</Nav.Link>
                                            <Nav.Link>Appointments</Nav.Link>
                                            <NavDropdown title="Search Doctors" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/doctorsearch">By location</NavDropdown.Item>
                                                <NavDropdown.Item href="/doctorsearch">By name</NavDropdown.Item>
                                                <NavDropdown.Item href="/doctorsearch">By specialty</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                        <Navbar.Brand inline >Welcome José Flores!!</Navbar.Brand>
                                    </Route>
                                    <Route path="/">
                                        <Nav className="mr-auto"></Nav>
                                        <Form inline>
                                            <Button className="mr-3" href="login" variant="outline-success">Login</Button>
                                            <Button href="/register" variant="outline-success">Sign up</Button>
                                        </Form>
                                    </Route>
                                </Switch>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </Router>

            </div>
        );
    }
}

export default TopNavBar;