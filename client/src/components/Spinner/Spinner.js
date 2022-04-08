import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner-container">
                <div className="spinner-fill"></div>
                <div className="spinner-line"></div>
            </div>
            <div className="spinner-text-container">
                <span>Please Wait, Loading</span>
            </div>
        </div>
    );
}

export default Spinner;
