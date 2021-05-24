import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const home = () => {
    return (
        <div className="Hero">
            <div className="Hero__Header--Wrapper">
                <h1 className="Hero__Header">A Night at Home</h1>
            </div>
            <div className="Hero__Sub-Header--Wrapper">
                <p className="Hero__Sub-Header"><span className="Hero__Sub-Header--span">How it works</span>: Choose a country to see whats new on Netflix in that country</p>
                <p className="Hero__Sub-Header-2"><span className="Hero__Sub-Header--span">Next</span>: Set your VPN location to the desired country and enjoy</p>
            </div>
            <div className="Hero__Button--Container">
                <Link to="/CountryList" className="Hero__Button">films</Link>
            </div>
            <div className="Hero__Cocktail">
                <p className="Hero__Cocktail--Paragraph"><span className="Hero__Cocktail--Paragraph-Span">If you're up for it</span>: Choose a Cocktail or a Cuisine for your evening</p>
            </div>
            <div className="Hero__Cocktail--Button--Container">
                <Link to="/RegionListCocktails" className="Hero__Cocktail--Button">cocktails</Link>
            </div>
            <div className="Hero__Cuisine--Button--Container">
                <Link to="/RegionListCuisine" className="Hero__Cuisine--Button">cuisine</Link>
            </div>
            <div className="ContactInfo">
            <p className="ContactInfo-p">All rights reserved. Copyright © Baldeep Parihar, January 2021.</p>
            <p className="ContactInfo-p">'A Night at Home' developed by Baldeep Parihar: bparihar1@yahoo.com 310 989 8024</p>
            </div >
        </div>
    )
}

export default home;
