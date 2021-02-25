import React from 'react';
import './Welcome.css'
import axios from 'axios'
// import { useState } from 'react';

const Welcome = (props) => {
    console.log('this ran ')
    console.log(props.user)
    axios.get(`http://localhost:8000/blog/seeblogs/${props.user}`)
    .then(response => {
        console.log(response.data)
    })
    return (
        <div className='welcomebody'>
            <p><strong>{props.user}</strong> </p>
            <h3>something</h3> 
        </div>
    );
}

export default Welcome;