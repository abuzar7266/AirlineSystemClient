import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row} from 'react-bootstrap';
import '../pages/asset/customerLogin.css';
var RegisteredFlights = [
    "Pak Airlines",
    "Qatar Airways",
    "New York Airlines"
]
var Booking = ()=>{
    const [filter,setFilter] = useState({
        airline:'',
        date:'',
        month:'',
        year:'',
        from:'',
        to:''
    })
    useEffect(()=>{
        
    },[])
    var handleSearch = ()=>{
        localStorage.setItem("airline",filter.airline);
        localStorage.setItem("date",filter.date);
        localStorage.setItem("month",filter.month);
        localStorage.setItem("year",filter.year);
        localStorage.setItem("from",filter.from);
        localStorage.setItem("to",filter.to);
        window.location = '/flight';
    }
    return (<>
        <Container style={{marginLeft:'20%'}}>
            <Row style={{marginBottom:'1%',marginLeft:'10em'}}>
                <h1>Book flight</h1>
            </Row>
            <Row>
                <Col
                md={8}
                lg={7}
                >
                    <Card style={{width:'40em'}}>
                        <Card.Header style={{backgroundColor:'white'}}>Search Available Flights</Card.Header>
                        <Card.Body>
                            <Row>
                            <select name="airline" id="airline" style={{width:'94%',height:'50px',padding:'10px',border:'solid lightgray 1px',marginBottom:'20px',marginLeft:'3%',borderRadius:'4px',backgroundColor:'white',color:'gray'}} onChange={(e)=>{setFilter({...filter,airline:e.target.value})}}>
                                    <option value=" " hidden>Select Airline</option>
                                    <option value=" ">All</option>
                                    {
                                        RegisteredFlights.map((data,index)=>{
                                            return (<option value={data} style={{padding:'10px'}}>{data}</option>)
                                        })
                                    }
                                </select>
                            </Row>
                            <Row style={{marginBottom:'20px',marginLeft:'10px'}}>
                                <input type="text" placeholder="From Country" style={{width:'46%'}} onChange={(e)=>{setFilter({...filter,from:e.target.value})}}/>
                                <input type="text" placeholder="To Destination" style={{width:'46%',marginLeft:'10px'}} onChange={(e)=>{setFilter({...filter,to:e.target.value})}}/>
                            </Row>
                            <Row>
                                <Col
                                md={4}
                                >
                                <input type="text" placeholder="Date" onChange={(e)=>{setFilter({...filter,date:e.target.value})}}/>
                                </Col>
                                <Col
                                md={4}
                                >
                                <input type="text" placeholder="Month" onChange={(e)=>{setFilter({...filter,month:e.target.value})}}/>
                                </Col>
                                <Col
                                md={4}
                                >
                                <input type="text" placeholder="Year" onChange={(e)=>{setFilter({...filter,year:e.target.value})}}/>
                                </Col>
                            </Row>
                            <Row style={{marginTop:'20px'}}>
                                <button style={{marginLeft:'40%'}} onClick={handleSearch}>Search</button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>);
}
export default Booking;