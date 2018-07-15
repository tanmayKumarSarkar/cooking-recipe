import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import './ErrorComp.css';

class ErrorComp extends Component {

  
  render() {
    return (
        <div > 
            <Header/>
            <div className="error-page">
                <div>
                    
                    <h1 data-h1="404">404</h1>
                    <p data-p="NOT FOUND">NOT FOUND</p>
                    <Link className="btn-home" to="/">BACK TO HOME</Link>
                </div>
                </div>
                <div id="particles-js">
            </div>
                        
    </div>
    );
  }
}
export default  ErrorComp;