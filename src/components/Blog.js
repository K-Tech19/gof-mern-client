import React, {useEffect, useState } from 'react'
import './Blog.css'

export default function Blog(){

    return (
        <div className='blog'>
            <img />
            <div className='col-md-7 offset-md-3'>
<div className="card card-body">
    
    <form>
        <div id='blogtitle' className="form-group">
            <label id='blogtitle'>Title</label>
             <input type='text' className='form-control' />
                <label id='blogcontent'>Content</label>
                    <input type='text' className='form-control' />
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

