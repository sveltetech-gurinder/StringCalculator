import React from 'react';
import '../CSS/Header.css';

const Header = () => {
 
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid nav">
                    <div className="row">
                        <div className="col-1">
                            <img src="/Images/logo@3x.png" className="img-resposive" alt="Misters" width="100" height="20"/>
                        </div>
                        <div className="col-8 navlabels">
                            <a className="navbar-brand" href="">HOME</a>
                            <a className="navbar-brand" href="">AYURVEDA</a>
                            <a className="navbar-brand" href="">BLOG</a>
                            <a className="navbar-brand" href="">FAQs</a>
                            <a className="navbar-brand" href="">ABOUT</a>
                        </div>
                        <div className="col-1 Icon1">
                        <img src="/Images/shopping.jpg" className="img-resposive" alt="Misters" width="30" height="auto"/>
                        </div>
                        <div className="col-1 Icon2">
                        <img src="/Images/user@2x.png" className="img-resposive" alt="Misters" width="25" height="auto"/>
                        </div>
                        <div className="col-1 shopbutton">
                            <button type="button" className="btn rounded-pill btn-danger">SHOP</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;