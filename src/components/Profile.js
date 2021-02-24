import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'

const Profile = (props) => {
    console.log(props);
    const userData = props.user ? 
    (<div className='profile'>
        <p className='email'><strong>Email:</strong> {props.user.email}</p> 
        {/* <p className='ID'><strong>ID:</strong> {props.user.id}</p>  */}
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
        
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        
        );
    };

    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Profile;