import React from 'react';
import './singleCocktailPage.scss';
import BackArrow from '../../assets/back_arrow-white.jpg';
import { Link } from 'react-router-dom';

 function singleCocktailPage(props) {
     console.log(props.cocktails.drinks);
     const { cocktails } = props;

    return (
        <div className="SingleCocktail">
            <div className="SingleCocktail__Container">
            <div className="Cocktail__Header--Wrapper">
                <Link onClick={() => props.history.goBack()} className="Cocktail__Link--Go-Back" >
                <img className="Cocktail__Back-Arrow" src={BackArrow} alt=""/>
                <h4 className="Cocktail__Go-Back">Go Back</h4>
                </Link>
                <h1 className="SingleCocktail__Page--Header">drink list</h1>
            </div>
           {cocktails.drinks.map(cocktail => {
               return (
                   <div className="SingleCocktail__Wrapper">
                       <div className="SingleCocktail__Left">
                            <h1 className="SingleCocktail__Header">{cocktail.strDrink}</h1>
                            <p className="SingleCocktail__Description">This drink is {cocktail.strAlcoholic}</p>
                            <p className="SingleCocktail__Description">The type of glass required is a {cocktail.strGlass}</p>
                            
                       </div>
                       <div className="SingleCocktail__Right">
                       <h4 className="SingleCocktail__IngredientList">ingredient list</h4>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure1} {cocktail.strIngredient1}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure2} {cocktail.strIngredient2}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure3} {cocktail.strIngredient3}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure4} {cocktail.strIngredient4}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure5} {cocktail.strIngredient5}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure6} {cocktail.strIngredient6}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure7} {cocktail.strIngredient7}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure8} {cocktail.strIngredient8}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure9} {cocktail.strIngredient9}</p>
                            <p className="SingleCocktail__Ingredients">{cocktail.strMeasure10} {cocktail.strIngredient10}</p>
                            <h4 className="SingleCocktail__InstructionList">instructions</h4>
                            <p className="SingleCocktail__Instructions">{cocktail.strInstructions}</p>
                       </div>
                   </div>
               )
           })}
           </div>
            
        </div>
    )
}

export default singleCocktailPage;
