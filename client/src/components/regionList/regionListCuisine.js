import React from 'react';
import './regionListCuisine.scss';
import { Link } from 'react-router-dom';

function regionListCuisine(props) {
    const { cuisine } = props;


    let filtered = []
function removeDuplicates(array) {
    array.map((x) => {
        if (!filtered.includes(x.Region)) {
            filtered.push(x.Region)
        }
        return filtered;  
    })
};
      removeDuplicates(cuisine)
    
    return (
        <div className="Region">
            <div className="Region__Header--Wrapper">
                <h1 className="Region__Header">Choose a region to find a Cuisine</h1>
            </div>
            <div className="Region--Wrapper">
        {filtered.map(region => (
            <Link key={region} to={'cuisine/' + region} className="Region--List">{region}</Link>
        ))}
            </div>
            <div className="Region__Button--Container">
                <Link to="/" className="Region__Button">home</Link>
            </div>
        </div>
    )
}

export default regionListCuisine;