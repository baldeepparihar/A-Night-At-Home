const express = require('express');
const router = express.Router();
const fs = require('fs');

readCocktails = () => {
    const cocktailData = fs.readFileSync('./data/cocktailList.json');
    const parsedData = JSON.parse(cocktailData);
    return parsedData;
}

router.get('/', (req, res) => {
    res.json(readCocktails());
});




module.exports = router;