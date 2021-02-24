import React from 'react';
import './Welcome.css'
import axios from 'axios'
import { useState } from 'react';

const Welcome = (props) => {
    let [user, setUser] = useState(props.user)

    console.log(user)
    axios.get(`http://localhost:8000/blog/seeblogs/${user}`)
    .then(response => {
        console.log(response.data)
    })
    return (
        <div className='welcomebody'>
            <p><strong>{user}</strong> </p>
            <p><h3>something</h3>  </p> 
        </div>
    );
}

export default Welcome;