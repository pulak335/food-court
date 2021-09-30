/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Meal from '../Meals/Meal';
import './Resturent.css';
import NotPd from '../NotPd';
import { LinearProgress } from '@mui/material';


const Resturent = () => {
    const [searchInput, setSearchInput] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
            fetch(url)
                .then((res) => res.json())
                .then((data) => setMeals(data.meals))      
    }, [meals,searchInput])
    
    const handleSearch = (event) => {
        const search = event.target.value;
        setSearchInput(search);
    }
    return (
        <div className="meal-container">

            
            <TextField onChange={handleSearch} fullWidth label="Search " id="fullWidth" />
            {meals === 0 ? <LinearProgress color="success" />:            
                meals === null ? <NotPd/>:
                    <div className="col-meals">
                        {
                            meals.map((meal) => <Meal Meal meal = { meal } key = {meal.idMeal} ></Meal>)
                    }
                </div>
            }
        </div>
    );
};

export default Resturent;