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
    console.log(props.user)
    return (
        <div className='welcomebody'>
            <div>
                <img />
                    <div className='col-md-7'>
                        <div id='userblogfeed'className='card card-body'>
                            <h2 id='title' className="py-2">Your Blogs</h2>
                                <form>       
                                    <div>
                                </div>
                            </form>
                            <div className='col-md-7'>
                        <div id='latestblogfeed'className='card card-body'>
                            <h2 id='title' className="py-2">New Blogs</h2>
                                <form>       
                                <p><a href={`http://localhost:8000/blog/seeblogs/${props.user}`} ></a>What do you want form me</p>
                            </form>
                        </div> 
                    </div>  
                </div> 
            </div>
        </div>
    </div>
    );
}

export default Welcome;