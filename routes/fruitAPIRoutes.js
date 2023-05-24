let express = require("express");

let router = express.Router();

let Controllers = require("../controllers"); //index.js

//shows message "Welcome to my MongoDB application" in Postman
router.get('/', (req, res) => {
    Controllers.fruitAPIController.getAllFruits(req, res);
});

/*
router.get('/load-Fruit-API', (req, res) => {
     Controllers.fruitAPIController.fetchAPIData(req, res);
 }); */


router.post('/create', (req, res) => {
    Controllers.fruitAPIController.createFruit(req.body, res);
});

//supply id we are going to edit and provide it as a path parameter (:) and once we have id we pass it with req

router.put('/:id', (req, res) => {
    Controllers.fruitAPIController.updateFruit(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.fruitAPIController.deleteFruit(req, res);
});

module.exports = router;