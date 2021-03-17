// On récupère la config router de express
const express = require('express');
// On déclare notre router avec express
const router = express.Router();


router.get("/", (req, res) =>{
    res.send('coucou les gens, bientot en arrivant sur cette vous verrez un superbe pokedex coder par mes soins ! à bientôt')
});



module.exports = router;
