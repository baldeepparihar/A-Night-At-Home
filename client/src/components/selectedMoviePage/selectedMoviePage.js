import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import BackArrow from '../../assets/back_arrow.jpg';
import YouTube from '../../assets/YouTube-DataAPI.jpg';
import './selectedMoviePage.scss';
import YouTube2 from 'react-youtube';

function SelectedMoviePage() {
    const [term, setTerm] = useState('');
    const [videos, setVideos] = useState([]);

    const params = useParams();
    const history = useHistory();

    const selectedMovie = params.name;

    const handleChange = (e) => {
        setTerm(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        requestTrailers(term);
    }

    const requestTrailers = (searchQuery) => {
        const options = {
            method: 'GET',
            url:  `https://a-night-at-home-server.herokuapp.com/trailers/${searchQuery}`,
        };

        axios.request(options).then((response) => {
            setVideos(response.data.items);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="MoviePage">
            <form onSubmit={(e) => handleSubmit(e)} className="MoviePage__Form">
                <div className="MoviePage__BackArrow--Link" onClick={() => history.goBack()}><img className="MoviePage__BackArrow" src={BackArrow} alt="arrow going back" /><span className="MoviePage__BackArrow--Text">go back</span></div>
                <input onChange={(e) => handleChange(e)} className="MoviePage__YouTube--Search" placeholder={`Search for "${selectedMovie} trailer"`} type="text" name="name" />
                <button type="submit" className="MoviePage__YouTube--Button">search</button>
            </form>
            {videos.map(video => <div key={video.id}>
                <YouTube2 className="MoviePage__Youtube--Trailers" videoId={video.id}></YouTube2>
            </div>)}
            <div className="MoviePage__Text--Wrapper">
                <h1 className="MoviePage__Header">enjoy this trailer</h1>
                    <h3 className="MoviePage__SubHeader">courtesy of</h3>
                    <img className="MoviePage__Header--Image" src={YouTube} alt="" />
            </div>
        </div>
    )
}

export default SelectedMoviePage;
