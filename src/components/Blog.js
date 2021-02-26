import React, { useEffect, useState } from 'react'
import './Blog.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function Blog(props) {
    const [particularBlog, setParticularBlog] = useState('')
    const { id } = useParams()
    const [newComment, setNewComment] = useState('')
    // console.log(newComment)
    console.log(props.user)
    let comment;
    console.log('🇸🇮', id)
    useEffect(() => {
        axios.get(`http://localhost:8000/blog/blogs/${id}`).then(response => {
            console.log(response)
            setParticularBlog(response.data)
        })
    }, [])


    if (particularBlog.comments) {
        console.log(particularBlog.comments)
        comment = particularBlog.comments.map((comment, i) => (
            <p key={i}>{comment.comment}</p>
        ))
    } else {
        comment = <p>no comments yet</p>
    }
    // no comment is not yet rendering

    const handleBlogDelete = () => {
        // let blogId = match.params.id
        let blogId;
        let token = localStorage.getItem('authToken')
        fetch(`${process.env.REACT_APP_SERVER_URL}/blog/deleteblog/${blogId}`, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            method: 'DELETE'
        })
            .then(response => {
                // response.status === 204 ? {} : response.json()
                console.log('blog was deleted')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const addComment = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/blog/createcomment', {
            comment: newComment,
            author: props.user.id,
            id: id

        })
        .then((response)=>{
            setParticularBlog(response.data)
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
                            <h1>{particularBlog.title}</h1>
                            <label id='blogcontent'>Content</label>
                            <h5>{particularBlog.content}</h5>
                        </div>
                        <div id='blogcomments' className='form-group'>
                            <label>Comment</label>
                            {comment}
                            <form method='POST'  onSubmit={addComment}>
                                <textarea onChange={e => setNewComment(e.target.value)} className='form-control' />
                                <button type="submit" className="btn btn-primary float-right">Submit</button>
                                <button onClick={handleBlogDelete} type="submit" className="btn btn-primary float-right">Delete</button>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

