const express = require('express');
const router = express.Router();
const fs = require('fs');

readCuisine = () => {
    const cuisineData = fs.readFileSync('./data/cuisineList.json');
    const parsedData = JSON.parse(cuisineData);
    return parsedData;
}

router.get('/', (req, res) => {
    res.json(readCuisine());
});




module.exports = router;