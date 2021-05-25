const express = require('express');
const app = express();
const countryRoutes = require('./routes/countries');
const cocktailRoutes = require('./routes/cocktailList');
const cuisineRoutes = require('./routes/cuisineList')
require('dotenv').config();

const PORT = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');
const { default: axios } = require('axios');

app.use(express.json());
app.use('*', cors());

app.use('/countries', countryRoutes);
app.use('/cocktailList', cocktailRoutes);
app.use('/cuisineList', cuisineRoutes);

app.get('/', (req, res) => {
  res.send('Hello World')
})
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


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
