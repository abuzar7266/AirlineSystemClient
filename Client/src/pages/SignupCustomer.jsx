import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row} from 'react-bootstrap';
import '../pages/asset/customerLogin.css';
var CustomerSignup = ()=>{
    const [loginInfo,setLoginInfo] = useState({
        email:'',
        password:''
    });
    useEffect(()=>{
        if(localStorage.getItem('login')!=null){
            window.location = 'http://localhost:3000/';
        }  
    },[])
    const handleLogin = ()=>{
        localStorage.setItem('TYPE','CUSTOMER');
        localStorage.setItem('login',true);
        localStorage.setItem('email',loginInfo.email);
        localStorage.setItem('password',loginInfo.password);
        window.location = 'http://localhost:3000/';
    }
    return (<>
        <Container style={{marginTop:'10%', marginLeft:'40%'}}>
            <Row>
                <Col
                sm={12}
                md={8}
                lg={4}
                >
                    <Card style={{width:'30em'}}>
                        <Card.Header style={{backgroundColor:'white'}}> Customer Signup</Card.Header>
                        <Card.Body>
                            <input type="text" placeholder="Name"/> <br />
                            <input type="text" placeholder="Email Address" onChange={(e)=>{setLoginInfo({email:e.target.value})}}/><br />
                            <input type="text" placeholder="Password" onChange={(e)=>{setLoginInfo({password:e.target.value})}}/> <br />
                            <Row>
                                <Col md={2}>
                                </Col>
                                <Col md={4}>
                                <button onClick={handleLogin}>Login</button>
                                </Col>
                                <Col md={4}>
                                <button style={{marginLeft:'2px'}} onClick={()=>{window.location='/signup'}}>Signup</button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>);
}
export default CustomerSignup;