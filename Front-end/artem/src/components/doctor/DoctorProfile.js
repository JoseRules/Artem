import React from 'react';
import {Card, Button, Row, Col, Table} from 'react-bootstrap';
import '../general/general.css';
import naysha from '../../images/naysha.PNG';

class DoctorProfile extends React.Component {

    render() {
        
        return (
            <div className="container">
           
                    <Card className="patientProfileCard">
                        <Row>
                            <Col className="col col-3">
                                <Card.Img className="patientProfileImage" variant="top" src={naysha} />
                            </Col>
                            <Col>
                            <Card.Body>
                            <Card.Title>Dr. Naysha Chire</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <Table>
                                            <tbody>
                                                <tr>
                                                    <td className="titleProfile">Email</td>
                                                    <td>naysha.chire@artem.com</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">DOB</td>
                                                    <td>05/15/1994</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">Specialty</td>
                                                    <td>Gynecologist</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">Location</td>
                                                    <td>Himno #1520</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">Languages</td>
                                                    <td>English</td>
                                                </tr>
                                            </tbody>
                                        </Table>   
                                    </Col>
                                    <Col>
                                    <Table>
                                            <tbody>
                                                <tr>
                                                    <td className="titleProfile">Gender</td>
                                                    <td>Female</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">Cell Phone</td>
                                                    <td>331 525 1740</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">NPI</td>
                                                    <td>1704152</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">Experience</td>
                                                    <td>2 years</td>
                                                </tr>
                                                <tr>
                                                    <td className="titleProfile">Price</td>
                                                    <td>$300 MXN</td>
                                                </tr>
                                            </tbody>
                                        </Table> 
                                    </Col>

                                </Row>
                            </Card.Text>
                            <Button variant="primary">Edit</Button>
                        </Card.Body>
                            </Col>
                        </Row>
                        
                        
                    </Card>
                    <div id="spacePatientProfile"></div>
                </div>
   
        );
    }
}

export default DoctorProfile;