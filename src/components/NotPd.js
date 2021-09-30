import { LinearProgress } from '@mui/material';
import React from 'react';

const NotPd = () => {
    return (
        <div>
            <LinearProgress color="success" />

            <h1>This meal not available</h1>
        </div>
    );
};

export default NotPd;