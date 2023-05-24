const axios = require('axios');

//the 'fetchAPIData' function uses Axios to make an HTTP GET request to the url endpoint. 
const fetchAPIData = (res) => {

    //getting the data from fruit api
    let config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: 'https://fruityvice.com/api/fruit/all',
        headers: { },
    };

    axios.request(config)
    .then((response) => {
    //console.log(JSON.stringify(response.data));

    //accessing the database and storing the response to it
   response.data.forEach((fruitFamily)=>{
        console.log(fruitFamily)
        const filteredFruitFamily = {
            "id": fruitFamily.id,
            "name": fruitFamily.name,
            "order": fruitFamily.order,
            "genus": fruitFamily.genus,
            "family": fruitFamily.family
        }
    //now we can put each filtered family into the databases
    Models.Family.create(filteredFruitFamily)
    .then(function (data) {

        }) 
    .catch(err => {
            throw err;
        });
    })
    //added this
    res.status(200)
    res.json("Successfully inserted into the database")
    })
    .catch((error) => {
        console.log(error);
    });
}



//CRUD


"use strict";
let Models = require("../models");


const getFamilies = (req, res) => {
        Models.Family.find({})
       .then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => { 
        console.log(err);
        res.send({result: 500, error: err.message});
    })
};

//creates new fruit in the database 
const createFamily = (data, res) => {
    Models.Family.create(data)
        .then(function (data) {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message});
        });
};

//updates a fruit in the database 
const updateFamily = (req, res) => {
    Models.Family.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        });
};

  const deleteFamily = (req, res) => {
    Models.Family.findByIdAndRemove(req.params.id, req.body, {
        useFindAndModify: false,
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

//API data fetching and database operations should be accessible when importing this module
module.exports = {
    fetchAPIData,
    getFamilies,
    createFamily,
    updateFamily,
    deleteFamily
}
