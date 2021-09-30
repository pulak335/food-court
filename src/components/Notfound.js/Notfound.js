import React from 'react';
import { Link } from 'react-router-dom';


const Notfound = () => {
    return (
        <div>
            <h1>404 Error</h1>
            <h2>This page does not exist!</h2>
            <Link to='/'>
            <button type="button" className="btn btn-info text-white">Back to Home</button>
            </Link>
        </div>
    );
};

export default Notfound;