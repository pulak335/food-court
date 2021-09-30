/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Mealsdetails from '../Mealsdetails/Mealsdetails';

const Mealcard = () => {
    const [details, setDetails] = useState([]);
    const { mealId } = useParams();
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        // eslint-disable-next-line no-unused-expressions
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDetails(data.meals))
    },[details])
    return (
        <div>           
            {
                details.map((detail)=><Mealsdetails key={detail.idMeal} detail={detail}></Mealsdetails>)
            }
        </div>
    );
};

export default Mealcard;