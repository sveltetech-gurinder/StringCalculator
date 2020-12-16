import React from 'react';
import Login from './LoginForm';
import Header from './Header';

const MainContent = () => {
 
    return (
        <>
            <div className="container-fluid">
                <Header />
                <Login />
            </div>
        </>
    );
}

export default MainContent;