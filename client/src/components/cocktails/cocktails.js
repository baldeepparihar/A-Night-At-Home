import React from 'react';
import './cocktails.scss';
import BackArrow from '../../assets/back_arrow-white.jpg';
import { Link, useParams, useHistory } from 'react-router-dom';

function Cocktails(props){
    const { cocktails } = props;
    const params = useParams();
    const history = useHistory();

    
    const filtered = cocktails.filter((ct) => {
        return ct.Region === params.region;
    });

    const region = filtered[0].Region;

    const renderCocktail = () => {
        return (
            <div className="Cocktails__Info--Wrapper">
                {filtered.map(cocktail => {
                    return (
                    <Link to={region + '/' + cocktail.CocktailName} key={cocktail.Id} className="Cocktails__Info--Link">
                        <p className="Cocktails__Title">{cocktail.CocktailName}</p>
                        <img className="Cocktails__Image" src={cocktail.Image} alt={cocktail.CocktailName} />
                        <p className="Cocktails__Country">Country: {cocktail.Country}</p>
                        <p className="Cocktails__Click">(Click on a Cocktail to see Ingredients and Recipe)</p>
                    </Link>
                    )
                })}
            </div> 
        )
    }

    return(
        <div className="Cocktails">
            <div className="Cocktails__Header--Wrapper">
                <div className="Cocktails__Link--Go-Back"  onClick={() => history.goBack()}>
                    <img className="Cocktails__Back-Arrow" src={BackArrow} alt=""/>
                    <h4 className="Cocktails__Go-Back">Go Back</h4>
                </div>
                <h1 className="Cocktails__Header">Here is a selection of Cocktails from {region}</h1>
            </div>
            {renderCocktail()}
        </div>
    )
}

export default Cocktails;