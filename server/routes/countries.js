const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');
const cors = require('cors');

// Country Data
let countryDetails = require('../data/countries.json');


// Route for countries list
router.get('/', (req, res) => {
    res.json(countryDetails);
});

// Get selected country by filtering out the rest of the countries
router.get('/:countryId', (req, res) => {
    const Id = req.params.Id;
    const selectedCountry = countryDetails.find(country => {
        return country.Id === Id
    })
    res.json(selectedCountry);
});

router.post('/', (req, res) => {
    // Get post request info
    const country = req.body;
    // adding a random id
    country.Id = uniqid();
    // push info to videoDetails
    countryDetails.push(country);
    const path = './data/countries.json';
    const data = JSON.stringify(countryDetails);

    fs.writeFileSync(path, data)
    res.json(country);
});


module.exports = router;