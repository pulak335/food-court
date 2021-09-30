import {  Card,  CardContent, CardHeader, CardMedia, Collapse, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb } = props.meal;
    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        borderColor: 'text.primary',
        padding: 1
      };
    return (
        <div>
            <Box sx={{ ...commonStyles, border: 1, display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={strMeal}
                    subheader={strArea}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={strMealThumb}
                    alt="Paella dish"
                />
                <CardHeader
                    title={strCategory}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {strInstructions.slice(0,120)}
                    </Typography>
                </CardContent>
                <Collapse in='' timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    </CardContent>
                    </Collapse>
                    <Link to={`/meals/${idMeal}`}>
                    <button type="button" class="btn btn-info text-white"> Details</button>
                    </Link>
                </Card>
                </Box>
        </div>
    );
};

export default Meal;