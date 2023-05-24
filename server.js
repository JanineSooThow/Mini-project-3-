//npm init
//npm install express
//npm install dotenv
//npm install nodemon
//npm install mongoose --save
//npm i swagger-ui-express -s


const express = require("express");
const app = express();
require("dotenv").config();


//Importing dbConnect.js into our server.js file
let dbConnect = require("./dbConnect");

//swagger service added to server
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

// parse requests of content-type - application / json
app.use(express.json());

//adding routes
//root
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});


// '/fruitlist' lists all the fruits in postman
let fruitDBRoutes = require('./routes/fruitAPIRoutes')
    app.use('/fruitlist', fruitDBRoutes)

let familyFruitRoutes = require('./routes/familyRoute')
    app.use('/fruitfamily', familyFruitRoutes)

//swagger route
    app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
    );

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
