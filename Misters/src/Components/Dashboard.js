import React from 'react';
import DashboardHeader from './DashboardHeader';
import '../CSS/Login.css';

const Profile = (props) => {
 
    return (
        <>
           <div className="container-fluid">
                <DashboardHeader />
                <div className="headings">
                    <h3>Hi, {props.user}</h3>
                    <h1>Welcome to Mister.in profile</h1>
            </div>
            </div> 
        </>
    );
}

export default Profile;