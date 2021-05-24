import React from 'react';
import './cocktailPage.scss';
import BackArrow from '../../assets/back_arrow-white.jpg';
import { Link } from 'react-router-dom';

function CocktailPage(props) {
    console.log({props});

    const { cocktails } = props;

    return (
        <div className="Cocktail">
            <div className="Cocktail__Header--Wrapper">
                <Link className="Cocktail__Link--Go-Back" to="/">
                <img className="Cocktail__Back-Arrow" src={BackArrow} alt=""/>
                <h4 className="Cocktail__Go-Back">Go Back</h4>
                </Link>
                <h1 className="Cocktail__Header">Choose a Cocktail of Your Choice</h1>
            </div>
            <div className="Cocktail__Info--Wrapper">
            {cocktails.drinks.map(cocktail => {
              return (
            <Link key={cocktail.idDrink} to={"CocktailPage/" + cocktail.idDrink} className="Cocktail__Item--Wrapper">
               
                <h2 className="Cocktail__Item--Header">{cocktail.strDrink}</h2>
                    <img className="Cocktail__Item--Image" src={cocktail.strDrinkThumb} alt=""/>
                <h4 className="Cocktail__Item--Description">{cocktail.strInstructions}</h4>
            </Link>
              )
            })}
            </div>
        </div>
    )
}

export default CocktailPage;
