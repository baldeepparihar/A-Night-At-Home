import React from 'react';
import './cuisine.scss';
import BackArrow from '../../assets/back_arrow-white.jpg';
import { Link, useParams, useHistory } from 'react-router-dom';

function Cuisine(props) {
    const { cuisine } = props;
    const params = useParams();
    const history = useHistory();


    const filtered = cuisine.filter((ct) => {
        return ct.Region === params.region;
    });

    const region = filtered[0].Region;
   

    const renderCuisine = () => {
        return(
            <div className="Cuisine__Info--Wrapper">
                {filtered.map(cuisine => {
                    return (
                    <Link key={cuisine.Id} to={region + '/' + cuisine.CuisineName}className="Cuisine__Info--Link">
                        <p className="Cuisine__Title">{cuisine.CuisineName}</p>
                        <img className="Cuisine__Image" src={cuisine.Image} alt={cuisine.CuisineName} />
                        <p className="Cuisine__Country">Country: {cuisine.Country}</p>
                        <p className="Cuisine__Click">(Click on a Cuisine to see Ingredients and Recipe)</p>

                    </Link>
                    )
                })}
            </div> 
        )
    }

    return(
        <div className="Cuisine">
            <div className="Cuisine__Header--Wrapper">
                <div className="Cuisine__Link--Go-Back"  onClick={() => history.goBack()}>
                    <img className="Cuisine__Back-Arrow" src={BackArrow} alt=""/>
                    <h4 className="Cuisine__Go-Back">Go Back</h4>
                </div>
                <h1 className="Cuisine__Header">Here is a selection of Cuisine from {region}</h1>
            </div>
            {renderCuisine()}
        </div>
    )
}

export default Cuisine;
