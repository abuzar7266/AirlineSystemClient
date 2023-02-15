import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row} from 'react-bootstrap';
import '../pages/asset/customerLogin.css';
var BookingHistory = ()=>{
    return (<>
        <Container style={{marginLeft:'5%',marginTop:'2%'}}>
            <h1>
                Previous Bookings
            </h1>
            <Row>
                <Col md={7}>
                    <Card style={{padding:'0px',margin:"1px"}}>
                    <Card.Body>
                        <b>Pak Airlines</b>
                        <Row>
                            <Col md={6}>
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
                            <Col md={5}>
                                <Row>
                                    <Col>
                                        Status: Departed
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Departure Date: 01-01-2022
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={7}>
                    <Card style={{padding:'0px',margin:"1px"}}>
                    <Card.Body>
                        <b>Pak Airlines</b>
                        <Row>
                            <Col md={6}>
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
                            <Col md={5}>
                                <Row>
                                    <Col>
                                        Status: Departed
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Departure Date: 01-01-2022
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={7}>
                    <Card style={{padding:'0px',margin:"1px"}}>
                    <Card.Body>
                        <b>Pak Airlines</b>
                        <Row>
                            <Col md={6}>
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
                            <Col md={5}>
                                <Row>
                                    <Col>
                                        Status: Departed
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Departure Date: 01-01-2022
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>);
}
export default BookingHistory;