import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import {Container, Col, Row} from 'react-bootstrap';
import '../pages/asset/customerLogin.css';
var Logout = ()=>{
    useEffect(()=>{
        localStorage.removeItem('login');
        localStorage.removeItem('Type');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location ='http://localhost:3000/';
    },[])
    return (<>
    </>);
}
export default Logout;