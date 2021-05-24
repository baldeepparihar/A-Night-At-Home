import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import drinkingEmoji from '../../assets/drinkingEmoji.png';
import BackArrow from '../../assets/back_arrow-white.jpg';
import './selectedCocktail.scss';

function SelectedCocktail(props) {
    const params = useParams();
    const currentCocktail = params.name;
    const history = useHistory();
   
    let idx = props.cocktails.findIndex(el => el.CocktailName === currentCocktail)
    console.log(idx)

    const cocktail = props.cocktails[idx];
    console.log(cocktail)
    

    return(
        <div className="Cocktails">
                <div className="Cocktails__Header--Wrapper">
                    <div className="Cocktails__Link--Go-Back" onClick={() => history.goBack()}>
                        <img className="Cocktails__Back-Arrow" src={BackArrow} alt="Arrow Back"/>
                        <h4 className="Cocktails__Go-Back">Go Back</h4>
                    </div>
                    <h1 className="Cocktails__Header">Enjoy your {cocktail.CocktailName}</h1>
                </div>
            <div className="Cocktails__Info--Wrapper">
                <p className="Cocktails__Title">{cocktail.CocktailName}</p>
                <img className="Cocktails__Image" src={cocktail.Image} alt={cocktail.CocktailName} />
                <p className="Cocktails__Ingredients">INGREDIENTS: {cocktail.Ingredients}</p>
                <p className="Cocktails__Directions">DIRECTIONS: {cocktail.Directions}</p>
                <img className="Cocktails__Emoji" src={drinkingEmoji} alt="An emoji Drinking" />
            </div>
        </div>
    )
}

export default SelectedCocktail;