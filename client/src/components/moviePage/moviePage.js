import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import YTSearch from 'youtube-api-search';
import BackArrow from '../../assets/back_arrow.jpg';
import YouTube from '../../assets/YouTube-DataAPI.jpg';
import './moviePage.scss';
import YouTube2 from 'react-youtube';

const API_KEY = process.env.REACT_APP_API_KEY;

const MoviePage = (props) => {
    const [term, setTerm] = useState('');
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setselectedVideo] = useState(null);

    const handleChange = (e) => {
        setTerm(e.target.value)


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // handleFormSubmit(term);
        requestTrailers(term)
    }

    const requestTrailers = (searchQuery) => {
        const options = {
            method: 'GET',
            url: `http://localhost:8080/trailers/${searchQuery}`,

        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setVideos(response.data.items);
        }).catch(function (error) {
            console.error(error);
        });
    }



    return (
        <div className="MoviePage">
            <form onSubmit={(e) => handleSubmit(e)} className="MoviePage__Form">
                <Link to="CountryList" className="MoviePage__BackArrow--Link"><img className="MoviePage__BackArrow" src={BackArrow} alt="arrow going back" /><span className="MoviePage__BackArrow--Text">go back</span></Link>
                <input onChange={(e) => handleChange(e)} className="MoviePage__YouTube--Search" placeholder="Search for 'Movie Name' Trailer Eg.(The Matrix Trailer)" type="text" name="name" />
                <button type="submit" className="MoviePage__YouTube--Button">search</button>
            </form>
            {videos.map(video => <div key={video.id}>
                <YouTube2 videoId={video.id}></YouTube2>
            </div>)}
            <div className="MoviePage__Text--Wrapper">
                <h1 className="MoviePage__Header">enjoy this trailer</h1>
                <div className="MoviePage__SubHeader--Wrapper">
                    <h3 className="MoviePage__SubHeader">courtesy of</h3>
                    <img className="MoviePage__Header--Image" src={YouTube} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MoviePage;
