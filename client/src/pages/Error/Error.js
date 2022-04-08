import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

export class Error extends Component {
    render() {
        return (
            <div className="error-container">
                <h1>404</h1>
                <p>
                    The link may be broken.
                </p>
                <small>Please try again or return to <Link to="/">home page</Link></small>
                <div className="circle small"></div>
                <div className="circle medium"></div>
                <div className="circle big"></div>
            </div>
        )
    }
}

export default Error;