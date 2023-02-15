import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row} from 'react-bootstrap';
import '../pages/asset/customerLogin.css';
var BookingFlight = ()=>{
    const [state,setState] = useState(0);
    return (<>
        { state==0 && <Container style={{marginLeft:'5%',marginTop:'2%'}}>
            <h1>
                Booked Flight
            </h1>
            <Row>
                <Col md={9}>
                    <Card style={{padding:'0px',margin:"1px"}}>
                    <Card.Body>
                        <b>Pak Airlines</b>
                        <Row>
                            <Col md={4}>
                                <Row>
                                    <Col>
                                        Karachi to Lahore
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        January-01-2022 at 10:00 AM
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col>
                                        Status: Booked
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Departure Date: 01-01-2022
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <button onClick={()=>{setState(1)}}>Cancel</button>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={9}>
                    <Card style={{padding:'0px',margin:"1px"}}>
                    <Card.Body>
                        <b>Pak Airlines</b>
                        <Row>
                            <Col md={4}>
                                <Row>
                                    <Col>
                                        Karachi to Lahore
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        January-01-2022 at 10:00 AM
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col>
                                        Status: Booked
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Departure Date: 01-01-2022
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <button onClick={()=>{setState(1)}}>Cancel</button>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={9}>
                    <Card style={{padding:'0px',margin:"1px"}}>
                    <Card.Body>
                        <b>Pak Airlines</b>
                        <Row>
                            <Col md={4}>
                                <Row>
                                    <Col>
                                        Karachi to Lahore
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        January-01-2022 at 10:00 AM
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Col>
                                        Status: Booked
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Departure Date: 01-01-2022
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <button onClick={()=>{setState(1)}}>Cancel</button>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>}
        {
            state==1 && <Container>
                <h1>
                    Booked Flight
                </h1>
                <Row>
                    <Col md={6}>
                        <label htmlFor="">Password</label><br />
                        <input type="text" placeholder="Password"/><br />
                        <button onClick={()=>{setState(0)}}>Confirm</button>
                    </Col>
                </Row>
            </Container>
        }
    </>);
}
export default BookingFlight;