import React, {useEffect, useState } from 'react'
import './Blog.css'

export default function Blog(){

    // axios.get('http://localhost:8000/').then(response => {
    //     console.log('🤗')
    //     console.log(response)
    // }) 

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
</div>
</form>
</div>
</div> 
        </div>
    )
}

