import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = (props) => {
    console.log(props);
    const userData = props.user ? 
    (<div className='profile'>
     <div >
            
            <div className='col-md-7 offset-md-3'>
                <div className='card card-body' id='profilebody'>
                <h2 id='profiletitle' className="py-2">Blog Post</h2>
                    <form>
                <div className="form-group">
                    <label id='blogtitle'>Blog Title</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='form-group'>
                <label id='bloginfo'>Blog Info</label>
                <textarea className='form-control' />
                <button type="submit" className="btn btn-primary float-right">Submit</button>
            </div>
        </form>
        </div> 
        </div>  
        </div>
        {/* <p className='email'><strong></strong> {props.user.email}</p>  */}
        {/* <p className='ID'><strong>ID:</strong> {props.user.id}</p>  */}
    </div>) : <h4>Loading...</h4>
                    
    const errorDiv = () => {
        return (
            <form>
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
            </form>
        );
    };

    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Profile;