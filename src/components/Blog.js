import React, {useEffect, useState } from 'react'
import './Blog.css'

export default function Blog(){

    return (
        <div className='blog'>
            <img />
            <div className='col-md-7 offset-md-3'>
                <div className='card card-body'>
                <h2 id='title' className="py-2">Blog Post</h2>
                    <form>
                <div className="form-group">
                    <label>Blog Title</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='form-group'>
                <label>Blog Post</label>
                <textarea className='form-control' />
            </div>
            <button type="submit" className="btn btn-primary float-right">Submit</button>
        </form>
        </div> 
        </div>  
        </div>
    )
}

