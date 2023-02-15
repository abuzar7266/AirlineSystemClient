import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row} from 'react-bootstrap';
import '../pages/asset/customerLogin.css';
var RegisteredFlights = {
    "Pak Airlines":[
        {
            id:'2',
            from:'Karachi',
            to:'Lahore',
            date:'01',
            month:'08',
            year:'2022',
            time:'9:00 AM',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tellus erat. Ut non risus at ipsum consectetur luctus vitae ac ante. Duis in placerat ante. Quisque condimentum, nisl eu semper suscipit, enim quam vestibulum lectus, nec tempor lorem sem nec ipsum. Sed vehicula urna vel suscipit tempus.',
            fare:1278
        },
        {
            id:'3',
            from:'Gujranwala',
            to:'Lahore',
            date:'01',
            month:'08',
            year:'2022',
            time:'1:00 PM',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tellus erat. Ut non risus at ipsum consectetur luctus vitae ac ante. Duis in placerat ante. Quisque condimentum, nisl eu semper suscipit, enim quam vestibulum lectus, nec tempor lorem sem nec ipsum. Sed vehicula urna vel suscipit tempus.',
            fare:1278,
        },
        {
            id:'4',
            from:'Karachi',
            to:'Lahore',
            date:'01',
            month:'08',
            year:'2022',
            time:'2:00 AM',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tellus erat. Ut non risus at ipsum consectetur luctus vitae ac ante. Duis in placerat ante. Quisque condimentum, nisl eu semper suscipit, enim quam vestibulum lectus, nec tempor lorem sem nec ipsum. Sed vehicula urna vel suscipit tempus.',
            fare:1500
        },
        {
            id:'5',
            from:'Karachi',
            to:'Lahore',
            date:'01',
            month:'08',
            year:'2022',
            time:'5:00 PM',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tellus erat. Ut non risus at ipsum consectetur luctus vitae ac ante. Duis in placerat ante. Quisque condimentum, nisl eu semper suscipit, enim quam vestibulum lectus, nec tempor lorem sem nec ipsum. Sed vehicula urna vel suscipit tempus.',
            fare:1200
        }
    ]
}
var Search = ()=>{
    const [flight,setFlight] = useState([]);
    const [state,setState] = useState(0);
    const [method,setMethod] = useState(" ");
    useEffect(()=>{
        setFlight([]);
        console.log('Hello');
        const airline = localStorage.getItem("airline");
        const from = localStorage.getItem("from");
        const to = localStorage.getItem("to");
        const date = localStorage.getItem("date");
        const month = localStorage.getItem("month");
        const year = localStorage.getItem("year");
        const flightList = RegisteredFlights[airline];
        console.log(flightList);
        console.log(airline);
        for(let i=0;i<flightList.length;i++){
            if(flightList[i].from==from && flightList[i].to==to && flightList[i].date==date && flightList[i].month==month && flightList[i].year==year){
                flight.push(flightList[i]);
            }
        }
        setFlight(flight);
    },[])
    var submitBook = (id,from,to,time,airline,date,month,year)=>{
        localStorage.setItem('FlightID',id);
        localStorage.setItem('from',from);
        localStorage.setItem('to',to);
        localStorage.setItem('time',time);
        localStorage.setItem('airline',airline);
        localStorage.setItem('date',date);
        localStorage.setItem('month',month);
        localStorage.setItem('year',year);
        setState(1);
    }
    const handleViewDetail = (id) => {
        localStorage.setItem('flight_id',id);
        window.location = '/detail';
    }
    var handleBooking = ()=>{
        window.location="/history"
    }
    return (<>
        { state==0 && <Container style={{marginLeft:'20%'}}>
            <Row style={{marginBottom:'7%',marginLeft:'3em'}}>
                <h1>Available Flight</h1>
            </Row>
            { flight.map((data,index)=>{
                return (<Row>
                <Col
                md={8}
                lg={7}
                >
                    <Card style={{width:'40em'}}>
                        <Card.Header>{localStorage.getItem("airline")} - {data.time}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={8}>
                                    <Row>
                                        <Col md={3}>{data.from}</Col> to <Col md={3}>{data.to}</Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>Date: {data.date}-{data.month}-{data.year} </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    Fare: {data.fare} PKR <br /><br />
                                    <button onClick={()=>{handleViewDetail(data.id)}}>View Detail</button><br /><br />
                                </Col>
                                <Col md={4}>
                                    <button onClick={()=>{submitBook(data.id,data.from,data.to,data.time,localStorage.getItem("airline"),data.date,data.month,data.year)}}>Book</button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>)
            })
            }
        </Container>}
        {
            state==1 && <Container style={{marginLeft:'20%'}}>
            <Row style={{marginBottom:'7%',marginLeft:'3em'}}>
                <h1>Booking Confirmation</h1>
            </Row>
            <Row>
                <Col
                md={8}
                lg={7}
                >
                    <Card style={{width:'40em'}}>
                        <Card.Header>{localStorage.getItem("airline")} - {localStorage.getItem("time")}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={8}>
                                    <Row>
                                        <Col md={3}>{localStorage.getItem("from")}</Col> to <Col md={3}>{localStorage.getItem("to")}</Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>Date: {localStorage.getItem("date")}-{localStorage.getItem("month")}-{localStorage.getItem("year")} </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <button onClick={()=>{setState(2)}}>Confirm</button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container>}
        {
            state==2 && <Container style={{marginLeft:'20%'}}>
            <Row style={{marginBottom:'7%',marginLeft:'3em'}}>
                <h1>Booking Confirmation</h1>
            </Row>
            <Row>
                <Col
                md={8}
                lg={7}
                >
                    <Card style={{width:'40em'}}>
                        <Card.Header>Contact</Card.Header>
                        <Card.Body>
                            <input type="text" placeholder="Contact Number"/><br />
                            <button style={{marginLeft:'40%'}} onClick={()=>{setState(3)}}>Proceed</button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        }
        {
            state==3 && <Container style={{marginLeft:'20%'}}>
            <Row style={{marginBottom:'7%',marginLeft:'10em'}}>
                <h1>Booking Confirmation</h1>
            </Row>
            <Row>
                <Col
                md={8}
                lg={7}
                >
                    <Card style={{width:'40em'}}>
                        <Card.Header>OTP Verification</Card.Header>
                        <Card.Body>
                            <input type="text" placeholder="Enter 4 Digit OTP"/><br />
                            <button style={{marginLeft:'40%'}} onClick={()=>{setState(4)}}>Proceed</button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        }
        {
            state==4 && <Container style={{marginLeft:'20%'}}>
            <Row style={{marginBottom:'7%',marginLeft:'3em'}}>
                <h1>Booking Confirmation</h1>
            </Row>
            <Row>
                <Col
                md={8}
                lg={7}
                >
                    <Card style={{width:'40em'}}>
                        <Card.Header>Booking Payment</Card.Header>
                        <Card.Body>
                            <select name="type-payment" id="type-payment" style={{width:'100%',border:'solid gray 1px',height:'40px',padding:'10px',borderRadius:'10px',color:'gray'}} onChange={(e)=>{setMethod(e.target.value)}}>
                                <option value=" " hidden>Select Payment Method</option>
                                <option value="Visa">Visa</option>
                                <option value="Easypaisa">Easypaisa</option>
                                <option value="Mastercard">Mastercard</option>
                            </select> <br /><br />
                            {
                                (method=="Visa" || method=="Mastercard") && (<>
                                    <input type="text" placeholder="Card Number"/> <br />
                                    <input type="text" placeholder="CVV"/> <br />
                                    <input type="text" placeholder="Expire Date"/>
                                </>)
                            }
                            {
                                (method=="Easypaisa") && (<>
                                    <input type="text" placeholder="Account Number"/>
                                </>)
                            }
                            <br />
                            <button style={{marginLeft:'40%'}}onClick={handleBooking}>Pay</button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        }
    </>);
}
export default Search;