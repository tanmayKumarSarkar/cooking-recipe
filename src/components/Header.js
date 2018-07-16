import React from 'react';
import logo from '../logo.svg';

const Header = props => (
    <header className="App-header">
    <div className="row flex">
        <span className="col-3 px-0 mx-0"><img src={logo} className="App-logo" alt="logo" /></span> 
        <span className="col-5 p-0 m-0"><h1 className="App-title">Recipe Search</h1></span>
        <span className="col"></span>
    </div>
        
    </header>
);

export default Header;