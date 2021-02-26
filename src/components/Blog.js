import React, {useEffect, useState } from 'react'
import './Blog.css'


export default function Blog({match}){

    // axios.get('http://localhost:8000/').then(response => {
    //     console.log('🤗')
    //     console.log(response)
    // }) 
    const handleBlogDelete = () => {
        let blogId = match.params.id
        let token = localStorage.getItem('authToken')
        fetch(`${process.env.REACT_APP_SERVER_URL}/blog/deleteblog/${blogId}`,{
            headers: {
                'Content-type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            method:'DELETE'
        } )
        .then(response =>{
            // response.status === 204 ? {} : response.json()
            console.log('blog was deleted')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='blog'>
            <img />
            <div className='col-md-7 offset-md-3'>
<div className="card card-body" id='blogbox'>
    
    <form>
        <div id='blogtitle' className="form-group">
            <label id='blogtitle'>Title</label>
                <h1>THE TITLE GOES HERE</h1>
                <label id='blogcontent'>Content</label>
                    <h5>BLOG CONTENT GOES HERE</h5>
                    </div>
                <div id='blogcomments'className='form-group'>
            <label>Comment</label>
        <textarea className='form-control' />
    <button type="submit" className="btn btn-primary float-right">Submit</button>
    <button onClick={handleBlogDelete} type="submit" className="btn btn-primary float-right">Delete</button>
</div>
</form>
</div>
</div> 
        </div>
    )
}

