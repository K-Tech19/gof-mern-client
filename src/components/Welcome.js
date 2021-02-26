import React, { useState, useEffect} from 'react';
import './Welcome.css'
import axios from 'axios'
// import { useState } from 'react';

const Welcome = (props) => {

    const [games, setGames] = useState({})
    const [blogs, setBlogs] = useState('')


    console.log('this ran ')
    console.log(props.user)

    useEffect(()=> {
        axios.get(`http://localhost:8000/blog/allBlogs`)
        .then(response => {
            console.log(response.data)
            setBlogs(response.data.reverse())
        })
    }, [])
    let blogList ;
    console.log('🥶',blogs[0])
    if(blogs.length > 0) {
        blogList = blogs.map((blog, index) => {
           return (
               <div key={index}>
                   <p><a href={`/blog/${blog._id}`} >{blog.title}</a></p>
               </div>
           )
       })
    }
    useEffect(() =>{
        axios.get('https://api.rawg.io/api/games').then(response =>{
            // console.log(response.data.results)
            setGames(response.data.results)
        })
    }, [])
    console.log(games)
    let gameData ;
    if(games.length > 0){
        gameData = games.map((game, index)=>{

            return(
                <div key={index}>
                    <h1>{game.name}</h1>
                    {/* <img src={game.background_image} alt='game' /> */}
                </div>
            )
        })
    }


    return (
        <div className='welcomebody'>
            <div>
                <img />
                    <div className='col-md-7'>
                        <div id='userblogfeed'className='card card-body'>
                            <h2 id='title' className="py-2">Games</h2>
                                <form>       
                                    <div>
                                </div>
                            </form>
                            <div className='col-md-7'>
                        <div id='latestblogfeed'className='card card-body'>
                            <h2 id='title' className="py-2">New Blogs</h2>
                                <div>
                                    <p></p>
                                </div>
                                <form>       

                              {blogList}
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