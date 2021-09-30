/* eslint-disable jsx-a11y/alt-text */
import { Typography } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';
import './Mealsdetails.css';

const Mealsdetails = (props) => {
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = props.detail;
    return (
        <div className='meal-container'>
            <img src={strMealThumb}/> 
            <Typography variant="h1" component="h2">
                {strMeal}
            </Typography>
            <Typography variant="h3" component="h2">
                Category: {strCategory}
            </Typography>
            <Typography variant="h3" component="h2">
               Area: {strArea}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {strInstructions}
            </Typography>
            <Link to='/'>
            <button type="button" className="btn btn-info text-white mb-3">Back to Home</button>
            </Link>
        </div>
    );
};

export default Mealsdetails;