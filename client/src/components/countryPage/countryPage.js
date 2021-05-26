import React, { useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import BackArrow from '../../assets/back_arrow.jpg'
import './countryPage.scss';


function CountryPage(props) {
    const { countries, movies, requestMovies } = props;
    const params = useParams();
    const history = useHistory();

    const country = countries.filter((country) => {
      return country.code === params.countryId;
  });
 
  useEffect(() => {
    requestMovies(country[0].code);
  }, [])


    const renderMovie = () => {
          return(
            <div className="MovieInfo">
                {movies.map(movie => (
                    <Link className="MovieInfo__Link" to={"/selectedMoviePage/" + movie.title}>
                    <div className="MovieInfo__Wrapper">
                        <h2 className="MovieInfo__Title">{movie.title}</h2>
                        <img className="MovieInfo__Image" src={movie.image} />
                        <p className="MovieInfo__Synopsis">{movie.synopsis.slice(0, -28)}</p>
                        <p className="MovieInfo__Released">{movie.released}</p>
                        <p className="MovieInfo__Runtime">{movie.runtime}</p>
                        <p className="MovieInfo__TrailerClick">Click movie for trailer</p>
                    </div>
                    </Link>
                ))}
              </div>
          )
    }

    return (
        <div className="Country">
                <div className="Country__Header--Container">
                  <div onClick={() => history.goBack()} className="Country__BackArrow--Link"><img className="Country__BackArrow" src={BackArrow} alt="arrow going back"/><span className="Country__BackArrow--Text">go back</span></div>
                  <h1 className="Country__Header">{country[0].name}</h1>
                </div>
              {renderMovie()}
        </div>
    )
}


export default CountryPage;
