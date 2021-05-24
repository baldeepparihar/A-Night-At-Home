import React from 'react';
import './countryList.scss';
import { Link } from 'react-router-dom';

 function CountryList(props) {
    return (
        <div className="CountryList">
            <div className="CountryList__Header--Wrapper">
            <h1 className="CountryList__Header">Begin by choosing a country</h1>
            </div>
            <ul className="CountryList__List--Wrapper">
            {props.countries.map(country => {
              return (
              <Link key={country.Id} to={'CountryPage/' + country.code} className="CountryList__List">{country.name}</Link>
              )
            })}
            </ul>
            <div className="CountryList__Button--Container">
                <Link to="/" className="CountryList__Button">home</Link>
            </div>
        </div>
    )
}

export default CountryList;
