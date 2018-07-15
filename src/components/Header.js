import React from 'react';
import logo from '../logo.svg';

const Header = props => (
    <header className="App-header">
    <div className="row">
        <span className="col-3"><img src={logo} className="App-logo" alt="logo" /></span> 
        <span className="col-5"><h1 className="App-title">Recipe Search</h1></span>
    </div>
        
    </header>
);

export default Header;