import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row} from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, YAxis, XAxis } from "recharts"

const chartData = [
  {
    name: "Jan",
    uv: 1
  },
  {
    name: "Feb",
    uv: 10
  },
  {
    name: "March",
    uv: 19
  },
  {
    name: "April",
    uv: 21
  },
  {
    name: "May",
    uv: 22
  },
  {
    name: "June",
    uv: 95
  },
  {
    name: "July",
    uv: 86
  },
  {
    name: "August",
    uv: 70
  },
  {
    name: "September",
    uv: 95
  },
  {
    name: "October",
    uv: 150
  },
  {
    name: "November",
    uv: 145
  },
  {
    name: "December",
    uv: 150
  }
]
var Home = ()=>{
    useEffect(()=>{
        if(localStorage.getItem('login')==null || localStorage.getItem('login')==false){
            window.location = 'http://localhost:3000/customerLogin';
        }
    },[])
    return (<>
    <Container>
        <Row style={{marginLeft:'40%'}}>
        <h3>Dashboard</h3>
        </Row>
        <Row>
            <Col md={6}>
                <Card>
                    <Card.Header style={{textAlign:'center'}}>Bookings</Card.Header>
                    <Card.Body>
                    <LineChart width={400} height={180} data={chartData}>
                        <Line type="monotone" dataKey="uv" stroke="skyblue" />
                        <YAxis />
                        <XAxis dataKey="name" />
                    </LineChart>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Header style={{textAlign:'center'}}>Flight</Card.Header>
                    <Card.Body>
                    <LineChart width={400} height={180} data={chartData}>
                        <Line type="monotone" dataKey="uv" stroke="skyblue" />
                        <YAxis />
                        <XAxis dataKey="name" />
                    </LineChart>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Airline</th>
                                    <th>Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001825653</td>
                                    <td>Pak Airlines</td>
                                    <td className="badge badge-sm badge-dark" style={{width:'80%',height:'3vh',marginTop:'10px'}}>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>);
}
export default Home;