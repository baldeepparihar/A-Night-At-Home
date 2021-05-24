const express = require('express');
const app = express();
const countryRoutes = require('./routes/countries');
const cocktailRoutes = require('./routes/cocktailList');
const cuisineRoutes = require('./routes/cuisineList')

const PORT = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');
const { default: axios } = require('axios');

app.use(express.json());
app.use('*', cors());

app.use('/countries', countryRoutes);
app.use('/cocktailList', cocktailRoutes);
app.use('/cuisineList', cuisineRoutes);

app.get('/cocktails', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/randomselection.php',
        headers: {
          'x-rapidapi-key': '085290b6b2msh4fe3c028cba5609p1b6c39jsn5ee29378229e',
          'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
        }
      };
      
      axios.request(options)
      .then(function (response) {
        res.json(response.data);
      }).catch(function (error) {
        console.error(error);
      });
});


app.get('/cocktails/:cocktailId', (req, res) => {
  const options = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/randomselection.php',
      headers: {
        'x-rapidapi-key': '085290b6b2msh4fe3c028cba5609p1b6c39jsn5ee29378229e',
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      const Id = req.params.idDrink;
      const cocktailDetails = response.data
      console.log(req.params)
      const selectedCocktail = cocktailDetails.find(cocktail => {
        return cocktail.drinks.idDrink === Id
      })
      res.json(response.data);
    }).catch(function (error) {
      console.error(error);
    });
});

app.get('/trailers/:query', (req, res) => {
    const options = {
      method: 'GET', 
      url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
      headers: {
        'x-rapidapi-key': '085290b6b2msh4fe3c028cba5609p1b6c39jsn5ee29378229e',
        'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com'
      },
      params: {
        'q': req.params.query
    }
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      res.json(response.data);
    }).catch((error) => {
      console.log(error);
    });
});



app.post('/', (req, res) => {
    res.json('This is a Post Request');
})

app.put('/', (req, res) => {
    res.json("Here is a put request");
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
