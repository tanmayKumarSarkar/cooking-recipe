import React from 'react';
import logo from '../logo.svg';

const Header = props => (
    <header className="App-header">
    <div className="row">
        <span className="col-md-2"><img src={logo} className="App-logo" alt="logo" /></span>
        <span className="col-md-8"><h1 className="App-title">Recipe Search</h1></span>
        <span className="col-md-2"></span>
    </div>
        
    </header>
);

export default Header;