import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import chefEmoji from '../../assets/chefEmoji.jpg';
import BackArrow from '../../assets/back_arrow-white.jpg';
import './selectedCuisine.scss';

function SelectedCuisine(props) {
    const params = useParams();
    const currentCuisine = params.name;
    const history = useHistory();
   
    let idx = props.cuisine.findIndex(el => el.CuisineName === currentCuisine)

    const cuisine = props.cuisine[idx];
    console.log(cuisine)
    

    return(
        <div className="Cuisine">
                <div className="Cuisine__Header--Wrapper">
                    <div className="Cuisine__Link--Go-Back" onClick={() => history.goBack()}>
                        <img className="Cuisine__Back-Arrow" src={BackArrow} alt=""/>
                        <h4 className="Cuisine__Go-Back">Go Back</h4>
                    </div>
                    <h1 className="Cuisine__Header">Enjoy your {cuisine.CuisineName}</h1>
                </div>
            <div className="Cuisine__Info--Wrapper">
                <p className="Cuisine__Title">{cuisine.CuisineName}</p>
                <img className="Cuisine__Image" src={cuisine.Image} alt={cuisine.CuisineName} />
                <p className="Cuisine__Ingredients">INGREDIENTS: {cuisine.Ingredients}</p>
                <p className="Cuisine__Directions">DIRECTIONS: {cuisine.Directions}</p>
                <img className="Cuisine__Emoji" src={chefEmoji} alt="An emoji Chef" />
            </div>
        </div>
    )
}

export default SelectedCuisine;