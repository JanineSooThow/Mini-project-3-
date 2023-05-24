let express = require("express");

let router = express.Router();

let Controllers = require("../controllers"); //index.js

//shows message "Welcome to my MongoDB application" in Postman
router.get('/', (req, res) => {
    Controllers.fruitfamilyController.getFamilies(req, res);
});

router.post('/create', (req, res) => {
    Controllers.fruitfamilyController.createFamily(req.body, res);
});

//will appear in postman and Mongodb (Mongodb will show the id)
router.put('/:id', (req, res) => {
    Controllers.fruitfamilyController.updateFamily(req, res);
})

router.delete('/:id', (req, res) => {
    Controllers.fruitfamilyController.deleteFamily(req, res);
});

module.exports = router;