import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row} from 'react-bootstrap';
var RegisteredFlights = [
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
];
var Flight_Detail = ()=>{
    const [flight,setFlight] = useState([]);
    useEffect(()=>{
        const data = RegisteredFlights.filter((data)=>{ return data.id==localStorage.getItem('flight_id')});
        console.log(data);
        setFlight(data);
    },[])
    return (<>
    <Container>
        <Row>
            <Col md={2}>
            <button onClick={()=>{window.location='/flight'}}>Back</button>
            </Col>
            <Col md={6}>
                <h3>Flight Detail</h3>
            </Col>
        </Row>
        {
            flight.length!==0 && <div><p>
                <Row style={{marginTop:'20px',marginLeft:'1.4%'}}>
                    <b>ID</b>: {flight[0].id}
                </Row>
                <Row style={{marginLeft:'1%',marginLeft:'1.4%'}}>
                <p><b>From: </b> {flight[0].from} <br/><b>To:</b> {flight[0].to} <br/><b>Departure Date</b>: {flight[0].date}/{flight[0].month}/{flight[0].year} <br /><b>Fare: </b> {flight[0].fare} PKR</p>
                </Row>
                <Row style={{marginLeft:'1px'}}>
                    <Col md={9}>
                    {flight[0].description}
                    </Col>
                </Row>
                </p>
            </div>
        }
    </Container>
    </>);
}
export default Flight_Detail;