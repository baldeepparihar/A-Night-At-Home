import React, {useEffect, useState } from 'react';
import {Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/home/home';
import SelectedMoviePage from './components/selectedMoviePage/selectedMoviePage';
import Spinner from './components/spinner/spinner';
import CountryList from './components/countryList/countryList';
import CountryPage from './components/countryPage/countryPage';
import Cocktails from './components/cocktails/cocktails';
import RegionListCocktails from './components/regionList/regionListCocktails';
import Cuisine from './components/cuisine/cuisine';
import RegionListCuisine from './components/regionList/regionListCuisine';
import SelectedCocktail from './components/cocktails/selectedCocktail';
import SelectedCuisine from './components/cuisine/selectedCuisine';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState('');
  const [countries, setCountries] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [jsonCocktails, setjsonCocktails] = useState('');
  const [jsonCuisine, setjsonCuisine] = useState('');
  const location = useLocation();


  useEffect(() => {


        const options = {
          method: 'GET',
          url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
          params:
            {
                part:'bowling2',
                maxResults:5,
                key: 'AIzaSyA3rTRwqq0WkHLOAowBbrciI4iv0T0bvWg'
            }
        };
        
        axios.request(options)
        .then((response) => {
          const movies = response.data.ITEMS;
          setMovies(movies)
        }).catch((error) => {
          console.error(error);
        });
      
  }, []);
  
  const requestMovies = (country) => {
    const options = {
      method: 'GET',
      url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
      params: {q: `get:new7:${country}`, p: '1', t: 'ns', st: 'adv'},
      headers: {
        'x-rapidapi-key': '0f16ae37dbmshb709c040c338584p1c8ba2jsn5167955a5ed4',
        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options)
    .then((response) => {
      const movies = response.data.ITEMS;
      setMovies(movies)
    }).catch((error) => {
      console.error(error);
    });
  
  }

  const requestCountries = (selectedCountryCode) => {
    axios.get(`https://a-night-at-home-server.herokuapp.com/countries`)
    .then((response) => {
      const countries = response.data;
      setCountries(countries);
      const selectedCountry = countries.find((country) => country.code === selectedCountryCode);
      setSelectedCountry(selectedCountry);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  
  
  useEffect(() => {
    const country = location.pathname.split('/').pop();
    requestMovies(country);  
    requestCountries(selectedCountry);
    getCocktails();
    getCuisine();
  }, []);

  const getCocktails = () => {
    axios.get('https://a-night-at-home-server.herokuapp.com/cocktailList')
    .then(res => {
      const jsonFileCocktails = res.data;
      setjsonCocktails(jsonFileCocktails);
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  }

  const getCuisine = () => {
    axios.get('https://a-night-at-home-server.herokuapp.com/cuisineList')
    .then(res => {
      const jsonFileCuisine = res.data;
      setjsonCuisine(jsonFileCuisine);
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  }
  
  
  if (!movies)
    return <Spinner/>
  
  return (
    <div className="App">
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/CountryList" exact render={() => <CountryList countries={countries} />} />
    <Route path="/CountryPage/:countryId" exact render={() => <CountryPage movies={movies} countries={countries} />} />
    <Route path="/selectedMoviePage/:name" exact render={() => <SelectedMoviePage movies={movies} />} />
    <Route path="/RegionListCocktails" exact render={() => <RegionListCocktails cocktails={jsonCocktails}/>}/>
    <Route path="/Cocktails/:region" exact render={() => <Cocktails cocktails={jsonCocktails}/>}/>
    <Route path="/Cocktails/:region/:name" exact render={() => <SelectedCocktail cocktails={jsonCocktails}/>}/>
    <Route path="/RegionListCuisine" exact render={() => <RegionListCuisine cuisine={jsonCuisine}/>}/>
    <Route path="/Cuisine/:region" exact render={() => <Cuisine cuisine={jsonCuisine}/>}/>
    <Route path="/Cuisine/:region/:name" exact render={() => <SelectedCuisine cuisine={jsonCuisine}/>}/>
    </Switch>
    </div>
  );
}
 

export default App;